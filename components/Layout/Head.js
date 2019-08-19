import React from 'react';
import NextHead from 'next/head';
import PropTypes from 'prop-types';

const defaultDescription = '';

const Head = props => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>Angle Next App</title>
        <meta name="description" content={props.description || defaultDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/favicon.ico" />
    </NextHead>
);

Head.propTypes = {
    description: PropTypes.string
};

export default Head;
