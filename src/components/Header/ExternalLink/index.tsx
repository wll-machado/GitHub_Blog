
import { ComponentProps, ReactNode } from 'react';
import {  ExternalLinkContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
    text:string;
    icon?: ReactNode;
}

 function ExternalLink({text,icon, ...rest}:ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
        {text}
        { icon ?? <FontAwesomeIcon icon={faArrowUpRightFromSquare} />  }
    </ExternalLinkContainer>
  )
}

export default ExternalLink