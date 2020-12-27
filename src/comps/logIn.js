import React, { useState, Component } from 'react';
//import NewTeacher from './newTeacher';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import { Link, Route, Switch } from 'react-router-dom';
import {get} from '../helpers/BaseRequest';
import { useHistory } from "react-router-dom";
import background from '../assets/background.png';
import { makeStyles } from '@material-ui/core/styles';
import bg from '../assets/logo_whith.png';
import logoWhite from '../assets/logoWhite.png';


const useStyles = makeStyles((theme) => ({
    background: {
        backgroundImage: background,
        backgroundSize: "contain",
        backgroundPposition: "top",
        background: "cover"
    }
}));

export default function LogIn() {
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const login = () => {
        get(`teacher/logIn/${userName}/${password}`).then((res) => {
            console.log(res);
            localStorage.setItem('kodTeacher', res.kodTeacher);
            localStorage.setItem('name', res.nameTeacher);
            if (localStorage.getItem('kodTeacher') != 'undefined')
                history.push("/menu");


        }).catch((e) => {
            console.log(e)
        })
    }
    // className={classes.background}
    return (
        <div >
        {/* style={{ backgroundImage: `url(${bg})`, height: '100vh', width: '100%' }} */}
            {/* <img src={logoWhite} style={{ width: "281px", height: "219px", marginLeft:"71%" }}></img> */}
            <div style={{ paddingTop: "0px" }}>
                {/* style={{ width: "100%", height: "100%", backgroundImage: "cover" }} */}
                {/* <div style={{backgroundImage: url('background.jpg')}}> </div> */}

                <Segment placeholder style={{ width: "53%", margin:"auto" }} >

                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column verticalAlign='middle'>

                            <Link to={"/newTeacher"}><Button content='מורה חדש' icon='signup' size='big' /> </Link>

                        </Grid.Column>

                        <Grid.Column>
                            <Form>
                                <Form.Input id="user name"
                                    icon='user'
                                    iconPosition='right'
                                    label='שם משתמש'
                                    //labelPosition='right'
                                    placeholder='הכנס את שמך'
                                    onChange={(e) => setUserName(e.target.value)}

                                />
                                <Form.Input id="user password"
                                    icon='lock'
                                    iconPosition='right'
                                    label='סיסמה'
                                    // labelPosition='right'
                                    type='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                />


                                <Button content='כניסה' primary onClick={login} />



                            </Form>
                        </Grid.Column>


                    </Grid>

                    <Divider vertical>Or</Divider>
                </Segment>
            </div>
        </div>
    )




}

