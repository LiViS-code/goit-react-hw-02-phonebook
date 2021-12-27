import styled from "styled-components";

export const FormContacts = styled.form`
  width: 90%;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.backgroundColorForm}; ;
`;

export const Label = styled.label`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  border: none;
  border-radius: ${({ theme }) => theme.spacing(2)};
  transition: ${({ theme }) =>
    `outline ${theme.timing} ${theme.timingFunction}`};

  &:hover,
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.outlineColor};
  }
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing(2)};
  border: none;
  border-radius: ${({ theme }) => theme.spacing(2)};
  color: inherit;
  outline: 1px solid ${({ theme }) => theme.colors.primaryColor};
  transition: ${({ theme }) => `color ${theme.timing} ${theme.timingFunction}`},
    ${({ theme }) => `background-color ${theme.timing} ${theme.timingFunction}`};

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.reverseColor};
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }

  &:disabled,
  &[disabled] {
    cursor: auto;
    border: 1px solid ${({ theme }) => theme.colors.borderDisabledColor};
    background-color: ${({ theme }) => theme.colors.backgroundDisabledColor};
    color: ${({ theme }) => theme.colors.disabledColor};
  }
`;
