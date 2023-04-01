import React from 'react';
import { FaBookReader, FaFootballBall, FaHiking, FaMusic, FaPersonBooth } from 'react-icons/fa';

const Hobbies = () => {
    return (
        <div className='hobbies'>
           <h3>Intérêt</h3><br />
           <ul>
                <li className='hobby'>
                  
                   <FaPersonBooth />
                    <span>Course à pied</span>
                </li>
                <li className='hobby'>
                    <FaFootballBall />
                    <span>footbal</span>
                </li>
                <li className='hobby'>
                   <FaBookReader />
                    <span>Lire documentation</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-hiking'></i>
                    <FaMusic />
                    <span> Ecoute de la Music</span>
                </li>
                
           </ul>
        </div>
    );
};

export default Hobbies;