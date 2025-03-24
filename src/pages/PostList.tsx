import { useEffect, useState } from "react";
import { getPosts, Post } from "../api/postApi.ts";
import { useNavigate } from "react-router-dom";  // 페이지 이동을 위한 훅 추가

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();  // 페이지 이동 함수

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("게시글을 불러오는 중 오류 발생:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>게시글 목록</h1>
      <button onClick={() => navigate("/new")}>게시글 등록</button> {/* 등록 버튼 추가 */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;