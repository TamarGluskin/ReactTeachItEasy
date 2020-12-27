import React from 'react';
import { MySButton, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
export default function MyButtons(props) {
    return (<React.Fragment>
        {/* <MyButton color="red"></MyButton> */}
        <MyButton color="blue" icon={props.icon} title={props.title} />
    </React.Fragment>)
}
const MyButton = styled(({ color, icon, title, ...other }) => <Button size='big' {...other} >
    {icon}{title}</Button>)({
        background: (props) =>
            props.color === 'red'
                ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
                : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: (props) =>
            props.color === 'red'
                ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
                : '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: 8,
    });
