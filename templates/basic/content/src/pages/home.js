// @flow
import React from 'react';

import {styled} from 'fusion-plugin-styletron-react';

const Center = styled('div', {fontFamily: 'Helvetica, Arial', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100%' })
const FusionStyle = styled('div', {fontSize: '50px', paddingBottom: '40px'})
const GettingStartedLink = styled('a', {textDecoration: 'none', color: 'black'});
const FullHeightDiv = styled('div', { height: '100%'});

const Home = () => (
    <FullHeightDiv>
        <style>
        {`
        html,body,#root{height:100%;}
        html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}
        body{margin:0;}
        button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}
        input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}
        `}
        </style>
        <Center>
            <FusionStyle>
            Fusion.js
            </FusionStyle>
        <GettingStartedLink href="https://fusionjs.com/docs/getting-started">Let's Get Started</GettingStartedLink>
        </Center>
    </FullHeightDiv>
);

export default Home;
