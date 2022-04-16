import React, { } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Container, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import { Info } from '@material-ui/icons';


const RightBar = () => {

    const useStyle = makeStyles((theme) => ({
        container: {
            paddingTop: theme.spacing(3),
            position: "sticky",
            top: 50
        },
        avatarGroup: {
            "& > *": {
                cursor: "pointer"
            }
        },
        avatarsOnlineTitle: {
            fontSize: 16,
            fontWeight: 500,
            color: "#666",
            paddingBottom: theme.spacing(2)
        },
        onlineIcon: {
            display: "inline-block",
            width: 13,
            height: 13,
            borderRadius: "50%",
            background: "greenyellow",
            verticalAlign: -1,
            marginLeft: 8,
        },
        newBlogsTilte: {
            marginTop: theme.spacing(2)
        },
        icon: {
            color: "#ddd"
        }
    }))

    const classes = useStyle();

    return (
        <>
            <Container className={classes.container}>
                <Typography className={classes.avatarsOnlineTitle}>
                    Online Friends
                    <span className={classes.onlineIcon}></span>
                </Typography>
                <AvatarGroup max={6} className={classes.avatarGroup}>
                    <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://v4.mui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://v4.mui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="https://v4.mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/5.jpg" />
                    <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://v4.mui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Agnes Walker" src="https://v4.mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/4.jpg" />
                </AvatarGroup>
                <Typography className={`${classes.avatarsOnlineTitle} ${classes.newBlogsTilte} `}>
                    New Blogs
                </Typography>
                <ImageList rowHeight={160} className={classes.imageList} cols={3}>
                    <ImageListItem cols={1}>
                        <img src="https://v4.mui.com/static/images/image-list/vegetables.jpg" alt="item" />
                        <ImageListItemBar
                            title="What is Banana"
                            subtitle={<span>by: Hamid Azimi</span>}
                            actionIcon={
                                <IconButton aria-label={`info about this`} className={classes.icon}>
                                    <Info />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                    <ImageListItem cols={2}>
                        <img src="https://v4.mui.com/static/images/image-list/honey.jpg" alt="item" />
                        <ImageListItemBar
                            title="What is Banana"
                            subtitle={<span>by: Hamid Azimi</span>}
                            actionIcon={
                                <IconButton aria-label={`info about this`} className={classes.icon}>
                                    <Info />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                    <ImageListItem cols={2}>
                        <img src="https://v4.mui.com/static/images/image-list/plant.jpg" alt="item" />
                        <ImageListItemBar
                            title="What is Banana"
                            subtitle={<span>by: Hamid Azimi</span>}
                            actionIcon={
                                <IconButton aria-label={`info about this`} className={classes.icon}>
                                    <Info />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                    <ImageListItem cols={1}>
                        <img src="https://v4.mui.com/static/images/image-list/bike.jpg" alt="item" />
                        <ImageListItemBar
                            title="What is Banana"
                            subtitle={<span>by: Hamid Azimi</span>}
                            actionIcon={
                                <IconButton aria-label={`info about this`} className={classes.icon}>
                                    <Info />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                    <ImageListItem cols={1}>
                        <img src="https://v4.mui.com/static/images/image-list/mushroom.jpg" alt="item" />
                        <ImageListItemBar
                            title="What is Banana"
                            subtitle={<span>by: Hamid Azimi</span>}
                            actionIcon={
                                <IconButton aria-label={`info about this`} className={classes.icon}>
                                    <Info />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                    <ImageListItem cols={1}>
                        <img src="https://v4.mui.com/static/images/image-list/hats.jpg" alt="item" />
                        <ImageListItemBar
                            title="What is Banana"
                            subtitle={<span>by: Hamid Azimi</span>}
                            actionIcon={
                                <IconButton aria-label={`info about this`} className={classes.icon}>
                                    <Info />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                    <ImageListItem cols={1}>
                        <img src="https://v4.mui.com/static/images/image-list/morning.jpg" alt="item" />
                        <ImageListItemBar
                            title="What is Banana"
                            subtitle={<span>by: Hamid Azimi</span>}
                            actionIcon={
                                <IconButton aria-label={`info about this`} className={classes.icon}>
                                    <Info />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                </ImageList>
            </Container>
        </>
    );
}

export default RightBar;