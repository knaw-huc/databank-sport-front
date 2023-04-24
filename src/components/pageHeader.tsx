import React from 'react';
import {useNavigate, Link} from "react-router-dom";
import logo from '../assets/img/logo-homepage-intro.svg';
import "../assets/css/sport_style.css";

export function Header() {
    const nav = useNavigate();
    const searchLink = 'search/' + window.btoa(JSON.stringify({
        searchvalues: [],
        page: 1,
        page_length: 30,
        sortorder: 'title'
    }));

    return (
        <div>
            <div className="hcContentContainer bgColorBrand1 hcMarginBottom5">
                <header className=" hcPageHeaderSimple hcBasicSideMargin">
                    <div className="hcBrand">
                        <div className="hcBrandLogo">
                            <img src={logo} className="logo"/>
                        </div>
                    </div>
                    <div className="hcSiteTitle">
                        Databank Sport
                    </div>
                    <div className="navi">
                        <div><Link to="/">Inleiding</Link></div>
                        <div><Link to={searchLink}>Zoeken</Link></div>
                        <div><Link to="/gymnastiek">Sporten</Link></div>
                        <div><Link to='/literatuur'>Literatuur</Link></div>
                        <div><Link to='/colofon'>Colofon</Link></div>
                        <div><Link to='mailto:resources@huygens.knaw.nl'>Contact</Link></div>
                    </div>
                </header>
            </div>
        </div>)
}
