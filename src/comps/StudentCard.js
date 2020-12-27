import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import MyButtons from './MyButtons';
import { BorderBottom } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        minWidth: 50,
        width: '170px'

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        color: 'blue'
    },
    pos: {
        marginBottom: 12,
    },
    title2: {
        color: '#03A9F4',
    },
});

export default function OutlinedCard(props) {
    const classes = useStyles();

    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>

                </Typography>
                <Typography className={classes.title2} variant="h5" component="h2" >
                    {props.item.nameStudent}
                </Typography>
                <Typography className={classes.title2} variant="h6" component="h2" color="#03A9F4">
                    {props.item.idStudent}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    ,{props.item.address}<br></br>
                    {props.item.city}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.item.pelephone}
                </Typography>
                <Typography variant="h5" component="p">
                    כיתה {props.item.idClass}
                </Typography>
            </CardContent>
            <CardActions>
                <MyButtons size="small" title='כניסה לכרטיס'></MyButtons>
            </CardActions>
        </Card>
    );
}