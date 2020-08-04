import idx from "idx";
import { Box, Flex } from "theme-ui";
import UTCToRelativeDate from "../components/time/UTCToRelativeDate";
import { ItemOptionTabs } from "../components/ItemOptionTabs";
import { FormUpdateCreate } from "../forms/FormUpdateCreate";
import SubItems from "./SubItems";
/**
 * @name
 * @param {Object} props
 */
const SubRow = (props) => {
  const [updates, updatesSet] = React.useState();
  const [assets, assetsSet] = React.useState();
  React.useEffect(() => {
    if (idx(props, (_) => _.original.updates.length)) {
      updatesSet(props.original.updates);
    }
    if (idx(props, (_) => _.original.assets.length)) {
      assetsSet(props.original.updates);
    }
  }, []);
  return (
    <Flex>
      <Box sx={{ p: 0, flex: 5 }}>
        <SubItems />
      </Box>
      <Box
        sx={{
          bg: "solitude",
          flex: 3,
        }}
      >
        <ItemOptionTabs assets={assets} />
      </Box>
      {/* <Flex
        sx={{
          bg: "solitude",
          p: 4,
          flex: 3,
        }}
      >
        <Box sx={{ bg: "white", p: 3, flex: 1 }}></Box>
      </Flex> */}
    </Flex>
  );
};

const Update = ({ id, text_body, creator, created_at, assets, ...props }) => (
  <Flex
    sx={{
      alignItems: "center",
      borderTopBottom: 1,
      borderTopBottomColor: "solitude",
      borderTopBottomStyle: "solid",
    }}
  >
    <Box>
      <Box
        as="img"
        src={creator.photo_thumb_small}
        sx={{ borderTopRadius: "50%", mr: 3, width: 25 }}
      />
    </Box>
    <Box sx={{ flex: 1 }}>
      <p>{text_body}</p>
    </Box>
    <Box sx={{ alignContent: "flex-end" }}>
      <Box as="span" sx={{ fontSize: 0, color: "charcoal" }}>
        <UTCToRelativeDate date={created_at} />
      </Box>
    </Box>
  </Flex>
);
const Updates = ({ data = [] }) => {
  return !data.length ? null : (
    <Flex sx={{ flexDirection: "column" }}>
      {data.map((u) => (
        <Update {...u} />
      ))}
    </Flex>
  );
};

export default SubRow;
