import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () =>
(
    <footer className="page-footer">
        <div className="footer-content text-center">
            <p>&copy; Anirudh Umarji</p>
            <a href="https://www.linkedin.com/in/anirudh-umarji-3734a7191/"
                target="blank">
                <FaLinkedin />
            </a>
            <a href="https://github.com/Ani512" target="blank">
                <FaGithub />
            </a>
        </div>
    </footer>
);

export default Footer;