import React from 'react';
import './Logo.scss';
import IMG from '../../assets/image/Logo.png';

function Logo() {
    return (
        <div className="LogoMain">
            <img src={IMG} alt="" className="LogoImg"></img>
        </div>
    );
}
export default Logo;
