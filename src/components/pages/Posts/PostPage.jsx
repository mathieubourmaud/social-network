import React, { useState } from 'react';
import {
  Row, Container, Col, Alert,
} from 'react-bootstrap';
import Posts from './Posts';
import PostForm from './PostForm';

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState();

  const addPost = (post) => {
    setPosts([...posts, post]);
    setMessage({ type: 'success', text: 'The post has been created.' });
  };
  return (
    <Container>
      {message && (
        <Row className="justify-content-md-center">
          <Col md="8">
            <Alert className="mt-4" variant={message.type}>
              {message.text}
            </Alert>
          </Col>
        </Row>
      )}
      <Row className="justify-content-md-center">
        <Col md="8">
          <PostForm addPost={addPost} />
        </Col>
      </Row>
      <hr className="my-4" />
      <Row className="justify-content-md-center">
        <Col md="8">
          <Posts posts={posts} />
        </Col>
      </Row>
    </Container>
  );
};

export default PostPage;
