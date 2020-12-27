import React, { Component } from 'react';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import { post } from '../helpers/BaseRequest';
import SimpleDialogDemo from './AlertDailog';
import { useHistory } from "react-router-dom";
class addStudent extends Component {
    state = {
        user: {
            nameStudent: "",
            address: " ",
            city: "",
            iStudent: "",
            telephone: "",
            pelephone: "",
            dof: "12-12-12",
            nameOfFather: "",
            idClass: "",
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
        post('student/addStudent', user).then(
            res => {
                //localStorage.setItem('kodTeacher', res.kodTeacher);
                // history.push("/menu");
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
                        <Form.Input id="nameStudent"
                            icon='user'
                            iconPosition='right'
                            label='שם תלמיד'
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
                           <Form.Input id="nameOfFather"
                            icon='building'
                            iconPosition='right'
                            label='שם האב'
                            labelPosition='right'
                            onChange={this.inputChange}
                            />
                        <Form.Input id="IdClass"
                            icon='lock'
                            iconPosition='right'
                            label='כיתה'
                            labelPosition='right'
                            type='password'
                            onChange={this.inputChange}
                        />

                        <Button type="submit" content='הרשמה' primary onClick={() => this.newUserHandler(this.state.user)}  />
                    </Form>
                </Grid.Column>


            </Grid>


        </Segment>)
    }

}

export default addStudent