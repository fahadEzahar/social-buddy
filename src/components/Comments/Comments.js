import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentsDetail from '../CommentsDetail/CommentsDetail';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Comments = () => {
    const { id } = useParams();
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    return (
        <div>
            <TextField
                style={{ marginLeft: '40px' }}
                placeholder="What are you thoughts ?"
                helperText={comment.length + " Comments"}
            />
            <Grid container>
                {
                    comment.map(comment =>
                        <CommentsDetail comment={comment}
                        ></CommentsDetail>
                    )
                }
            </Grid>
        </div>
    );
};

export default Comments;