import { useCallback, useEffect, useState } from "react"
import PostHeader from "./components/Header"
import { Ipost } from "../Blog"
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import PostContent from "./components/Header/PostContent";

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME
const token = import.meta.env.VITE_GITHUB_TOKEN; 
function Post() {

  const [postData, setPostData] = useState<Ipost>({} as Ipost);
  const [isLoading, setIsLoading] = useState(true)
  const {id} = useParams();

  const getPostDetails = useCallback(async ()=>{
  try{
    setIsLoading(true)

    const response= await api.get(`/repos/${username}/${repoName}/issues/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setPostData(response.data);
  }finally{
    setIsLoading(false)
  }
},[postData])

useEffect(()=>{
  getPostDetails();
}, [])

  return (
    <div>
      <PostHeader isLoading={isLoading} postData={postData}/>
      {
        !isLoading && (
          <PostContent content={postData.body}/>
        )
      }
    </div>
  )
}

export default Post
