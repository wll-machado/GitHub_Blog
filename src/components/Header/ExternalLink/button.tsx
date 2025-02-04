import { ComponentProps, ReactNode } from "react";
import { ExternalLinkButtonContainer} from "./styles";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ExternalLinkProps = ComponentProps<typeof ExternalLinkButtonContainer> & {
    text:string;
    icon?: ReactNode;
}
export function ExternalLinkButton({text,icon, ...rest}:ExternalLinkProps) {
    return (
      <ExternalLinkButtonContainer {...rest}>
          { icon ?? <FontAwesomeIcon icon={faArrowUpRightFromSquare} />  }
          {text}
      </ExternalLinkButtonContainer>
    )
  }