import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import TaksApp from "./page/Taks/Taks";
import LayoutPage from "./components/Layout/Layout";
import PostCard from "./page/post/PostCard";
import PostList from "./page/post/PostList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="allpost" element={<TaksApp />} />
          <Route path="share" element={<PostList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
