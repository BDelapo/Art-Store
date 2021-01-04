import React from 'react';
import './FrontPage.css'
import styled from "styled-components"
import SlideShow from './SlideShow';

const FrontPage = () => {
    return (
        <StyledFrontPage>
            <div className='banner-container' style={{ height: '100%', overflow: 'visible', marginTop: '0', marginBottom: '10rem' }}>
                <SlideShow />
            </div >
            <div className="ui one column centered grid about-container" style={{ width: '100%', border: '', margin: '0', position: 'absolute', bottom: '12%' }}>
                <div className="centered row">
                    <div className="eight wide column">
                        <StyledSmallTitle>Experienced</StyledSmallTitle>
                        <StyledBoldTitle>Tattoo Artist</StyledBoldTitle>
                    </div>
                </div>
                <div className="centered row">
                    <div className="eight wide column">
                        <StyledSmallTitle>Aspiring </StyledSmallTitle>
                        <StyledBoldTitle>Mural Designer</StyledBoldTitle>
                    </div>
                </div>
                <div className="centered row">
                    <div className="eight wide column">
                        <StyledSmallTitle>Open to</StyledSmallTitle>
                        <StyledBoldTitle>Galleries</StyledBoldTitle>
                    </div>
                </div>
                <div className="centered row">
                    <div className="eight wide column">
                        <StyledSmallTitle>Prolific</StyledSmallTitle>
                        <StyledBoldTitle>Artist</StyledBoldTitle>
                    </div>
                </div>
                <div className="one column centered row" style={{ "margin": "1rem 0 6rem 0", width: '100%' }}>
                    <div className="eight wide column">
                        <p style={{ "textAlign": "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a dolor eget odio
                        placerat ornare at eget nulla. Nulla eu est tortor. Mauris quis enim vel tortor finibus finibus.
                        In tincidunt tortor eu eleifend dapibus. Phasellus sagittis lectus leo, sit amet scelerisque diam
                        consequat at. Nullam rutrum mi ipsum, vitae interdum lacus venenatis ut. Suspendisse varius ipsum at
                                nunc elementum.</p>
                    </div>
                </div>
            </div>
        </StyledFrontPage>

    );
}

const StyledFrontPage = styled.div`
    height: 250vh;
    position: relative;
    width: 100%;
    @media(max-width: 768px){
        height: 300vh;
    } 
    @media(max-width: 320px){
        height: 320vh;
    } 
`

const StyledAboutContainer = styled.div`
     width: 100%; 
     margin: '0'; position: absolute; 
     bottom: 12%;
`


const StyledBoldTitle = styled.h1`
    text-align: center;
    padding-bottom: 1.5em;
    font-family: Darker Grotesque !important;
    font-size: 3em;
`

const StyledSmallTitle = styled.p`
    text-align: center;
    margin-bottom: -1em;
    font-family: Darker Grotesque !important;
    font-size: 1.5em;
    font-weight: bold;
`

export default FrontPage;