import Post from './Post'
import Topbar from './Topbar'
import { NewsType } from '../utils/types'
import { useState, useEffect } from 'react'
import { data } from '../utils/news'

const Homepage = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState<NewsType[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/posts`);
        const data = await response?.json();
        if(data)
        {
          setPosts(data.posts);
        }
      } catch (error) {
        alert("Backend server not running. Showing demo posts.");
        setPosts(data);
      }
    };
    fetchPosts();
  }, [])
    return (
      <div>
        <Topbar setQuery = {setQuery}/>
        <div className="grid grid-cols-1 m-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
          {
            posts.filter((post) => {
              const formattedQuery = query.trim().replace(/\s+/g, ' ');
              if(formattedQuery === "") {
                return post;
              }
              else if(post.heading.toLowerCase().includes(formattedQuery.toLowerCase()) || post.description.toLowerCase().includes(formattedQuery.toLowerCase())){
                return post;
              }
            }).map((post, index) => 
              <div className="mx-3 my-2" key={index}>
                <Post news = {post}/>
              </div>
             )
          }
        </div>
      </div>
  )
}

export default Homepage