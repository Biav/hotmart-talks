import React from 'react';
import './Footer.scss';


const footer = () => (
    <footer className="footer">
        <div className="footer__contact-info">
            <div className="contact-info__text">!Habla com nosostros!</div>
            <div>
                <span className="contact-info__text">¿Dudas? </span> 
                Envía un email a <a href="mailto:talks@hotmart.com">talks@hotmart.com</a>
            </div>
        </div>
        <div className="footer__logo">
        </div>
        <div className="footer__social-icons">
            <ul className="social-icons__items">
                <a href="https://www.facebook.com/hotmartofficial/?brand_redir=152932231728040" target="_new">
                    <li className="social-icons__item social-icons__item--facebook"></li>
                </a>
                <a href="https://www.instagram.com/hotmart.spain/" target="_new">
                    <li className="social-icons__item social-icons__item--instagram"></li>
                </a>
                <a href="https://twitter.com/hotmart_es" target="_new">
                    <li className="social-icons__item social-icons__item--twitter"></li>
                </a>
                <a href="https://www.youtube.com/hotmartespanol" target="_new">
                    <li className="social-icons__item social-icons__item--youtube"></li>
                </a>
            </ul>
        </div>
    </footer>
)

export default footer;