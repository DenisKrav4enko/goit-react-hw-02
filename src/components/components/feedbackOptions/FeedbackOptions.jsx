import React from 'react';
import {
  Button,
  Wrapper,
  ButtonsContainer,
} from './StyledComponents';

const FeedbackOptions = props => {
  const {
    options,
    onLeaveFeedback,
  } = props;

  return (
    <Wrapper>
      <ButtonsContainer>
        {options.map(item => (
          <Button
            key={item?.id}
            onClick={event => onLeaveFeedback(event.currentTarget.accessKey)}
            accessKey={item?.label}
          >
            {item?.title ?? ''}
          </Button>
        ))}
      </ButtonsContainer>
    </Wrapper>
  )
}

export default FeedbackOptions;