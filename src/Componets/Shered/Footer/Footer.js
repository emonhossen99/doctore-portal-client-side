import React from 'react';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    const year =new Date().getFullYear()
    return (
        <div>
            <footer style={{
                background : `url(${footer})`,
                backgroundSize : 'cover'
            }} className=" p-10 text-base-content">
                <div  className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                </div>
                
            </footer>
            <div className="text-center px-10 py-6 border-t text-base-content border-base-300">
                    <p>Copyright © {year} - All right reserved</p>
                </div>
        </div>
    );
};

export default Footer;