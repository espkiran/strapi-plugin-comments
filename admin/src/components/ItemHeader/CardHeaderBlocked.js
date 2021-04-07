import styled from "styled-components";

import { colors } from "strapi-helper-plugin";

const CardHeaderBlocked = styled.span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  height: 2.5rem;
  margin-right: 1rem;
  padding: 0.25rem 1rem;

  color: ${colors.leftMenu.grey};

  border-radius: 1.25rem;
  background: ${colors.leftMenu.lightGrey};

  svg {
    margin-right: 0.5rem;
  }
`;

export default CardHeaderBlocked;
