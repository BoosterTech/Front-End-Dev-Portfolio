import styled from "styled-components";

const Main = styled.main`
  position: relative;
  z-index: 1;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    max-width: 100%;
    width: 100%;
    padding: 0 var(--spacing-md);
  }
`;

export default Main;
