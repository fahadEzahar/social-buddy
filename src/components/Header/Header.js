import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: "#7e57c2" }}>
                <Toolbar>
                    <Typography color="inherit" variant="h9" className={classes.title}>
                        <h1> <PostAddIcon style={{ fontSize: 50 }} color="inherit"></PostAddIcon>Social Buddy</h1>
                        <p>What's on your mind..?</p>
                    </Typography>
                    <HomeIcon style={{ fontSize: 30 }} />
                    <Button color="inherit">Detail</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;