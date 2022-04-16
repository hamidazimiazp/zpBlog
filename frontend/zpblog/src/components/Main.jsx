import React, { } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import RightBar from './RightBar';
import LeftBar from './LeftBar';
import Feed from './Feed';
import AddPostButton from './AddPostButton';
import BottomBar from './BottomBar';
import Footer from './Footer';

const Main = () => {

    const useStyle = makeStyles((theme) => ({
        container: {
            justifyContent: "space-between",
        },
        leftBar: {
            [theme.breakpoints.down("sm")]: {
                display: "none"
            },

        },
        feed: {
            [theme.breakpoints.down("sm")]: {
                order: 3
            }
        },
        rightBar: {

        }
    }))

    const classes = useStyle();

    return (
        <>
            <Grid container className={classes.container}>
                <Grid item sm={2} className={classes.leftBar} >
                    <LeftBar />
                </Grid>
                <Grid item sm={8} md={6} className={classes.feed}>
                    <Feed />
                </Grid>
                <Grid item sm={4} md={4} className={classes.rightBar}>
                    <RightBar />
                </Grid>
            </Grid>
            <AddPostButton />
            <Footer />
            <BottomBar />
        </>
    );
}

export default Main;