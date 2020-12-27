import React, { useState, useEffect } from 'react';
import CustomTable from './CustomTable';
//import Student from './student';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import MapOfClass from './MapOfClass';
import MyButtons from './MyButtons';
import GroupIcon from '@material-ui/icons/Group';
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';
import {get} from '../helpers/BaseRequest';



export default function ChooseClass(props) {
    // const [classSelected, setClassSelected] = useState('')
    const [classList, setClassList] = useState('')
    const kodTeacher = localStorage.getItem('kodTeacher');
    useEffect(() => {

        get(`teacher/getClassesByTeacherId/${kodTeacher}`).then(res => {
            console.log("useEffect", res);
            setClassList(res);
        }
        ).catch(e => console.log(e))

    }, []);

    const selectClass = (e, newValue) => {
        console.log(newValue);
        props.setClassSelected(newValue)
    }
    return (
        <>
            {/* <Autocomplete
                id="combo-box-demo"
                options={classList}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="בחר כיתה" labelPosition='right' variant="outlined" />}
            />
            <Link to={"/MapOfClass"}><MyButtons title='מפת כיתה' icon={settingsOverscanIcon}></MyButtons> </Link>
            <Link to={"/student"}><MyButtons title='רשימת תלמידים' icon={groupIcon}></MyButtons> </Link> */}
            <Autocomplete 
                className="class"
                id="standard-error-helper-text"
                options={classList}
                onChange={selectClass}
                getOptionLabel={(option) => {
                    console.log(option);
                    return `${option.grade}-${option.numClass}`;
                }}
                style={{ width: 348 }}
                renderInput={(params) => <TextField {...params} label="בחר כיתה" variant="outlined" />}
            />
        </>

    )





}
const groupIcon = <GroupIcon fontSize="large" />
const settingsOverscanIcon = <SettingsOverscanIcon fontSize="large" />
const classList = [
    { title: 'א1' }, { title: 'א2' }, { title: '3א' }, { title: 'ב1' }, { title: 'ב2' }
]

