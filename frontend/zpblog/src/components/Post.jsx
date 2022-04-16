import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container } from '@material-ui/core';


const Post = (props) => {

    const useStyles = makeStyles((theme) => ({
        container: {
            paddingTop: theme.spacing(3),
        },
        root: {
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        },
        media: {
            height: 0,
            paddingTop: '56.25%',
        },
        avatar: {
            backgroundColor: blue[500],
            "& > img": {
                objectFit: "cover",
                width: "100%",
                height: "100%",
            }
        },
        actions: {
            display: "flex",
            justifyContent: "space-between"
        }
    }));

    const classes = useStyles();


    const { user, profile, blogImage, title, created, content } = props;


    return (
        <Container className={classes.container}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {
                                (profile.image.length !== 0) ?
                                    <img loading='lazy' src={profile.image} alt={user.profile.first_name[0]} />
                                    :
                                    <span>{user.profile.first_name[0]}</span>
                            }
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={user.profile.first_name}
                    subheader={created}
                />
                <CardMedia
                    className={classes.media}
                    image={blogImage}
                    title={title}
                />
                <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p">
                        <strong>
                            {title}
                        </strong>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {
                            (content.length < 250) ? content : `${content.slice(0, 249)}...`
                        }
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.actions}>
                    <div>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </div>
                    <div>
                        <a href="#" style={{ textDecoration: "none" }}>
                            <IconButton aria-label="share" style={{ fontSize: 16, color: "#2196f3" }}>
                                More
                            </IconButton>
                        </a>
                    </div>
                </CardActions>
            </Card>
        </Container>
    );
}

export default Post;