import React, { Component } from 'react';
import CustomTable from './CustomTable'

export default function Books() {
    function createData(name_student, clss, name_book, borrow_date, return_date, isReturn, status, fine) {
        return { name_student, clss, name_book, borrow_date, return_date, isReturn, status, fine };
    }
    const headCells = [
        { id: 'fine', numeric: false, disablePadding: true, label: 'קנס' },
        { id: 'status', numeric: false, disablePadding: true, label: 'מצב' },
        { id: 'isReturn', numeric: false, disablePadding: true, label: 'הוחזר?' },
        { id: 'return_date', numeric: false, disablePadding: true, label: 'תאריך החזרה' },
        { id: 'borrow_date', numeric: false, disablePadding: true, label: 'תאריך השאלה' },
        { id: 'name_book', numeric: false, disablePadding: true, label: 'שם ספר' },
        { id: 'clss', numeric: false, disablePadding: true, label: 'כיתה' },
        { id: 'name_student', numeric: false, disablePadding: true, label: 'שם תלמיד' },





    ];

    const rows = [
        createData('חציפי בוטרמן', 'ח3'),
        createData(' אנגלית', 'ג2')

    ];
    return (
        <CustomTable rows={rows} headCells={headCells}></CustomTable>
    )
}
