import React, { useContext } from 'react';
import { CgFacebook, CgTwitter } from 'react-icons/cg';
import { FaLinkedin } from 'react-icons/fa';
import { ThemeContext } from '../context';

const Footer = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="footer">
            <div>
                <h3 style={{ textAlign: 'center', fontSize: '18px', color: darkMode ? 'white' : '#201c1c' }}>Connect With Me</h3>
                <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', fontSize: '16px', padding: '0', margin: "0" }}>
                    <li><a style={{ textDecoration: 'none', marginLeft: "5px", fontSize: '24px', color: darkMode ? 'white' : '#201c1c' }} href="https://www.facebook.com/mdhasanuzzaman.hasan.90813" target="_blank" rel="noreferrer"><CgFacebook /></a></li>
                    <li><a style={{ textDecoration: 'none', marginLeft: "5px", fontSize: '24px', color: darkMode ? 'white' : '#201c1c' }} href="https://www.linkedin.com/in/hasanuzzaman-hasan-84b728161/" target="_blank" rel="noreferrer">   <FaLinkedin />             </a></li>
                    <li><a style={{ textDecoration: 'none', marginLeft: "5px", fontSize: '24px', color: darkMode ? 'white' : '#201c1c' }} href="https://twitter.com/hasanuzzaman789" target="_blank" rel="noreferrer"><CgTwitter /></a></li>
                </ul>
                <p style={{ marginTop: "0", paddingBottom: "5px" }}>Copyright &copy; Hasanuzzaman2021</p>
            </div>

        </div>
    );
};

export default Footer;