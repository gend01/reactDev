import React from "react";
import PropTypes from 'prop-types';

import styles from './styles.module.css';
import Post from '../Post'

function List({ posts }) {

    return (
        <div className={styles.list}>
           {posts.map(( post ) => (
                <Post 
                    title={post.title} 
                    body={post.body} 
                    id={post.id}
                    userId={post.userId}
                    key={post.id}
                />
           ))}
        </div>
    )
}


List.defaultProp = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: 'default title',
            body: 'default body',
        })
    ),
};
List.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            userId: PropTypes.number.isRequired,
        })
    ),
};
export default List;