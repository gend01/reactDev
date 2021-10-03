import React from "react";
import PropTypes from 'prop-types';

import styles from './styles.module.css';


function Post({ title, body, id, userId }) {

    return (
        <div className={styles.list}>
            <h2>{title}</h2>
            <p>{body}</p>
            <span>{id}</span>
            <strong>{userId}</strong>
        </div>
    )
}


Post.defaultProps = {
    title: "default title",
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
};
export default Post;