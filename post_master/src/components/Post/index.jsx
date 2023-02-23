import React from 'react'
import style from './index.module.css'
import { useDispatch } from 'react-redux'
import { changeLike, deletePost } from '../../store/reducers/postsReducer';
import { CloseOutlined } from '@ant-design/icons'
import CommentsContainer from '../CommentsContainer';


export default function Post({ id, title, text, like, comments }) {

    const like_or_not = like ? 'Liked' : 'Like?';

    const like_style = [style.like_btn, like ? style.like_btn_active : ''].join(' ')

    const dispatch = useDispatch();


  return (
    <div className={style.post_item}>
        <CloseOutlined 
        className={style.cross_icon}
        onClick={() => dispatch(deletePost(id))} 
      />
        <p>{ title }</p>
        <p>{ text }</p>
        <p className={like_style} onClick={() => dispatch(changeLike(id))}> { like_or_not }</p>

        <CommentsContainer comments={comments} post_id={id} />

    </div>
  )
}
