import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About';
import References from './components/References';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Sidebar from './components/Sidebar'
import axios from 'axios'
import './App.css';

function App() {

  const [post, setPost] = useState([])
  const [comment, setComment] = useState([])

  const getPosts = async () => {
    const res = await axios.get('http://localhost:3001/posts')
    const postsResponse = res.data
    // console.log('Here are the posts: ', postsResponse.posts)
    setPost(postsResponse.posts);
  }

  const getComments = async () => {
    const res = await axios.get('http://localhost:3001/comments')
    const commentsResponse = res.data
    // console.log('Here are the comments: ', commentsResponse.comments)
    setComment(commentsResponse.comments)
  }

  useEffect(() => {
    getPosts();
    getComments();
  }, [])

  return (
    <div className="App">

      <Header />

        <Route exact path="/Home" component={(props) => <Home {...props} posts={post} comments={comment}/>} />
        <Route exact path="/About" component={About} />
        <Route exact path="/References" component={References} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Sidebar" component={Sidebar} />
    
    </div>
  );
}

export default App;
