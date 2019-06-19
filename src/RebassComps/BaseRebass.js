import { Box, Button, Flex, Heading, Image, Text } from "rebass";
import styled from "styled-components";
import { borders, minHeight, position } from "styled-system";

export const FlexBorder = styled(Flex)`
  ${borders}
  ${minHeight}
`;
export const FlexDashboard = styled(Flex)`
  ${borders}
  ${minHeight}
  ${position}
`;

export { Box, Button, Flex, Heading, Image, Text };
