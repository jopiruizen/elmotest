import React from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import  Home from '../pages/home';

function AppRouter () {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/home" element={<Navigate to ="/" />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>     
    );
}

export default AppRouter;
