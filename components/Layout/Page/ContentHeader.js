import React from 'react'
import classNames from 'classnames';

export default props => {
    return (<div {...props} className={classNames('content-heading',props.className || '')} >
        {props.children}
    </div>)
}
