import React, { Suspense, useEffect, useRef, useState } from 'react';
import { paginate } from '../utils/paginate';
import getPosts from '../services/fakePosts';
import Post from './Post';
import { Pagination } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';


const Posts = () => {

    const useStyles = makeStyles(theme => ({
        pagination: {
            marginTop: 20,
            "& > ul": {
                justifyContent: "center"
            },
            [theme.breakpoints.down("sm")]: {
                "& > ul > li > button": {
                    width: 20,
                    height: 32,
                    margin: "0 1px"
                }
            },
            "& > ul > li > button:hover": {
                background: "#79bef5",
                color: "#fff"
            }
        }
    }));


    const classes = useStyles();


    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);


    useEffect(() => {
        setPosts(getPosts());
    }, []);


    const getData = (posts, currentPage, pageSize) => {
        const selectedPosts = paginate(posts, currentPage, pageSize);

        return {
            totalCount: posts.length,
            selectedPosts: selectedPosts
        }
    }

    const wrapperRef = useRef();


    const changePageHandler = (event, value) => {
        setCurrentPage(value);
        wrapperRef.current.scrollIntoView();
    }


    const { selectedPosts, totalCount } = getData(posts, currentPage, pageSize);


    return (
        <div id='wrapper' ref={wrapperRef}>
            <Stack spacing={2}>
                <Pagination onChange={changePageHandler} color="primary" count={totalCount / pageSize} page={currentPage} className={classes.pagination} />
            </Stack>
            <Suspense fallback={<h1>Loading....</h1>}>
                <ShowPosts posts={selectedPosts} />
            </Suspense>
            <Stack spacing={2} style={{ marginBottom: 10 }}>
                <Pagination onChange={changePageHandler} color="primary" count={totalCount / pageSize} page={currentPage} className={classes.pagination} />
            </Stack>
        </div>
    );
}



function ShowPosts({ posts }) {
    return (
        <div id='posts'>
            {
                posts.map(post => {
                    return <Post key={post.id}
                        user={post.user}
                        profile={post.user.profile}
                        blogImage={post.image}
                        title={post.title}
                        created={post.created}
                        content={post.content}
                    />
                })
            }
        </div>
    );
}


export default Posts;