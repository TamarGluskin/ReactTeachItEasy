import React, { Component } from 'react';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import {post} from '../helpers/BaseRequest';
import {SimpleDialogDemo} from './AlertDailog';
class NewTeacher extends Component {
    state = {
        user: {
            nameTeacher: "",
            idTeacher: "11111",
            address: "",
            city: "",
            telephone: "",
            pelephone: "",
            dof:'1995-01-01',
            password: "",
        }
    }

    inputChange = (event) => {
        const newUser = { ...this.state.user };
        const id = event.target.id;
        newUser[id] = event.target.value;
        this.setState({ user: newUser });
    }

    newUserHandler = (user) => {
        debugger;
        post('teacher/addTeacher', user).then(
            res => {
                localStorage.setItem('kodTeacher', res.kodTeacher);
                //<SimpleDialogDemo></SimpleDialogDemo>
            }).catch(err => {
                console.log("not good! :(");
            })
    }

    render() {
        return (<Segment placeholder>
            <Grid columns={1} relaxed='very' stackable>
                <Grid.Column verticalAlign='middle'>

                </Grid.Column>
                <Grid.Column>
                    <Form>
                        <Form.Input id="nameTeacher"
                            icon='user'
                            iconPosition='right'
                            label='שם משתמש'
                            labelPosition='right'
                            placeholder='הכנס את שמך'
                            onChange={this.inputChange}
                        />
                        <Form.Input id="address"
                            icon='home'
                            iconPosition='right'
                            label='כתובת'
                            labelPosition='right'
                            onChange={this.inputChange}
                        />
                        <Form.Input id="city"
                            icon='building'
                            iconPosition='right'
                            label='עיר'
                            labelPosition='right'
                            onChange={this.inputChange}
                        />
                        <Form.Input id="telephone"
                            icon='phone'
                            iconPosition='right'
                            label='טלפון'
                            labelPosition='right'
                            // keyboardType='number'
                            onChange={this.inputChange}
                        />
                        <Form.Input id="pelephone"
                            icon='mobile alternate'
                            iconPosition='right'
                            label='נייד'
                            labelPosition='right'
                            onChange={this.inputChange}
                        />
                        <Form.Input id="password"
                            icon='lock'
                            iconPosition='right'
                            label='סיסמה'
                            labelPosition='right'
                            type='password'
                            onChange={this.inputChange}
                        />

                        <Button type="submit" content='הרשמה' primary onClick={() => this.newUserHandler(this.state.user)} />
                    </Form>
                </Grid.Column>


            </Grid>


        </Segment>)
    }

}

export default NewTeacher