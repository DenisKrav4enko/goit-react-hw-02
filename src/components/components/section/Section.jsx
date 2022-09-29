import React from 'react';
import {Wrapper, Title} from './StyledComponents';

const Section = props => {
  const {
    title,
    component,
  } = props;

  return (
    <Wrapper>
      <Title>{title}</Title>
      {component}
    </Wrapper>
  )
}

export default Section;