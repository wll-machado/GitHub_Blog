
import { Ipost } from '../..'
import { relativeDateFormatter } from '../../../../utils/formatter';
import { PostContainer } from './styles'

interface PostProps{
    post: Ipost;
}

function Post({post}:PostProps) {
    
   const date = relativeDateFormatter(post.created_at) 
  return (
    <PostContainer to={`/post/${post.number}`}>
        <div>
            <strong>
                {post.title}
            </strong>
            <span>
                {date}
            </span>
        </div>
        <p>
            {post.body}
        </p>
    </PostContainer>
  )
}

export default Post
