import React from 'react';
import { Card, CardActions, CardContent,Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import { Checkbox } from "@material-ui/core";
import { updatePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.overlay2}>
        <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(post.id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions>
        <Checkbox
          checked={post.completed}
          onChange={(e) => {
            dispatch(updatePost(post.id, {id: post.id, title: post.title, message: post.message, completed: !post.completed}))
          }}
          color="primary"
        />
      </CardActions>      
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post.id)); }}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
