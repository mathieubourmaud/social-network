import React from 'react';
import PropTypes from 'prop-types';
import PostCard from './PostCard';

const Posts = ({ posts }) => (
  <div>
    { posts.map(post => <PostCard post={post} key={post.id} />) }
  </div>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Posts;
