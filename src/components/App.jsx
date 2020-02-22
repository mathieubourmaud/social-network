import React, { useState } from 'react';
import {
  Row,
  Container,
  Col,
  Alert,
} from 'react-bootstrap';
import PostForm from './pages/Posts/PostForm';
import Posts from './pages/Posts/Posts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState();

  const addPost = (post) => {
    setPosts([...posts, post]);
    setMessage({ type: 'success', text: 'The post has been created.' });
  };

  return (
    <div className="App">
      <Container>
        { message
          && (
          <Row className="justify-content-md-center">
            <Col md="8">
              <Alert className="mt-4" variant={message.type}>{ message.text }</Alert>
            </Col>
          </Row>
          )
        }
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
    </div>
  );
};

export default App;
