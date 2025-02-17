import { useCallback, useEffect, useState } from "react"
import Post from "./components/Post"
import Profile from "./components/Profile"
import SearchInput from "./components/Search"
import { PostListContainer } from "./styles"
import { api } from "../../lib/axios"
import { Spinner } from "../../components/Spinner"

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME
const token = import.meta.env.VITE_GITHUB_TOKEN;
export interface Ipost{
  title: string;
  body:string;
  created_at: string;
  number:number;
  html_url:string;
  comments:number;
  user:{
    login:string;
  }
}

function Blog() {
 
  const [posts, setPosts] = useState<Ipost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback( async (query:string = "")=>{
    try{
      setIsLoading(true)
      const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      setPosts(response.data.items);
    }finally{
      setIsLoading(false);
    }
  },[])

  useEffect(()=>{
    getPosts();
  },[])
  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts}/>
      {
        isLoading ? <Spinner/> : (
          <>
            <PostListContainer>
        {posts.map((post)=>(
          <Post  key={post.number} post={post} />
        ))}
      </PostListContainer>
          </>
        )
      }
    </>
  )
}

export default Blog
