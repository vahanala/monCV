import React from 'react';
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaMapMarked, FaMobileAlt, FaWhatsapp } from 'react-icons/fa';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className='contactContent'>
                <div className='header'></div>
                <div className='contactBox'>
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i><FaMapMarked /></i>
                            <span className='clickInput'>Morondava</span>
                        </li>
                        <li>
                            <i><FaMobileAlt /></i>
                            <span className='clickInput'>034 59 837 38</span>
                        </li>
                        <li>
                            <i><FaEnvelope /></i>
                            <span className='clickInput'>astridvahanalageoffroy@gmail.com</span>
                        </li>
                    </ul>
                </div>
                    <div className='socialNetwork'>
                    <ul>
                 
                        <a href='https://www.facebook.com'>
                            <i><FaFacebookF /></i>
                            <h4>Facebook</h4>
                        </a>
                
                 
                       
                   
                   
                        <a href='https://www.istagram.com'>
                        <i><FaInstagram /></i>
                        <h4>Instagram</h4>
                        
                        </a>

                   
                  
                        <a href='www.whatsapp.com'>
                        <i><FaWhatsapp/></i>
                        <h4>Whatsapp</h4>
                        
                        </a>
                        <a>
                        <i><FaLinkedin/></i>
                        <h4>Linkedin</h4>
                        
                        </a>
                   
                </ul>
                    </div>
            </div>
            
        </div>
    );
};

export default Contact;