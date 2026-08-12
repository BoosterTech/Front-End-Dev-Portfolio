import styled from "styled-components";

const Main = styled.main`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    max-width: 100vw;
    width: 100vw;
    padding: 0 var(--spacing-md);
  }
`;

export default Main;
