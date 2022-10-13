import styled from "styled-components";

export const BackTitleButton = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--button-color);
  font-family: "Inter", sans-serif;
`;
export const AddressTypo = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  color: #342f29;
  font-family: "Inter", sans-serif;
  font-style: italic;
`;
export const UpdateAddress = styled.a`
  font-size: 1rem;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  text-decoration: underline;
  font-style: italic;
  &:hover {
    cursor: pointer;
  }
`;
