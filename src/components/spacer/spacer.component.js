import React from "react";
import styled from "styled-components/native";
import { theme } from "../../infrastructure/theme";

const sizeVariant = {
  small:1,
  medium:2,
  large:3,
}

const positionVariant = {
  top:"marginTop",
  left:"marginLeft",
  right:"marginRight",
  bottom:"marginBottom"
}

const getVariant = (pos,size) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[pos];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`
}
export const Spacer = styled.View`
${'' /* Returning like 'marginTop:1 || 2 || 3 */}
  ${({pos,size,theme}) => getVariant(pos,size,theme)};
`;

Spacer.defaultProps = {
  pos:'top',
  size:'small',
}