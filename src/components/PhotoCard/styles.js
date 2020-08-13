import styled from "styled-components";
import { fadeIn } from "./../../styles/animations";
export const Wrapper = styled.div`
  border-radius: 10px;
  display: block;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

export const Image = styled.img`
  ${fadeIn()};
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;
