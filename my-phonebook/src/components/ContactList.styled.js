import styled from "styled-components";

export const ContastsList = styled.ul`
  padding-left: 0;
  list-style: none;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;
