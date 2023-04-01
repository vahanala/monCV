import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Competence from './pages/Competence';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
const App = () => {
  return (
    <div className='body'>
      <BrowserRouter>
    
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
        <Route path='/knowledges'>
          <Route index element={<Knowledges />}/>
        </Route>
        <Route path='/notFound'>
          <Route index element={<NotFound />}/>
        </Route>
        <Route path='/portfolio'>
          <Route index element={<Portfolio/>}/>
        </Route>
        <Route path='/competence'>
          <Route index element={<Competence/>}/>
        </Route>
        <Route path='/contact'>
          <Route index element={<Contact />}/>
        </Route>
      </Routes>
     
      

    
      </BrowserRouter>
    </div>
  );
};

export default App;