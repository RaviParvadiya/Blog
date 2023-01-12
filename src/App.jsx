import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Posts from "./Posts";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog/:id" element={<Posts />} />
        <Route path="*" element={<p>Error Page</p>} />
      </Routes>
    </div>
  );
}

export default App;
