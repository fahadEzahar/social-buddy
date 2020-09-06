import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Grid from '@material-ui/core/Grid'

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            <Grid container spacing={4} style={{ padding: '40px' }}>
                {
                    post.map(post => <Post post={post} />)
                }
            </Grid>
        </div>
    );
};

export default Home;