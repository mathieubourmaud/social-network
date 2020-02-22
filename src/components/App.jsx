import React, { useState } from 'react';
import {
  Button,
  Form,
  Row,
  Container,
  Col,
  Spinner,
  Alert,
  Card
} from 'react-bootstrap';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, isLoading] = useState(false);

  const onTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  }

  const onDescriptionChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  }

  const onSubmit = (e) => {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    const thumbnail = `https://picsum.photos/id/${randomId}/640/360`; 

    e.preventDefault();
    isLoading(true);
    setTimeout(() => {
      addPost({title, description, thumbnail });
      isLoading(false);
      setTitle('');
      setDescription('');
    }, 300);
  }

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
              loading ?
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              : 'Add Post'
            }
          </Button>
        </Form>
    </React.Fragment>
  )
}

const Post = ({post: { title, description, thumbnail }}) => {
  return (
    <Card className="mt-3 mb-3">
      <Card.Img variant="top" src={ thumbnail } />
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
  )
};

const Posts = ({ posts }) => {
  return (
    <div>
      { posts.map((post, index) => <Post post={post} key={index} /> )}
    </div>
  );
}

const App = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState();

  const addPost = (post) => {
    setPosts([...posts, post]);
    setMessage({ type: 'success', text: 'The post has been created.' });
  }

  return (
    <div className="App">
      <Container>
        { message &&
          <Row className="justify-content-md-center">
            <Col md="8">
              <Alert className="mt-4" variant={message.type}>{ message.text }</Alert>
            </Col>
          </Row>
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
}

export default App;
