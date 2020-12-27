import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import knowledge from '../assets/knowledge.png';
import checking_attendance from '../assets/checking_attendance.png';
import book from '../assets/book.png';
import calendar from '../assets/calendar.png';
import students from '../assets/students.png';
import task_list from '../assets/task_list.png';
import teacher from '../assets/teacher.png';
import class1 from '../assets/class1.png';
import { Book } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
const images = [
    {
        url: students,
        title: 'תלמידים',
        width: '180px',
        path: "/classes",
    },
    {

        url: knowledge,
        title: 'מקצועות',
        width: '180px',
        path: "/subject",

    },
    {
        url: class1,
        title: 'כיתות',
        width: '180px',
        path: "/student",

    },
    {
        url: checking_attendance,
        title: 'יומן נוכחות',
        width: '180px',


    },

    {
        url: task_list,
        title: 'מטלות',
        width: '180px',

    },
    {
        url: teacher,
        title: 'מורים',
        width: '180px',
        path: "/teacher",
    },
    {
        url: calendar,
        title: 'לוח ארועים',
        width: '180px',
        path: '/calendar',
    },
    {
        url: book,
        title: 'ספרים',
        width: '180px',
        path: "/book",
    },
];

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
        marginTop: '-11vh',
        // align: 'right',
        dir: 'rtl',
        //marginTop: '0%',
        //margin: '5px',
        //marginLeft: '109px',


    },
    container: {
        marginTop: '103px',
    },
    image: {
        position: 'relative',
        height: 200,
        margin: '10px',
        // marginright: '75px',
        //marginleft: '50px',
        //marginbottom: 'unset',


        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,

        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            // '& $imageTitle': {
            //     border: '4px solid currentColor',
            // },
            '& $imageTitle': {
                fontSize: '25px',
                fontStyle: 'bold',
                fontFamily: "Calibri",
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 2,
        right: 3,
        top: 6,
        bottom: 4,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.0,
        transition: theme.transitions.create('opacity'),
        border: 'solid',
        borderRadius: '0%',
    },
    imageTitle: {
        position: 'relative',
        color: '#101b50d1',
        fontSize: 'large',
        marginTop: '32vh',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));


export default function ButtonBases() {
    const name = localStorage.getItem('name');
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Grid container className={classes.container}>

                    {images.map((image) => (
                        <Grid item xs={3}>
                            <ButtonBase
                                component={Link}
                                to={image.path}
                                focusRipple
                                key={image.title}
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: image.width,
                                }}
                            >
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url(${image.url})`,
                                    }}
                                />
                                <span className={classes.imageBackdrop} />
                                <span className={classes.imageButton}>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        className={classes.imageTitle}
                                    >
                                        {image.title}
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                            </ButtonBase>
                        </Grid>
                    ))}

                </Grid>
            </div>
        </>
    );
}