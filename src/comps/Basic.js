import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import header2 from '../assets/header2.jpg';
import logo_White from '../assets/logoWhite.png';

export default function Basic() {
    const name = localStorage.getItem('name');
    return (<>
        <div style={{ backgroundImage: `url(${header2})`, width: '100%', height: '20vh' }}></div>
        <Link to ={"/menu"}><img src={logo_White} style={{ width: "163px", height: "135px", marginLeft: "85%", marginTop: '-25vh' }}></img></Link>
        <h2 style={{marginLeft: "65%", marginTop: '-15vh',color:'white' }}>  המורה  {name} </h2>
    </>
    )
}