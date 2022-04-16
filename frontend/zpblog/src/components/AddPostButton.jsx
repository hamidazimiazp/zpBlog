import {
    Button,
    Container,
    Fab,
    Grid,
    IconButton,
    Snackbar,
    TextField,
    Tooltip,
    Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useRef } from 'react'
import { Add, Close, CloudUpload } from '@material-ui/icons';
import { blue } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import demoImage from "../assets/images/demo-img.jpg";


const AddPostButton = () => {

    const useStyles = makeStyles((theme) => ({
        fab: {
            position: "fixed",
            background: blue[500],
            bottom: 35,
            right: 35,
            zIndex: 555555,
            [theme.breakpoints.down("xs")]: {
                bottom: 70,
                right: 15,
            }
        },
        container: {
            width: 500,
            height: 600,
            backgroundColor: theme.palette.common.white,
            position: "absolute",
            borderRadius: theme.shape.borderRadius,
            inset: 0,
            margin: "auto",
            [theme.breakpoints.down("sm")]: {
                height: "100vh",
                width: "100vw"
            }
        },
        modal: {
        },
        createPostForm: {
            padding: theme.spacing(3)
        },
        formTitle: {
            textAlign: "center",
            color: "#1e88e5",
            padding: "15px 0",
            fontWeight: 700
        },
        textField: {
            width: "100%",
            marginBottom: theme.spacing(3)
        },
        uploadInput: {
            display: "none"
        },
        select: {
            width: "100%"
        },
        imageDemo: {
            "&>img": {
                width: 120,
                height: 100,
                borderRadius: theme.shape.borderRadius,
                objectFit: "cover"
            }
        },
        formButton: {
            width: "95%",
            marginBottom: 10,
            textAlign: "center",
            background: "#1e88e5",
            color: theme.palette.common.white,
            "&:hover": {
                background: "#42a5f5",
            },
            [theme.breakpoints.down("sm")]: {
                width: "100%"
            }
        },
        cancelBtn: {
            background: "#f44336",
            "&:hover": {
                background: "#ef5350"
            },
        }
    }));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const classes = useStyles(isModalOpen);

    const status = [
        "Draft",
        "Publish"
    ];
    const [statusTextField, setStatusTextField] = useState(status[0]);


    const modalToggle = () => {
        setIsModalOpen(prev => !prev)
    }


    const [data, setData] = useState({
        title: "",
        content: "",
        img: "",
        status: statusTextField,
    })


    const imgRef = useRef();

    const changeHandler = event => {
        if (event.target.name === "img") {
            const img = URL.createObjectURL(event.target.files[0]);

            setData({ ...data, [event.target.name]: img });
            imgRef.current.src = img;

        } else {
            setData({ ...data, [event.target.name]: event.target.value });
        }
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        console.log(data);
        setIsModalOpen(prev => !prev);
        setIsAlertOpen(prev => !prev);
    }


    return (
        <>
            <Tooltip title={isModalOpen ? "Close" : "Add"} aria-label={isModalOpen ? "Close" : "Add"} arrow onClick={modalToggle}>
                <Fab color="primary" className={classes.fab}>
                    {isModalOpen ? <Close /> : <Add />}
                </Fab>
            </Tooltip>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={isModalOpen}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Container className={classes.container}>
                    <form method="post" onSubmit={formSubmitHandler} className={classes.createPostForm} noValidate autoComplete="off">
                        <Typography
                            className={classes.formTitle}
                            variant="h5"
                        >
                            Create New Blog
                        </Typography>
                        <TextField
                            className={classes.textField}
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            name='title'
                            onChange={changeHandler}
                        />
                        <TextField className={classes.textField}
                            id="outlined-multiline-static"
                            label="Content"
                            multiline
                            variant="outlined"
                            minRows={5}
                            name='content'
                            onChange={changeHandler}
                        />
                        <input
                            accept="image/*"
                            className={classes.uploadInput}
                            id="contained-button-file"
                            type="file"
                            name='img'
                            onChange={changeHandler}
                        />
                        <Grid
                            container
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Grid item sm={2}>
                                <label htmlFor="contained-button-file">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component="span"
                                        style={{ backgroundColor: "#2196f3" }}
                                        startIcon={<CloudUpload />}>
                                        Upload
                                    </Button>
                                </label>
                            </Grid>
                            <Grid item sm={6} style={{ textAlign: "right" }}>
                                <div className={classes.imageDemo}>
                                    <img ref={imgRef} src={demoImage} alt="demo" />
                                </div>
                            </Grid>
                        </Grid>
                        <br />
                        <TextField
                            id="standard-select-currency-native"
                            select
                            label="Status"
                            value={statusTextField}
                            onChange={event => { setStatusTextField(event.target.value); changeHandler(event) }}
                            SelectProps={{
                                native: true,
                            }}
                            variant="outlined"
                            className={classes.select}
                            name="status"
                        >
                            {status.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </TextField>
                        <br /><br />
                        <Grid
                            container
                            justifyContent='space-between'
                            alignItems='center'
                            style={{ textAlign: "center" }}
                        >
                            <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
                                <Button type='submit' variant="contained" className={classes.formButton}>
                                    Make
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6} style={{ textAlign: "right" }}>
                                <Button variant="contained" onClick={modalToggle} className={`${classes.formButton} ${classes.cancelBtn}`}>
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                        <br /><br />
                    </form>
                </Container>
            </Modal>
            <Snackbar
                open={isAlertOpen}
                autoHideDuration={6000}
                onClose={() => {
                    setIsAlertOpen(prev => !prev);
                }}
            >
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setIsAlertOpen(prev => !prev);
                            }}
                        >
                            <Close fontSize="inherit" />
                        </IconButton>
                    }
                >
                    Your Blog Successfully Created :)
                </Alert>
            </Snackbar>
        </>
    );
}

export default AddPostButton;