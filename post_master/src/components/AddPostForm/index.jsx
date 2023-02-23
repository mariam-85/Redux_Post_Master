import React from 'react'
import style from './index.module.css'
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/reducers/postsReducer';

export default function AddPostForm() {

  const dispatch = useDispatch();

  const submit = event => {
    event.preventDefault();
    const { title, text } = event.target;
    dispatch(addPost({
      title: title.value, 
      text:text.value
    }));
    title.value = '';
    text.value = '';
  }

  return (
    <form className={style.add_post_form} onSubmit={submit}>
      <input type='text' name='title' placeholder='Your title' />
      <input type='text' name='text' placeholder='Your text' />
      <button>Add post</button>
    </form>
  )
}