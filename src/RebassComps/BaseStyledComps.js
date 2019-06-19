import styled from "styled-components";
import { Flex } from "rebass";
import { height, overflow, borders } from "styled-system";

export const SDiv = styled(Flex)`
${borders}
${height}
${overflow}
`;

export const SDivOLD = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 100%;
  height: auto;

  /* top: 200;
  position: absolute;
  bottom: 0; */

  border: 2px pink solid;
  background-color: transparent;
`;

// export const BoxDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: pink;
//   width: 95px;
//   border: 2px teal solid;
// `;

export const imageWrapperMinHeight = "95px";
