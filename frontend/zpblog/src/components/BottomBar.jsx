import { Container, Typography } from '@material-ui/core';
import { Bookmark, Home, People, Person, Settings } from '@material-ui/icons';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const BottomBar = () => {

    const useStyles = makeStyles(theme => ({
        container: {
            position: "fixed",
            bottom: "0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#3f51b5",
            transition: "all 1s linear",
            [theme.breakpoints.up("md")]: {
                display: "none"
            },
            [theme.breakpoints.down("md")]: {
                justifyContent: "space-evenly",
            },
            [theme.breakpoints.down("sm")]: {
                justifyContent: "space-between",
            }
        },
        item: {
            "& > a": {
                padding: theme.spacing(1),
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: "column",
                color: theme.palette.common.white,
                transition: ".3s all",
                cursor: "pointer",
                textDecoration: "none",
                color: "#fff",
                "&:hover": {
                    backgroundColor: "#5362b2"
                }
            }
        },
        text: {
            fontSize: 12
        }
    }));


    const classes = useStyles();


    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <a href="#">
                    <Home className={classes.icon} />
                    <Typography className={classes.text}>
                        Home
                    </Typography>
                </a>
            </div>
            <div className={classes.item}>
                <a href="#">
                    <Person className={classes.icon} />
                    <Typography className={classes.text}>
                        Dashboard
                    </Typography>
                </a>
            </div>
            <div className={classes.item}>
                <a href="#">
                    <Bookmark className={classes.icon} />
                    <Typography className={classes.text}>
                        Bookmarks
                    </Typography>
                </a>
            </div>
            <div className={classes.item}>
                <a href="#">
                    <People className={classes.icon} />
                    <Typography className={classes.text}>
                        Friends
                    </Typography>
                </a>
            </div>
        </Container>
    );
}

export default BottomBar;