import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Menu } from 'semantic-ui-react'
import logo from '../assets/logo.png';
import logo_whith from '../assets/logo_whith.png';

const useStyles = makeStyles((theme) => ({
background:{
    // background: url('../assets/logo_whith.png'),
    backgroundSize:"contain",
    backgroundPposition:"top",
    background:"cover"
}
}));

export default function Header() {
    const classes = useStyles();
    return (
        <Menu>
            <Link to={"/HomePage"}><img src={logo} className={classes.background} style={{ width: "235px", height: "65px" }}></img></Link>
            <Menu.Item>
                <Link to={"/Login"}><Button style={{ marginLeft: "68.3vw" }}>התחברות</Button></Link>
            </Menu.Item>
            <Menu.Item>
                <Link to={"/SingUp"}><Button color='teal' >הרשמה</Button></Link>
            </Menu.Item>
        </Menu>


    )
}


