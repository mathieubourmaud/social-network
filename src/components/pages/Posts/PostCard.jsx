import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

const PostCard = ({ post: { title, description, thumbnail } }) => (
  <Card className="mt-3 mb-3">
    <Card.Img variant="top" src={thumbnail} />
    <Card.Body>
      <Card.Title>
        <b>{ title }</b>
      </Card.Title>
      <Card.Text>
        { description }
      </Card.Text>
      <Button variant="primary">View post</Button>
    </Card.Body>
  </Card>
);

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
