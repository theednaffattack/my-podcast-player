// import { AbWrapper, AbBase } from "../PosedComps/AbsoluteWrapper";
import posed from "react-pose";
import { SDiv } from "../RebassComps/BaseStyledComps";

export const PosedAbBase = posed(SDiv)({
  isOpen: {
    top: "-500%",
    bottom: -88,
    height: "auto",
    flip: true
  },
  isClosed: {
    top: -120,
    bottom: 0,
    left: 0,
    height: "120px",
    flip: true
  }
});
