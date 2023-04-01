import React from 'react';
import Navigation from '../components/Navigation';
import ProjectListe from '../components/portfolio/ProjectListe';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Navigation />
           <ProjectListe />
        </div>
    );
};

export default Portfolio;