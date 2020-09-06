import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './Post.css';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        boxShadow: '5px 10px 10px gray',
    },
    title: {
        fontSize: 18,
    },
});

const Post = (props) => {
    const classes = useStyles();
    const { title, body, id } = props.post;
    return (
        <Grid item md={6} >
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                       {id} | {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={"/post/" + id}>
                        <button className="button">See More...</button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Post;