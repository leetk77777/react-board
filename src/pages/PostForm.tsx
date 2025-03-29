import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";  // 페이지 이동을 위한 훅 추가
import { createPost, updatePost, getPost, Post } from "../api/postApi.ts";

const PostForm = () => {
  const navigate = useNavigate();  // 페이지 이동 함수

  // 수정시 사용
  const { id } = useParams(); // URL에서 ID 가져오기
  const [post, setPost] = useState<Post>({ id: 0, title: "", content: "" });

  useEffect(() => {
    if (id) {
      // 수정 시 기존 데이터 불러오기
      const fetchPost = async () => {
        try {
          const data = await getPost(Number(id));
          setPost(data);
        } catch (error) {
          console.error("게시글 불러오기 오류:", error);
        }
      };
      fetchPost();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("등록할 게시글:", post); // 확인용 로그
      if (id) {
        await updatePost(Number(id), post); // 수정
      } else {
        const { id, ...postData } = post; // postData로 새 변수 생성
        console.log("등록할 게시글1:", postData); // 확인용 로그
        await createPost(postData); // 등록
      }
      navigate("/"); // 목록으로 이동
    } catch (error) {
      console.error("게시글 저장 오류:", error);
    }
  };

  return (
    <div>
    <h1>{id ? "게시글 수정" : "새 게시글 등록"}</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="title" value={post.title} onChange={handleChange} placeholder="제목" required />
      </div>
      <div>
        <textarea name="content" value={post.content} onChange={handleChange} placeholder="내용" required />
      </div>
        <button type="submit">{id ? "수정" : "등록"}</button>
        <button type="button" onClick={() => navigate("/")}>취소</button>
      </form>
    </div>
  );
};

export default PostForm;