
import React, { Component, useState, useEffect } from 'react';
import CustomTable from './CustomTable'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import { Icon } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import UpdateIcon from '@material-ui/icons/Update';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MyButtons from './MyButtons';
import ChooseClass from './ChooseClass';
import { Link, Route, Switch } from 'react-router-dom';

import { get } from '../helpers/BaseRequest';

export default function Classes1() {
    const [classSelected, setClassSelected] = useState()
    const [rows, setRows] = useState([]);

    useEffect(() => {
        if (classSelected)
            get(`student/getStudentsByClassId/${classSelected.idClasses}`).then((res) => {
                console.log(res);
                setRows(res);
            }).catch((e) => {
                console.log(e)
            })
    }, [classSelected])

    function createData(name, id, address, tl, cellphon, dof) {
        return { name, id, address, tl, cellphon, dof };
    }

    const headCells = [

        { id: 'telephone', numeric: false, disablePadding: true, label: 'טלפון' },
        { id: 'pelephone', numeric: false, disablePadding: true, label: 'נייד' },
        { id: 'dof', numeric: false, disablePadding: true, label: 'ת.לידה' },
        { id: 'address', numeric: false, disablePadding: true, label: 'כתובת' },
        { id: 'idClass', numeric: false, disablePadding: true, label: 'כיתה' },
        { id: 'idStudent', numeric: false, disablePadding: true, label: 'ת.ז' },
        { id: 'nameStudent', numeric: false, disablePadding: true, label: 'שם תלמיד' },


    ];
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // const rows = [
    //     createData('ציפי בוטרמן', '211551693', 'קהילות יעקב 11', '039089318', '0548466544', '2000-05-18', 'ח3'),
    //     createData('תמר גלוסקין', '315138289', 'פני מנחם 3 פתח תקווה', '039087808', '0504103164', 'ח3')

    // ];
    const deleteIcon = <DeleteIcon fontSize="large" />
    const personAddIcon = <PersonAddIcon fontSize="large" />
    const updateIcon = <UpdateIcon fontSize="large" />
    return (
        <div style={{ height: "100vh" }}>
            <ChooseClass setClassSelected={setClassSelected} />
            <CustomTable rows={rows} headCells={headCells}></CustomTable>
            <MyButtons title='מחק' icon={deleteIcon} style={{ marginRight: "90%" }}></MyButtons>
            <MyButtons title='עדכן' icon={updateIcon}></MyButtons>
            <Link to={'/addStudent'}><MyButtons title='הוסף' icon={personAddIcon}> </MyButtons></Link>
            <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Open alert dialog
        </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Disagree
            </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Agree
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}
