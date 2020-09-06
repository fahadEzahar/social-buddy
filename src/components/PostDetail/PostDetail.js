import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: '40px'
    },
    title: {
        fontSize: 25,
    },
});

const PostDetail = (props) => {
    const classes = useStyles();
    const { id } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {post.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {post.body}
                </Typography>
                <br/>
                <Typography >
                    <ThumbUpAltIcon /> <CommentIcon /> <ShareIcon />
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PostDetail;