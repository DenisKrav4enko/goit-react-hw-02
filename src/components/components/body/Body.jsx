import React from 'react';
import {
  Title,
  Wrapper,
  NameOfStat,
  CountOfStat,
  ItemContainer,
  StatsContainer,
} from './StyledComponents';

const Body = props => {
  const {
    state,
    report,
  } = props;

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round(100 * state.good / countTotalFeedback())
  }

  return (
    <Wrapper>
      <Title>
        Statistics
      </Title>
      <StatsContainer>
        {report.map(item => (
          <ItemContainer key={item.id}>
            <NameOfStat>
              {item?.title ?? ''}:&nbsp;
            </NameOfStat>
            <CountOfStat>
              {state?.[item.label] ?? ''}
            </CountOfStat>
          </ItemContainer>))
        }
        <ItemContainer>
          <NameOfStat>
            Total:&nbsp;
          </NameOfStat>
          <CountOfStat>
            {countTotalFeedback()}
          </CountOfStat>
        </ItemContainer>
        <ItemContainer>
          <NameOfStat>
            Positive feedback:&nbsp;
          </NameOfStat>
          <CountOfStat>
            {countTotalFeedback() !== 0
              ? countPositiveFeedbackPercentage()
              : 0
            }%
          </CountOfStat>
        </ItemContainer>
      </StatsContainer>
    </Wrapper>
  )
}

export default Body;