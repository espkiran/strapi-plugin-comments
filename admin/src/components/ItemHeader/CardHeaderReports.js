import styled from "styled-components";

import { colors } from "strapi-helper-plugin";

const CardHeaderReports = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  height: 2.5rem;
  margin-right: 1rem;
  padding: 0.25rem 1rem;

  color: red;
  text-decoration: none;

  border: 1px dotted red;
  border-radius: 1.25rem;
  background: transparent;

  transition: 0.25s ease-in-out all;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    color: ${colors.beige};
    text-decoration: none;

    border-style: solid;
    background: red;

    transform: translateY(-0.25rem);

    cursor: pointer;
  }
`;

export default CardHeaderReports;
