import React from "react";
import posed, { PoseGroup } from "react-pose";

import { FlexBorder, Text, Image } from "../RebassComps/BaseRebass";

const PosedDiv = posed(FlexBorder)({
  listOpen: { delay: 300, staggerChildren: 300 }
});

const Item = posed(FlexBorder)({
  listOpen: { opacity: 1, y: 0 },
  listClosed: { opacity: 0, y: -10 }
});

export const PosedList = ({
  isOpen,
  handlePlayMedia,
  handleSelectAndPlayMedia,
  items,
  playerVisibility
}) => {
  return (
    <PosedDiv
      flexDirection="column"
      pose={playerVisibility === "isClosed" ? "listOpen" : "listClosed"}
    >
      {/* {JSON.stringify(items, null, 2)} */}
      {items.map(({ episodes, id, image, title }) => (
        <Item
          onClick={handleSelectAndPlayMedia.bind(this, episodes[0].url)}
          // onClick={handlePlayMedia}
          flexDirection="row"
          alignItems="stretch"
          minHeight="100%"
          width={[1, "850px"]}
          key={id}
          color="black"
          pose={isOpen ? "listOpen" : "listClosed"}
        >
          <FlexBorder
            width="85px"
            border="crimson"
            style={{
              overflow: "hidden"
            }}
          >
            <Image
              alt="Open Floor Podcast"
              height="100%"
              src={image}
              width={[1, 1, 1]}
            />
          </FlexBorder>
          <FlexBorder width={[1, 1, 1]} flexDirection="column" border="crimson">
            <FlexBorder flexDirection="column" border="lime">
              <Text fontSize=".9em">Date</Text>
            </FlexBorder>
            <Text>{title}</Text>
            <FlexBorder
              justifyContent="flex-end"
              flexDirection="column"
              flex="1 1 auto"
              border="lime"
            >
              <Text fontSize=".9em">*XX* episodes</Text>
            </FlexBorder>
          </FlexBorder>
        </Item>
      ))}
    </PosedDiv>
  );
};

export const PosedList2 = ({ isOpen, items }) => (
  <>
    {items.map(show => (
      <div key={show.id}>
        {show.title}
        <img alt={show.title} src={show.image} />
      </div>
    ))}
  </>
);

const staggerDuration = 5000;
// const Child = posed.div({
//   enter: {
//     x: 0,
//     delay: ({ i }) => i * staggerDuration
//   }
// });

// ({items}) => (
//   <PoseGroup>
//     {(item, i) => <Child i={i} />}
//   </PoseGroup>
// )

const OtherItem = posed(FlexBorder)({
  enter: { x: 0, delay: ({ i }) => i * staggerDuration }
});

export const DisplayItem = ({ items }) => {
  return (
    <>
      {items.map((item, i) => {
        return (
          <OtherItem i={i} key={item.id}>
            {item.title}
            <img alt={item.title} src={item.image} />
          </OtherItem>
        );
      })}
    </>
  );
};

export class PoseGroupItems extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <PoseGroup>
        {items.map((item, i) => {
          return (
            <OtherItem i={i} key={item.id}>
              {item.title}
              <img alt={item.title} src={item.image} />
            </OtherItem>
          );
        })}
      </PoseGroup>
    );
  }
}

// id={id} image={image} title={title} i={i} key={id}
