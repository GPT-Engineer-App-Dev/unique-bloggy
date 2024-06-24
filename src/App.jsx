import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
      position="fixed"
      top="1rem"
      right="1rem"
    />
  );
};

function App() {
  return (
    <Router>
      <ColorModeSwitcher />
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </Router>
  );
}

export default App;
