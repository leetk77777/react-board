import { useState } from "react";
import { useNavigate } from "react-router-dom";  // 페이지 이동을 위한 훅 추가

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();  // 페이지 이동 함수

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const postData = { title, content };

    try {
      const response = await fetch("http://localhost:9090/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        alert("게시글이 등록되었습니다!");
        setTitle("");
        setContent("");
        navigate("/"); // 리스트 페이지로 이동
      } else {
        alert("등록 실패!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>제목:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>내용:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">등록</button>
      <button onClick={() => navigate("/")}>목록</button> {/* 목록 버튼 추가 */}
    </form>
  );
};

export default PostForm;