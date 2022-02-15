import React, { useContext } from 'react';
import { CgFacebook } from 'react-icons/cg';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { ThemeContext } from '../context';

const Footer = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="footer">
            <div>
                <h4 className='f-t' style={{ color: darkMode ? 'white' : '#201c1c' }}>Connect With Me</h4>
                <ul style={{ display: 'flex', alignItems: "center", justifyContent: 'center', listStyle: 'none', fontSize: '16px', padding: '0', marginTop: "5px" }}>
                    <li><a className='f-a' style={{ color: darkMode ? 'white' : '#201c1c', marginLeft: 0 }} href="https://www.facebook.com/mdhasanuzzaman.hasan.90813" target="_blank" rel="noreferrer"><CgFacebook /></a></li>
                    <li><a className='f-a' style={{ color: darkMode ? 'white' : '#201c1c' }} href="https://www.linkedin.com/in/hasanuzzaman-hasan-84b728161/" target="_blank" rel="noreferrer">   <FaLinkedin />             </a></li>
                    <li><a className='f-a' style={{ color: darkMode ? 'white' : '#201c1c' }} href="https://github.com/Hasan201601" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                    <li><a className='f-a' style={{ color: darkMode ? 'white' : '#201c1c' }} href="https://twitter.com/hasanuzzaman789" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
                </ul>
                <p className='f-c'>Copyright &copy; Hasanuzzaman2021</p>
            </div>

        </div>
    );
};

export default Footer;