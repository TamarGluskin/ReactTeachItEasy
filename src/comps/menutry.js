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
const images = [
    {
        url: students,
        title: 'תלמידים',
        width: '180px',
        gridarea: '2 / 4 / 3 / 5',
    },
    {

        url: knowledge,
        title: 'מקצועות',
        width: '180px',
        gridarea: '2 / 3 / 3 / 4',
    },
    {
        url: class1,
        title: 'כיתות',
        width: '180px',
        gridarea: '2 / 2 / 3 / 3',
    },
    {
        url: checking_attendance,
        title: 'יומן נוכחות',
        width: '180px',
        gridarea: '2 / 1 / 3 / 2',

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
        gridarea: '3 / 4 / 4 / 5',
    },
    {
        url: calendar,
        title: 'לוח ארועים',
        width: '180px',
    },
    {
        url: book,
        title: 'ספרים',
        width: '180px',
    },
];

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
        // align: 'right',
        dir: 'rtl',
        marginTop: '1px',
        //margin: '5px',
        marginLeft: '109px',
        display: 'grid',
        gridtemplatecolumns: 'repeat(4, 0.9fr)',
        gridtemplaterows: '0.8fr repeat(2, 1fr)',
        gridcolumngap: '8px',
        gridrowgap: '10px',

    },
    image: {
        position: 'relative',
        height: 200,
        margin: '33px',
        // marginright: '75px',
        //marginleft: '50px',
        marginbottom: 'unset',


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
            '& $imageTitle': {
                border: '4px solid currentColor',
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
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
        border: 'solid',
        borderRadius: '10%',
    },
    imageTitle: {
        position: 'relative',
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
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {images.map((image) => (

                <ButtonBase
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

            ))}
        </div>
    );
}