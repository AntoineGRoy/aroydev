/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';

// Import Roboto font for MUI SSR
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta key="mui-viewport" name="viewport" content="initial-scale=1, width=device-width" />,
  ]);
};
