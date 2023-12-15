import "./App.css";
import Data from "./components/Data";
import Navbar from "./components/Navbar";


import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, Stack } from "@mui/material";
function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Data />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
