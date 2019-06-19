import React from "react";
import posed, { PoseGroup } from "react-pose";
import { distanceInWords } from "date-fns";
import { FlexBorder, Text, Image } from "../../RebassComps/BaseRebass";

const stagger = 150;

const Item = posed(FlexBorder)({
  enter: { opacity: 1, x: 0, delay: ({ indexer }) => indexer * stagger },
  exit: {
    opacity: 0
  }
});

export default ({ items }) => (
  <PoseGroup animateOnMount={true}>
    {items.map(({ date, id, podcast: { image }, text, ...theRest }, index) => {
      return (
        <Item
          borderBottom="2px grey solid"
          width={[1, 1, 1]}
          py={[2, 2, 2]}
          flexDirection="row"
          key={id}
          indexer={index}
          id={id}
        >
          <FlexBorder width="85px">
            <Image borderRadius="6px" width="100%" src={image} />
          </FlexBorder>
          <FlexBorder
            ml={[2, 2, 2]}
            flexDirection="column"
            justifyContent="center"
          >
            <Text>{distanceInWords(new Date(date), new Date())}</Text>
            <Text>{text}</Text>
          </FlexBorder>
          {/* {JSON.stringify(theRest, null, 2)} */}
        </Item>
      );
    })}
  </PoseGroup>
);
