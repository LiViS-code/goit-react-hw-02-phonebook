import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  max-width: 320px;
  min-width: 300px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(5)};
  font-size: 1em;
  border-radius: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.primaryColor};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  font-size: 1.8em;
`;

export const ContactsTitle = styled.h2`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  font-size: 1.4em;
`;
