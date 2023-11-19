import { Home } from "./pages/Home/Home";
import { About } from "./pages/AbousUs/About";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Documents } from "./pages/Documents/Documents";
import { ProjectView } from "./pages/Portfolio/ProjectView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about_us" element={<About />} />
      <Route path="/project_view/:project_id" element={<ProjectView />} />
      <Route path="/documents" element={<Documents />} />
    </Routes>
  );
}

export default App;
