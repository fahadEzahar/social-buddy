import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: '40px',
        borderLeft: '1px solid gray'
    },
    title: {
        fontSize: 14,
    },
});

const CommentsDetail = (props) => {
    const classes = useStyles();
    const { name, email, id, body } = props.comment;
    const [image, setImage] = useState([]);
    useEffect(() => {
        const url = 'https://randomuser.me/api/';
        fetch(url)
            .then(res => res.json())
            .then(data => setImage(data.results[0].picture.medium))
    }, [])

    return (
        <Grid item md={4} >
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <Avatar alt={id} src={image} />
                        {name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Email: {email}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default CommentsDetail;