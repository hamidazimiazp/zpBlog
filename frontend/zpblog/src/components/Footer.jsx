import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const Footer = () => {
    const useStyles = makeStyles(theme => ({
        toolbar: {
            justifyContent: "center",
            [theme.breakpoints.down("sm")]: {
                marginBottom: 55
            }
        },
        copyright: {
            fontSize: 18
        }
    }));


    const classes = useStyles();


    return (
        <>
            <AppBar position='static'>
                <Toolbar className={classes.toolbar}>
                    <Typography variant='h5' className={classes.copyright}>
                        ZpLearn Blog ©2022
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Footer;