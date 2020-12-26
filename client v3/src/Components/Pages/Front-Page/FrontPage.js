import React from 'react';
import './FrontPage.css'
import styled from "styled-components"
import SlideShow from './SlideShow';

const FrontPage = () => {
    return (
        <div className="container" style = {{"width": ""}}>
            <div style={{ 'height': `200vh` }}>
                <div className='banner-container'>
                    <div className='banner'>
                        <h1 className='slide-logo'>Magali Moth</h1>
                    </div>
                    <SlideShow />
                </div >
                <div>
                    <div className="ui one column centered grid about-container">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

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