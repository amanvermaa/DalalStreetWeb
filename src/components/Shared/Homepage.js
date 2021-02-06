import react, { Fragment, useEffect, useState } from 'react';
import './Homepage.css'

export default function Homepage({ lightBg, horizontalAlign, topline, headline, description, img, imgCount, altText }) {

    return (
        <div className={"homepage-container " + (lightBg ? "light-Display" : "dark-Display")}>
            <div className="container">


                {
                    horizontalAlign ?
                        <div className="row home-row">
                            <div className="col">
                                <div className="home-text-wrapper">
                                    <div className="topline">{topline}</div>
                                    <h1 className="headline">{headline}</h1>
                                    <p className="description">{description}</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className='home-img-wrapper'>
                                    <img src={img} alt={altText} className='home-img' />
                                </div>
                            </div>
                        </div>
                        :
                        <>
                            <div className="row home-row">
                                <div className="home-text-wrapper">
                                    <div className="topline">{topline}</div>
                                    <h1 className="headline">{headline}</h1>
                                    <p className="description">{description}</p>
                                </div>
                            </div>
                            <div className="row home-row">
                                <div className='home-img-wrapper'>
                                    <img src={img[0]} alt={altText} className='home-img' />
                                    <img src={img[1]} alt={altText} className='home-img' />
                                    <img src={img[2]} alt={altText} className='home-img' />
                                </div>
                            </div>
                        </>
                }
            </div>
        </div>
    );
}