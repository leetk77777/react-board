import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import PostForm from "./pages/PostForm";
import PostForm1 from "./pages/PostForm1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} /> {/* 게시글 목록 */}
        <Route path="/new" element={<PostForm />} /> {/* 게시글 등록 폼 */}
        <Route path="/new1" element={<PostForm1 />} /> {/* 게시글 등록 폼 - 1 */}
        <Route path="/edit/:id" element={<PostForm />} /> {/* 수정 시 */}
      </Routes>
    </Router>
  );
}

export default App;