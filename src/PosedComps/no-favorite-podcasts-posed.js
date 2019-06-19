import posed from "react-pose";

import { Heading } from "../RebassComps/BaseRebass";

export const NoFavoritePodcastsPosed = posed(Heading)({
  isOpen: {
    // applyAtStart: { display: 'block' },
    opacity: 1,
    y: 0,
    scale: 1.8
    // transition: {
    //   scale: {
    //     type: "spring",
    //     stiffness: 200,
    //     damping: 0
    //   }
    // }
    // scale: 1
  },
  isClosed: {
    // applyAtStart: { display: "none" },
    opacity: 0,
    // display: "none"
    y: 100,
    scale: 0.9
  }
});
