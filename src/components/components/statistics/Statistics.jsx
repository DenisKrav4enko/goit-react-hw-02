import React from 'react';
import {
  Wrapper,
  NameOfStat,
  CountOfStat,
  ItemContainer,
  StatsContainer,
} from './StyledComponents';

const Statistics = props => {
  const {
    bad,
    good,
    total,
    report,
    neutral,
    positivePercentage,
  } = props;

  return (
    <Wrapper>
      <StatsContainer>
        {report.map(item => (
          <ItemContainer key={item.id}>
            <NameOfStat>
              {item?.title ?? ''}:&nbsp;
            </NameOfStat>
            <CountOfStat>
              {props[item.label]}
            </CountOfStat>
          </ItemContainer>))
        }
        <ItemContainer>
          <NameOfStat>
            Total:&nbsp;
          </NameOfStat>
          <CountOfStat>
            {total}
          </CountOfStat>
        </ItemContainer>
        <ItemContainer>
          <NameOfStat>
            Positive feedback:&nbsp;
          </NameOfStat>
          <CountOfStat>
            {total !== 0
              ? positivePercentage
              : 0
            }%
          </CountOfStat>
        </ItemContainer>
      </StatsContainer>
    </Wrapper>
  )
}

export default Statistics;