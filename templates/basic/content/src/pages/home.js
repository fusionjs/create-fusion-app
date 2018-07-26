// @flow
import React from 'react';

import {styled} from 'fusion-plugin-styletron-react';

const Center = styled('div', {fontFamily: 'HelveticaNeue-Light, Arial', display: 'flex', alignItems: 'center', height: '100%' })
const FusionStyle = styled('div', {fontSize: '80px', paddingLeft: '500px'})
const GettingStartedLink = styled('a', {textDecoration: 'none', color: 'blue', fonSize: '25px', marginLeft: '15px', marginTop: '30px'});
const FullHeightDiv = styled('div', { height: '100%', backgroundColor: '#FFFFFF'});
const Circle = styled('div', {height: '150px', width: '150px', backgroundColor: '#bbb', borderRadius: '50%'});

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
       
       <Circle>
        <GettingStartedLink href="https://fusionjs.com/docs/getting-started">Let's Get Started</GettingStartedLink>
        </Circle>
        </Center>
    </FullHeightDiv>
);

export default Home;
