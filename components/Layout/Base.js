import React from 'react';

import Head from './Head'
import Header from './Header'
import Sidebar from './Sidebar'
import Offsidebar from './Offsidebar'
import Footer from './Footer'
import SettingsProvider from './SettingsProvider'
import ThemesProvider from './ThemesProvider'

const Base = props => (
    <ThemesProvider>
        <SettingsProvider>
            <div className="wrapper">

                <Head />

                <Header />

                <Sidebar />

                <Offsidebar />

                <section className="section-container">
                    { props.children }
                </section>

                <Footer />
            </div>
        </SettingsProvider>
    </ThemesProvider>
)

export default Base;
