import React from 'react';
import { FaAmericanSignLanguageInterpreting, FaGithub, FaLanguage, FaPhabricator, FaWordpressSimple } from 'react-icons/fa';

const OtherSkills = () => {
    return (
        <div className='otherSkills'>
            <h3>Compétence</h3><br/>
            <div className='list'>
                <ul>
                    <li><FaAmericanSignLanguageInterpreting />  Anglais courant</li>
                    <li><FaGithub /> Github</li>
                    <li><FaLanguage /> Français parlé et écrit </li>
        

                </ul>
               
            </div>
        
            
        </div>
    );
};

export default OtherSkills;