import styled from 'styled-components';

export const StyledList = styled.div`
  margin: auto;

  .content-list {
    width: 100%;
    gap: 16px;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .border {
    border-bottom: 1px solid var(--borderList);
  }

  h2 {
    font-size: 18px;
    color: var(--textList);
    font-weight: 700;
    font-style: italic;
  }

  p {
    color: var(--paragraf);
  }

  @media (min-width: 508px) {
    & > div {
      flex-direction: row;
    }
  }

  @media (min-width: 780px) {
    .content-list {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }
`;
