import React from 'react';
import {
  Title,
  Button,
  Wrapper,
  ButtonsContainer,
} from './StyledComponents';

const Header = props => {
  const {
    report,
    setBad,
    setGood,
    setNeutral
  } = props;

  const handleOnClick = event => {
    if (event === 'good') {
      setGood(prevState => prevState +1)
    } else if (event === 'neutral') {
      setNeutral(prevState => prevState +1)
    } else {
      setBad(prevState => prevState +1)
    }
  }

  return (
    <Wrapper>
      <Title>
        Please leave feedback
      </Title>
      <ButtonsContainer>
        {report.map(button => (
          <Button
            key={button?.id}
            onClick={event => handleOnClick(event.currentTarget.accessKey)}
            accessKey={button?.label}
          >
            {button?.title ?? ''}
          </Button>
        ))}
      </ButtonsContainer>
    </Wrapper>
  )
}

export default Header;