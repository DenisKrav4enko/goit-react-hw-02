import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 250px;
  height: 180px;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #1d1e1f;
`;

export const StatsContainer = styled.div`
  height: 152px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ItemContainer = styled.div`
  display: flex;
  padding: 4px 0;
`;

export const NameOfStat = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #1d1e1f;
`;

export const CountOfStat = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #1d1e1f;
`;