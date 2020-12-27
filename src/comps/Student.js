import React, { useState, useEffect } from 'react';
import CustomTable from './CustomTable';
//import Student from './student';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import MapOfClass from './MapOfClass';
import MyButtons from './MyButtons';
import GroupIcon from '@material-ui/icons/Group';
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';
import { get } from '../helpers/BaseRequest';
import ChooseClass from './ChooseClass';
import StudentCard from './StudentCard';

export default function Student() {
    const [classSelected, setClassSelected] = useState('');
    const [students, setStudents] = useState([]);


    // useEffect(() => {

    //     BaseRequest(`teacher/getClassesByTeacherId/${kodTeacher}`).then(res => {
    //         console.log("useEffect", res);
    //         setStudents(res);
    //     }
    //     ).catch(e => console.log(e))

    // }, []);

    useEffect(() => {

        get(`getAllStudents`).then(res => {
            console.log("useEffect", res);
            setStudents(res);
        }
        ).catch(e => console.log(e))

    }, []);


    return (
        <>
            <ChooseClass setClassSelected={setClassSelected} />
            <div style={{ display: "contents" }}>

                {
                    students.map((item, index) => {
                        return <StudentCard key={index} item={item} />
                    })
                }
            </div>

            <Link to={"/MapOfClass"}><MyButtons title='מפת כיתה' icon={settingsOverscanIcon}></MyButtons> </Link>
            <Link to={"/student"}><MyButtons title='רשימת תלמידים' icon={groupIcon}></MyButtons> </Link>
        </>
    )
    // const [classList, setClassList] = useState('')
    // const kodTeacher = localStorage.getItem('kodTeacher');
    // useEffect(() => {

    //     BaseRequest(`teacher/getClassesByTeacherId/${kodTeacher}`).then(res => {
    //         console.log("useEffect", res);
    //         setClassList(res);
    //     }
    //     ).catch(e => console.log(e))

    // }, []);

    // const selectClass = (e, newValue) => {
    //     console.log(newValue);
    //     setClassSelected(newValue?.class)
    // }
    // return (
    //     <>
    //         {/* <Autocomplete
    //             id="combo-box-demo"
    //             options={classList}
    //             getOptionLabel={(option) => option.title}
    //             style={{ width: 300 }}
    //             renderInput={(params) => <TextField {...params} label="בחר כיתה" labelPosition='right' variant="outlined" />}
    //         />
    //         <Link to={"/MapOfClass"}><MyButtons title='מפת כיתה' icon={settingsOverscanIcon}></MyButtons> </Link>
    //         <Link to={"/student"}><MyButtons title='רשימת תלמידים' icon={groupIcon}></MyButtons> </Link> */}
    //         <Autocomplete
    //             //id="country
    //             className="class"
    //             id="standard-error-helper-text"
    //             options={classList}
    //             //options={top100Films}
    //             onChange={selectClass}
    //             getOptionLabel={(option) => {
    //                 console.log(option);
    //                 return `${option.grade}-${option.numClass}`;
    //             }}
    //             style={{ width: 348 }}
    //             renderInput={(params) => <TextField {...params} label="בחר כיתה" variant="outlined" />}
    //         />
    //     </>

    // )





}
const groupIcon = <GroupIcon fontSize="large" />
const settingsOverscanIcon = <SettingsOverscanIcon fontSize="large" />
const classList = [
    { title: 'א1' }, { title: 'א2' }, { title: '3א' }, { title: 'ב1' }, { title: 'ב2' }
]

