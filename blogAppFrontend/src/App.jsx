import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/AllBlog";
import Navbar from "./Navbar";
import About from "./Pages/About";
import OneBlog from "./Pages/OneBlog";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:blogId" element={<OneBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
