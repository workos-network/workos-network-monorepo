import { Box } from "theme-ui";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const ExpandMore = (props) => {
  return (
    <span style={{ display: "inline-block" }}>
      <Box sx={{ bg: "solitude", borderRadius: "50%", height: 25, width: 25 }}>
        <ExpandMoreIcon width={"100%"} />
      </Box>
    </span>
  );
};

export const ExpandLess = (props) => {
  return (
    <span style={{ display: "inline-block" }}>
      <Box sx={{ bg: "solitude", borderRadius: "50%", height: 25, width: 25 }}>
        <ExpandLessIcon />
      </Box>
    </span>
  );
};
