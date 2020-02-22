import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const Posts = ({ posts }) => (
  <div>
    { posts.map(post => <Post post={post} key={post.id} />) }
  </div>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Posts;
