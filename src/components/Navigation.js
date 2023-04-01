import React from 'react';

import { NavLink } from 'react-router-dom';
import { FaAddressBook, FaFacebookF, FaHome, FaImage, FaInstagram, FaLinkedinIn, FaMailBulk, FaMountain, FaPhone, FaRegImages, FaWhatsapp} from 'react-icons/fa';
const Navigation = () => {
    
    return (
        

       <div className='sidebar'>
        <div className='id'>
             <div className='idContent'>
                <img src='./media/prf.jpg' width="150px" alt='profil' />
                <h3>Vahanala Astrid</h3>
            </div>
        </div>
           

            <div className='navigation'>
                    <ul>
                   
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                        <i><FaHome /></i>
                        <span>Accueil</span>
                        </NavLink>

                    </li>
                    <li>
                            <NavLink exact to="/competence" activeClassName="navActive">
                           <i> <FaMountain /></i>
                          
                            <span>competences</span>
                            </NavLink>
                        </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                        <i><FaImage /></i>
                        <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                        <i><FaAddressBook /></i>
                        <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href='https://www.facebook.com'><FaFacebookF /></a>
                    </li>
                    <li>
                        <a href='gmail.com'><FaMailBulk /></a>
                    </li>
                    <li>
                        <a href='www.instagram.com'><FaInstagram /></a>
                    </li>
                    <li>
                        <a href='www.whatsapp.com'><FaWhatsapp /></a>
                    </li>
                </ul>
                <div className='signature'>
                    <p>Front ofice - 2023</p>
                </div>
            </div>

       </div>
    );
};

export default Navigation;