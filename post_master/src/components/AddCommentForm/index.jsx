import React from 'react'
import style from './index.module.css'
import { addComment } from '../../store/reducers/postsReducer';
import { useDispatch } from 'react-redux';

export default function AddCommentForm({ post_id }) {

  const dispatch = useDispatch();

  const submit = event => {
    event.preventDefault();
    const { comment } = event.target;
    dispatch(addComment({
      post_id, 
      comment: comment.value
    }));
    comment.value = '';
  }

  return (
    <form onSubmit={submit} className={style.add_comment_form}>
      <input type='text' name='comment' placeholder='Type your comment' />
      <button>Add comment</button>
    </form>
  )
}