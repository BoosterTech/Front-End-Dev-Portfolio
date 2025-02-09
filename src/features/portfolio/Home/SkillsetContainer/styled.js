import styled from "styled-components";

export const SkillsetWrapper = styled.div`
  margin-top: 20px;
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    margin-top: 40px;
  }
`;

export const SkillsetHeader = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 10px;
  font-weight: 1000;
  font-size: 1.6rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 1.1rem;
  }
`;

export const ListContainer = styled.ul`
  list-style: none;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  border-radius: 15px;
  padding: 32px 0 0 0;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  /* font-size: 1rem; */
  gap: 10px 3px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    grid-template-columns: 1fr;
    font-size: 1rem;
  }
`;

export const ListItem = styled.li`
  &:before {
    content: "●";
    color: blue;
    padding-right: 10px;
  }
`;
