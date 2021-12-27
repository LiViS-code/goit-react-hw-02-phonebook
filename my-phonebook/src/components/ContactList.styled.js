import styled from "styled-components";
import { theme } from "../constants/Theme";

const { spacing } = theme;

export const ContastsList = styled.ul`
  padding-left: 0;
  list-style: none;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${spacing(4)};
  }
`;
