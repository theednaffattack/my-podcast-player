import posed from "react-pose";

import { Flex } from "../RebassComps/BaseRebass";

export const PlayerControls = posed(Flex)({
  isOpen: {
    // applyAtStart: { display: 'block' },
    opacity: 1
  },
  isClosed: {
    // applyAtStart: { display: "none" },
    opacity: 0
    // display: "none"
  }
});
