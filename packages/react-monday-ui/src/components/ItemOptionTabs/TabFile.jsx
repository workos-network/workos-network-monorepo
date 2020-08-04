import { Box } from "@material-ui/core";

const Asset = (props) => {
  return <Atom.Box>{props.name}</Atom.Box>;
};

/**
 * @name TabFile
 * @param {Object} props
 */
export const TabFile = ({ assets, ...props }) => {
  return !assets ? null : (
    <Flex>
      Files
      {assets.map((a) => (
        <Asset {...a} />
      ))}
    </Flex>
  );
};
export default TabFile;
