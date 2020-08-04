import { Box, Typography } from "@material-ui/core";
import FormUpdateCreate from "../../forms/FormUpdateCreate";
/**
 * @name TabUpdate
 * @param {Object} props
 */
export const TabUpdate = (props) => {
  const [updates, updatesSet] = React.useState();

  return (
    <Box>
      <Updates data={updates} />
      <Box
        sx={{
          borderTop: 1,
          borderTopColor: "solitude",
          borderTopStyle: "solid",
          m: -3,
          p: 3,
          mt: 0,
        }}
      >
        <FormUpdateCreate />
      </Box>
    </Box>
  );
};

const Updates = ({ data = [] }) => {
  return !data.length ? null : (
    <Flex sx={{ flexDirection: "column" }}>
      {data.map((u) => (
        <Update {...u} />
      ))}
    </Flex>
  );
};

export default TabUpdate;
