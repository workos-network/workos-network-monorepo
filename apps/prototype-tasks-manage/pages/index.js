import { ItemsTable } from "react-monday-ui";
import { ModalSetToken } from "../components";
import { Box } from "theme-ui";

const Home = () => (
  <>
    <div className="container">
      <ItemsTable />
      <Box
        sx={{
          top: 10,
          right: 10,
          position: "absolute",
        }}
      >
        <Box
          as="span"
          sx={{
            boxShadow: 0,
            border: "1px solid black",
            borderRadius: 4,
            cursor: "pointer",
            p: 2,
          }}
        >
          <ModalSetToken>Settings</ModalSetToken>
        </Box>
      </Box>
    </div>

    <style jsx>{`
      .container {
        width: 1200px;
        max-width: 1200px;
      }
    `}</style>
  </>
);

export default Home;
