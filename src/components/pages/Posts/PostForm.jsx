import React, { useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
import { Form, Button, Spinner } from 'react-bootstrap';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, isLoading] = useState(false);

  const onTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const onSubmit = (e) => {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    const thumbnail = `https://picsum.photos/id/${randomId}/640/360`;

    e.preventDefault();
    isLoading(true);
    setTimeout(() => {
      addPost({
        id: uuid(),
        title,
        description,
        thumbnail,
      });
      isLoading(false);
      setTitle('');
      setDescription('');
    }, 300);
  };

  return (
    <React.Fragment>
      <Form className="mt-4" onSubmit={onSubmit}>
        <Form.Group controlId="title">
          <Form.Control
            type="text"
            placeholder="Enter your post title"
            onChange={onTitleChange}
            value={title}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Control
            as="textarea"
            rows="5"
            type="password"
            onChange={onDescriptionChange}
            placeholder="Type a short description about your post"
            value={description}
          />
        </Form.Group>
        <Button
          variant="success"
          type="submit"
          disabled={loading}
        >
          {
                loading
                  ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )
                  : 'Add Post'
              }
        </Button>
      </Form>
    </React.Fragment>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default PostForm;
