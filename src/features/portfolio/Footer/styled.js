import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #47494a;
  color: white;
  max-width: 100%;
  text-align: center;
  margin: 0;
`;

export const TextContainer = styled.h2`
  margin: 0;
  padding: 5px;
  font-size: .8rem;
  font-weight: 100;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    font-size: 0.5rem;
  }
`;
