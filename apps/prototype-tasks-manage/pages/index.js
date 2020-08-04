import { PulseTable } from "react-monday-ui";
import { ModalSetToken } from "../components";
import { Box } from "theme-ui";

const Home = () => (
  <>
    <div className="container">
      <PulseTable footer={<Settings />} />
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
      }
    `}</style>
  </>
);

const Settings = () => (
  <Box
    as="span"
    sx={{
      background: "#39d450",
      color: "white",
      boxShadow: 0,

      borderRadius: 4,
      cursor: "pointer",
      p: 2,
    }}
  >
    <ModalSetToken>Account Settings</ModalSetToken>
  </Box>
);

export default Home;
