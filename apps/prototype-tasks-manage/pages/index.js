import { ItemsTable } from "react-monday-ui";
import { ModalSetToken } from "../components";
import { Box } from "theme-ui";

const Home = () => (
  <>
    <div className="container">
      <ItemsTable footer={<Settings />} />
      <Box
        sx={{
          top: 10,
          right: 10,
          position: "absolute",
        }}
      ></Box>
    </div>

    <style jsx>{`
      .container {
        width: 100%;
        max-width: 1200px;
      }
    `}</style>
  </>
);

const Settings = () => (
  <Box
    as="span"
    sx={{
      background: "#c8603ee0",
      color: "white",
      boxShadow: 0,
      // border: "1px solid black",
      borderRadius: 4,
      cursor: "pointer",
      p: 2,
    }}
  >
    <ModalSetToken>Account Settings</ModalSetToken>
  </Box>
);

export default Home;
