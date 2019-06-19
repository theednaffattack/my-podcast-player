import React from "react";

import { Button, Text } from "../RebassComps/BaseRebass";

function BottomButtons({ buttonItems }) {
  return (
    <>
      {buttonItems.map((buttoninfo, index) => (
        <Button
          width={1 / 4}
          p={0}
          key={index}
          border="rebeccapurple"
          color="text"
          bg="transparent"
          type="button"
        >
          <Text color="#adadad" fontSize="1.5em">
            {buttoninfo.icon}
          </Text>

          <Text p={0} m={0} color="#adadad" fontSize=".6em">
            {buttoninfo.text}
          </Text>
        </Button>
      ))}
    </>
  );
}

export default BottomButtons;
