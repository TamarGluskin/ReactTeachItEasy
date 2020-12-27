import React, { useState, useEffect } from 'react';
import { get } from '../helpers/BaseRequest'
import CustomTable from './CustomTable'

export default function Teacher() {


    const [teacher, setTeacher] = useState([]);
    const [rows, setRows] = useState([]);
    useEffect(() => {

        get(`teacher/getAllTeacher`).then(res => {
            console.log("useEffect", res);
            setTeacher(res);
            setRows(res);
        }
        ).catch(e => console.log(e))

    }, []);

    // function createData(name, id, address, pelelphone, telephone, dof, password) {
    //     return { name, id, address, pelelphone, telephone, dof, password };

    // }


    const headCells = [
        { id: 'password', numeric: false, disablePadding: true, label: 'סיסמא' },
        { id: 'telephone', numeric: false, disablePadding: true, label: 'טלפון' },
        { id: 'pelelphone', numeric: false, disablePadding: true, label: 'נייד' },
        { id: 'dof', numeric: false, disablePadding: true, label: 'ת.לידה' },
        { id: 'address', numeric: false, disablePadding: true, label: 'כתובת' },
        { id: 'idTeacher', numeric: false, disablePadding: true, label: 'ת.ז' },
        { id: 'nameTeacher', numeric: false, disablePadding: true, label: 'שם מורה' },

    ];

    return (
        <CustomTable rows={rows} headCells={headCells}></CustomTable>
    );

}

//     // const rows = [
//     //     createData('ציפי בוטרמן', '211551693', 'קהילות יעקב 11', '039089318', '0548466544', '2000-05-18', '12223'),
//     //     createData('תמר גלוסקין', '315138289', 'פני מנחם 3 פתח תקווה', '039087808', '0504103164', 'ח3')

//     // ];
