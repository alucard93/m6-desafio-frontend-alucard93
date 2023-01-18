import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  border-radius: .5rem;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3px;

    > label {
      font-style: normal;
      font-weight: 700;
      font-size: .75rem;
      line-height: 1.25rem;
      display: flex;
      align-items: center;
      text-align: center;
    }

    > input {
      width: 100%;
      border: .0625rem solid var(--Black);
      font-style: normal;
      font-weight: 300;
      font-size: 1rem;

      display: flex;
      outline: 0;
      height: 48px;
      min-height: 48px;

      /* border: .0625rem solid var(--color_4); */
      border-radius: .5rem;

      /* color: var(--color_6);
      color: var(--color_1); */

      padding: 0 10px;
    }
  }
  > p {
    height: 1rem;
    font-size: .625rem;
    color: var(--Black);
  }
`;
