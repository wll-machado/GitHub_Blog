
import ReactMarkdown from 'react-markdown';
import { PostContentContainer } from './styles'
interface PostContentProps {
    content: string;
}

function PostContent({content}:PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown children={content}/>
    </PostContentContainer>
  )
}

export default PostContent
