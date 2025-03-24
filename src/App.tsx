import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import PostForm from "./pages/PostForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} /> {/* 게시글 목록 */}
        <Route path="/new" element={<PostForm />} /> {/* 게시글 등록 폼 */}
      </Routes>
    </Router>
  );
}

export default App;