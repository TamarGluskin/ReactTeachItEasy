import React, { useEffect, useState } from 'react';
import CustomTable from './CustomTable';
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';
import { get } from '../helpers/BaseRequest';

export default function Subject() {

    const [subjects, setSubjects] = useState([]);
    const [rows, setRows] = useState([]);
    const kodTeacher = localStorage.getItem('kodTeacher');
    useEffect(() => {

        get(`teacher/getSubjectByTeacherId/${kodTeacher}`).then(res => {
            console.log("useEffect", res);
            setSubjects(res);
            setRows(res);
        }
        ).catch(e => console.log(e))

    }, []);
    // function createData(idSubject, nameSubject) {
    //     return { idSubject, nameSubject };
    // }
    const headCells = [
        { id: 'idSubject', numeric: false, disablePadding: true, label: 'קוד מקצוע' },
        { id: 'nameSubject', numeric: false, disablePadding: true, label: 'מקצוע' },
    ];

    // const rows = [
    //     createData('תורה', 'א1'),
    //     createData('תורה', 'ב2'),
    //     createData('יהדות', 'א1'),
    //     createData('חשבון', 'ח2'),
    //     createData('הסטוריה', 'ו3'),
    // ];
    return (
        <CustomTable rows={rows} headCells={headCells}></CustomTable>
    )

} 