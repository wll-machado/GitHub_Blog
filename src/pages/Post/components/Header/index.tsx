
import { PostHeaderContainer } from './styles'
import ExternalLink from '../../../../components/Header/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons'
import { ExternalLinkButton } from '../../../../components/Header/ExternalLink/button'
import { useNavigate } from 'react-router-dom'
import { Ipost } from '../../../Blog'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { Spinner } from '../../../../components/Spinner'

interface PostHeaderProps {
  postData: Ipost
  isLoading: boolean
}

function PostHeader({postData, isLoading}:PostHeaderProps) {
    const navigate = useNavigate()
    function goBack(){
        navigate(-1)
    }

  return (
    <PostHeaderContainer>
      {
        isLoading ? <Spinner/> : (
          <>
          <header>
        <ExternalLinkButton onClick={goBack} icon={<FontAwesomeIcon icon={faChevronLeft} />}  text='voltar' />
        <ExternalLink text='ver no Github' href={postData.html_url} target='_blank'/>
      </header>

      <h1>{postData.title}</h1>
      <ul>
        <li>
            <FontAwesomeIcon icon={faGithub}/>
            {postData.user.login}
        </li>
        <li>
            <FontAwesomeIcon icon={faCalendar}/>
            {relativeDateFormatter(postData.created_at)}
        </li>
        <li>
            <FontAwesomeIcon icon={faComment}/>
            {postData.comments} comentarios
        </li>
      </ul>
          </>
        )
      }
      
    </PostHeaderContainer>
  )
}

export default PostHeader
