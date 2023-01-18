import styled from 'styled-components';

export const StyledForm = styled.div`
  
  .content{
    flex-direction: column;
  }

  .content-form {
    width: 100%;
    
    align-items: center;
    justify-content: center;
    background: var(--backgroundForm);
    border-radius: 8px;
  }

  form {
    display: flex;
    padding: 16px;
    flex-direction: column;
  }

  h1{
    margin-top: 16px;
    font-size: 18px;
    margin-bottom: 8px;
  }

  button {
    font-family: 'Montserrat', sans-serif;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 38px;
    padding: 0 3rem;
    margin-bottom: 24px;
    padding: 0 16px;
  }

  @media (min-width: 508px) {
    .content {
      flex-direction: row;
    }
  }

  @media (min-width: 780px) {
    .content-form {
    }
  }
`;
