import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

const Post = ({ post: { title, description, thumbnail } }) => (
  <Card className="mt-3 mb-3">
    <Card.Img variant="top" src={thumbnail} />
    <Card.Body>
      <Card.Title>
        <b>{ title }</b>
      </Card.Title>
      <Card.Text>
        { description }
      </Card.Text>
      <Button variant="primary">See post</Button>
    </Card.Body>
  </Card>
);

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
