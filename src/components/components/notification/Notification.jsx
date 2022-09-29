import React from 'react';
import {
  Text,
  Wrapper,
} from './StyledComponents';

const Notification = props => {
  const { message } = props;

  return (
    <Wrapper>
      <Text>
        {message}
      </Text>
    </Wrapper>
  )
}

export default Notification;