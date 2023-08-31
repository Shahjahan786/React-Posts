import logo from './logo.svg';
import './App.css';
import Post from './Post'
import { useEffect, useState } from 'react';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
      fetch("https://dummyjson.com/posts")
      .then(response => response.json())
      .then(posts => setPosts(posts["posts"]) )
  }, [1])

  const HeadingStyle = `
      text-align: center;
      color: grey;
  `

  return (
    <>

      <h1 Style={HeadingStyle}>My Posts</h1>

      {
            posts.map((item) =>{
              return <Post key={item.id} title= {item.title} post = {item.body} tags = {item.tags}/>
            })
        }

   </>
  );
}

export default App;
