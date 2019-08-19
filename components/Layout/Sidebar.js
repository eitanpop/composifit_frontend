import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation, Trans } from '@/components/Common/Translate';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';
import { Collapse, Badge } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/actions';

import SidebarUserBlock from './SidebarUserBlock';

import Menu from './Menu.js';

// Helper to check for parrent of an given elements
const parents = (element, selector) => {
    if (typeof selector !== 'string') {
        return null;
    }

    const parents = [];
    let ancestor = element.parentNode;

    while (
        ancestor &&
        ancestor.nodeType === Node.ELEMENT_NODE &&
        ancestor.nodeType !== 3 /*NODE_TEXT*/
    ) {
        if (ancestor.matches(selector)) {
            parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
    }
    return parents;
};
// Helper to get outerHeight of a dom element
const outerHeight = (elem, includeMargin) => {
    const style = getComputedStyle(elem);
    const margins = includeMargin
        ? parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10)
        : 0;
    return elem.offsetHeight + margins;
};

/**
    Component to display headings on sidebar
*/
const SidebarItemHeader = ({ item }) => (
    <li className="nav-heading">
        <span>
            <Trans i18nKey={item.translate}>{item.heading}</Trans>
        </span>
    </li>
);

/**
    Normal items for the sidebar
*/
const SidebarItem = ({ item, isActive, className, onMouseEnter }) => (
    <li className={isActive ? 'active' : ''} onMouseEnter={onMouseEnter}>
        <Link href={item.path} as={item.as}>
            <a title={item.name}>
                {item.label && (
                    <Badge tag="div" className="float-right" color={item.label.color}>
                        {item.label.value}
                    </Badge>
                )}
                {item.icon && <em className={item.icon} />}
                <span>
                    <Trans i18nKey={item.translate}>{item.name}</Trans>
                </span>
            </a>
        </Link>
    </li>
);

/**
    Build a sub menu with items inside and attach collapse behavior
*/
const SidebarSubItem = ({ item, isActive, handler, children, isOpen, onMouseEnter }) => (
    <li className={isActive ? 'active' : ''}>
        <div className="nav-item" onClick={handler} onMouseEnter={onMouseEnter}>
            {item.label && (
                <Badge tag="div" className="float-right" color={item.label.color}>
                    {item.label.value}
                </Badge>
            )}
            {item.icon && <em className={item.icon} />}
            <span>
                <Trans i18nKey={item.translate}>{item.name}</Trans>
            </span>
        </div>
        <Collapse isOpen={isOpen}>
            <ul id={item.path} className="sidebar-nav sidebar-subnav">
                {children}
            </ul>
        </Collapse>
    </li>
);

/**
    Component used to display a header on menu when using collapsed/hover mode
*/
const SidebarSubHeader = ({ item }) => <li className="sidebar-subnav-header">{item.name}</li>;

const SidebarBackdrop = ({ closeFloatingNav }) => (
    <div className="sidebar-backdrop" onClick={closeFloatingNav} />
);

const FloatingNav = ({ item, target, routeActive, isFixed, closeFloatingNav }) => {
    let asideContainer = document.querySelector('.aside-container');
    let asideInner = asideContainer.firstElementChild; /*('.aside-inner')*/
    let sidebar = asideInner.firstElementChild; /*('.sidebar')*/

    let mar =
        parseInt(getComputedStyle(asideInner)['padding-top'], 0) +
        parseInt(getComputedStyle(asideContainer)['padding-top'], 0);
    let itemTop = target.parentElement.offsetTop + mar - sidebar.scrollTop;
    let vwHeight = document.body.clientHeight;

    const setPositionStyle = el => {
        if (!el) return;
        el.style.position = isFixed ? 'fixed' : 'absolute';
        el.style.top = itemTop + 'px';
        el.style.bottom = outerHeight(el, true) + itemTop > vwHeight ? 0 : 'auto';
    };

    return (
        <ul
            id={item.path}
            ref={setPositionStyle}
            className="sidebar-nav sidebar-subnav nav-floating"
            onMouseLeave={closeFloatingNav}
        >
            <SidebarSubHeader item={item} />
            {item.submenu.map((subitem, i) => (
                <SidebarItem key={i} item={subitem} isActive={routeActive(subitem.path)} />
            ))}
        </ul>
    );
};

/**
    The main sidebar component
*/
class Sidebar extends Component {
    state = {
        collapse: {},
        showSidebarBackdrop: false,
        currentFloatingItem: null,
        currentFloatingItemTarget: null
    };

    componentWillMount() {
        // prepare the flags to handle menu collapsed states
        this.buildCollapseList();

        // Listen for routes changes in order to hide the sidebar on mobile
        Router.events.on('routeChangeStart', this.handleRouteChange);
    }

    handleRouteChange = () => {
        this.closeFloatingNav();
        this.closeSidebar();
    };

    componentDidMount() {
        // Attach event listener to automatically close sidebar when click outside
        document.addEventListener('click', this.closeSidebarOnExternalClicks);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closeSidebarOnExternalClicks);
        Router.events.off('routeChangeStart', this.handleRouteChange);
    }

    closeSidebar = () => {
        this.props.actions.toggleSetting('asideToggled');
    };

    closeSidebarOnExternalClicks = e => {
        // don't check if sidebar not visible
        if (!this.props.settings.asideToggled) return;

        if (
            !parents(e.target, '.aside-container').length && // if not child of sidebar
            !parents(e.target, '.topnavbar-wrapper').length && // if not child of header
            !e.target.matches('#user-block-toggle') && // user block toggle anchor
            !e.target.parentElement.matches('#user-block-toggle') // user block toggle icon
        ) {
            this.closeSidebar();
        }
    };

    /** prepare initial state of collapse menus.*/
    buildCollapseList = () => {
        let collapse = {};
        Menu.filter(({ heading }) => !heading).forEach(({ name, path, submenu }) => {
            collapse[name] = this.routeActive(submenu ? submenu.map(({ path }) => path) : path);
        });
        this.setState({ collapse });
    };

    routeActive = paths => {
        const currpath = this.props.router.pathname;
        paths = Array.isArray(paths) ? paths : [paths];
        return paths.some(p => (p === '/' ? currpath === p : currpath.indexOf(p) > -1));
    };

    toggleItemCollapse = stateName => () => {
        for (let c in this.state.collapse) {
            if (this.state.collapse[c] === true && c !== stateName)
                this.setState({
                    collapse: {
                        [c]: false
                    }
                });
        }
        this.setState({
            collapse: {
                [stateName]: !this.state.collapse[stateName]
            }
        });
    };

    getSubRoutes = item => item.submenu.map(({ path }) => path);

    /** map menu config to string to determine which element to render */
    itemType = item => {
        if (item.heading) return 'heading';
        if (!item.submenu) return 'menu';
        if (item.submenu) return 'submenu';
    };

    shouldUseFloatingNav = () => {
        return (
            this.props.settings.isCollapsed ||
            this.props.settings.isCollapsedText ||
            this.props.settings.asideHover
        );
    };

    showFloatingNav = item => e => {
        if (this.shouldUseFloatingNav())
            this.setState({
                currentFloatingItem: item,
                currentFloatingItemTarget: e.currentTarget,
                showSidebarBackdrop: true
            });
    };

    closeFloatingNav = () => {
        this.setState({
            currentFloatingItem: null,
            currentFloatingItemTarget: null,
            showSidebarBackdrop: false
        });
    };

    render() {
        return (
            <>
                <aside className="aside-container">
                    {/* START Sidebar (left) */}
                    <div className="aside-inner">
                        <nav
                            className={
                                'sidebar ' +
                                (this.props.settings.asideScrollbar ? 'show-scrollbar' : '')
                            }
                        >
                            {/* START sidebar nav */}
                            <ul className="sidebar-nav">
                                {/* START user info */}
                                <li className="has-user-block">
                                    <SidebarUserBlock />
                                </li>
                                {/* END user info */}

                                {/* Iterates over all sidebar items */}
                                {Menu.map((item, i) => {
                                    // heading
                                    if (this.itemType(item) === 'heading')
                                        return <SidebarItemHeader item={item} key={i} />;
                                    else {
                                        if (this.itemType(item) === 'menu')
                                            return (
                                                <SidebarItem
                                                    isActive={this.routeActive(item.path)}
                                                    item={item}
                                                    key={i}
                                                    onMouseEnter={this.closeFloatingNav}
                                                />
                                            );
                                        if (this.itemType(item) === 'submenu')
                                            return [
                                                <SidebarSubItem
                                                    item={item}
                                                    isOpen={this.state.collapse[item.name]}
                                                    handler={this.toggleItemCollapse(item.name)}
                                                    isActive={this.routeActive(
                                                        this.getSubRoutes(item)
                                                    )}
                                                    key={i}
                                                    onMouseEnter={this.showFloatingNav(item)}
                                                >
                                                    <SidebarSubHeader item={item} key={i} />
                                                    {item.submenu.map((subitem, i) => (
                                                        <SidebarItem
                                                            key={i}
                                                            item={subitem}
                                                            isActive={this.routeActive(
                                                                subitem.path
                                                            )}
                                                        />
                                                    ))}
                                                </SidebarSubItem>
                                            ];
                                    }
                                    return null; // unrecognized item
                                })}
                            </ul>
                            {/* END sidebar nav */}
                        </nav>
                    </div>
                    {/* END Sidebar (left) */}
                    {this.state.currentFloatingItem && this.state.currentFloatingItem.submenu && (
                        <FloatingNav
                            item={this.state.currentFloatingItem}
                            target={this.state.currentFloatingItemTarget}
                            routeActive={this.routeActive}
                            isFixed={this.props.settings.isFixed}
                            closeFloatingNav={this.closeFloatingNav}
                        />
                    )}
                </aside>
                {this.state.showSidebarBackdrop && (
                    <SidebarBackdrop closeFloatingNav={this.closeFloatingNav} />
                )}
            </>
        );
    }
}

Sidebar.propTypes = {
    actions: PropTypes.object,
    settings: PropTypes.object
};

const mapStateToProps = state => ({ settings: state.settings });
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(withTranslation(Sidebar)));
