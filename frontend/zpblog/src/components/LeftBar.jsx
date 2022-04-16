import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import {
    Home,
    Person,
    Settings,
    Bookmark,
    ExitToAppRounded,
    People,
    ArrowForward
} from '@material-ui/icons';


const LeftBar = () => {

    const useStyle = makeStyles((theme) => ({
        container: {
            backgroundColor: "#3f51b5",
            minHeight: "100vh",
            padding: 0,
            paddingTop: theme.spacing(3),
            position: "sticky",
            top: 45,
        },
        item: {
            "& > a": {
                marginBottom: theme.spacing(2),
                padding: theme.spacing(1),
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                color: theme.palette.common.white,
                transition: ".3s all",
                cursor: "pointer",
                textDecoration: "none",
                "&:hover": {
                    backgroundColor: "#5362b2"
                }
            }
        },
        icon: {
            marginRight: theme.spacing(1),
            fontSize: "30px"
        },
        text: {
            marginTop: "2px"
        },
        // arrow: {
        //     backgroundColor: "#3f51b5",
        //     position: "absolute",
        //     top: "10%",
        //     right: "-35px",
        //     padding: 5,
        //     borderTopRightRadius: "7px",
        //     borderBottomRightRadius: "7px",
        //     color: "#fff",
        //     width: 30,
        //     height: 30,
        //     cursor: "pointer"
        // }
    }))


    const [isSideOut, setIsSideOut] = useState(false);


    const classes = useStyle(isSideOut);


    return (
        <>
            <Container className={classes.container}>
                <div className={classes.arrow} onClick={() => setIsSideOut(prev => !prev)} />
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
                <div className={classes.item}>
                    <a href="#">
                        <Settings className={classes.icon} />
                        <Typography className={classes.text}>
                            Settings
                        </Typography>
                    </a>
                </div>
                <div className={classes.item}>
                    <a href="#">
                        <ExitToAppRounded className={classes.icon} />
                        <Typography className={classes.text}>
                            Exit
                        </Typography>
                    </a>
                </div>
            </Container>
        </>
    );
}

export default LeftBar;