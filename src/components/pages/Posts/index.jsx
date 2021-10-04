import React, { useEffect, useState } from "react";

import styles from './styles.module.css';
import List from "./components/List";
import Button from "../../modules/Button";
import AddPostForm from "./components/AddPostForm";

function Posts() {

   const [state, setState] = useState({
       posts: [],
       isShowAddPostForm: false,
   });




    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) => response.json())
        .then((data) => setState({ ...state, posts: data}))
    },[])

   const onAddFormSubmit = () => {
       console.log('work form');
   };
   const onShowForm = () => {
        setState({ ...state, isShowAddPostForm: !state.isShowAddPostForm});
   };
   const onCancelForm = () => {
        setState({ ...state, isShowAddPostForm: false});
   };



    return (
        <div className={styles.posts}>
            <div className={styles.posts__nav}>
            <h1>Posts</h1>
            <Button
                type="btn"
                title="Add post"
                className="btn__add"
                onClick={onShowForm}
            >
            </Button>
            </div>
            <List posts={state.posts} />
            <AddPostForm
                isShow={state.isShowAddPostForm}
                onSubmit={onAddFormSubmit} 
                onCancel={onCancelForm} 
             />
        </div>
    )
}
export default Posts;