// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Dialog from '@material-ui/core/Dialog';
// import PersonIcon from '@material-ui/icons/Person';
// import AddIcon from '@material-ui/icons/Add';
// import Typography from '@material-ui/core/Typography';
// import { blue } from '@material-ui/core/colors';
// // import Dialog from '@material-ui/core/Dialog';
// // import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// // import DialogTitle from '@material-ui/core/DialogTitle';
// // import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';


// const emails = ['username@gmail.com', 'user02@gmail.com'];
// const useStyles = makeStyles({
//     avatar: {
//         backgroundColor: blue[100],
//         color: blue[600],
//     },
// });

// function SimpleDialog(props) {
//     const classes = useStyles();
//     const { onClose, selectedValue, open } = props;

//     const handleClose = () => {
//         onClose(selectedValue);
//     };

//     const handleListItemClick = (value) => {
//         onClose(value);
//     };

//     return (
//         <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
//             <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
//             <List>
//                 //{emails.map((email) => (
//                 <ListItem button onClick={() => handleListItemClick(email)} key={email}>
//                     <ListItemAvatar>
//                         <Avatar className={classes.avatar}>
//                             <PersonIcon />
//                         </Avatar>
//                     </ListItemAvatar>
//                     <ListItemText primary={email} />
//                 </ListItem>
//             ))}

//                 <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
//                     <ListItemAvatar>
//                         <Avatar>
//                             <AddIcon />
//                         </Avatar>
//                     </ListItemAvatar>
//                     <ListItemText primary="Add account" />
//                 </ListItem>
//             </List>
//         </Dialog>
//     );
// }

// SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,
// };

// export default function SimpleDialogDemo() {
//     const [open, setOpen] = React.useState(false);
//     const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = (value) => {
//         setOpen(false);
//         setSelectedValue(value);
//     };

//     return (
//         <div>
//             <Typography variant="subtitle1">ברוך הבא ל {selectedValue}</Typography>
//             <br />

//             <Link to={"/login"}><Button variant="outlined" color="primary" onClick={handleClickOpen}>לתפריט</Button></Link>


//             <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
//         </div>
//     );
// }

// const [open, setOpen] = React.useState(false);

// const handleClickOpen = () => {
//     setOpen(true);
// };

// const handleClose = () => {
//     setOpen(false);
// };


// export default function AlertDailog(){

//     return(
//     <>
//                 <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//                     go to login
//         </Button>

//         <div>
//                 <Dialog
//                     open={open}
//                     onClose={handleClose}
//                     aria-labelledby="alert-dialog-title"
//                     aria-describedby="alert-dialog-description"
//                 >
//                     <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
//                     <DialogContent>
//                         <DialogContentText id="alert-dialog-description">
//                            go to login
//             </DialogContentText>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={handleClose} color="primary">
//                             Disagree
//             </Button>
//                        <Button onClick={handleClose} color="primary" autoFocus>
//                         Agree
//             </Button>
//                     </DialogActions>
//                 </Dialog>
//                 </div>
//                 </>
//                 )
// }