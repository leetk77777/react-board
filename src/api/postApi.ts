import axios from "axios";

const API_BASE_URL = "http://localhost:9090/api/posts"; // 백엔드 주소

// 게시글 타입 정의
export interface Post {
  id: number;
  title: string;
  content: string;
}

// 모든 게시글 가져오기
export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

// 특정 게시글 가져오기
export const getPost = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

// 게시글 생성
export const createPost = async (post: { title: string; content: string }): Promise<Post> => {
  try {
    const response = await axios.post(API_BASE_URL, post, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("게시글 등록 오류:", error);
    throw new Error("게시글 등록에 실패했습니다.");
  }
};

// 게시글 수정
export const updatePost = async (id: number, post: { title: string; content: string }) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, post);
  return response.data;
};

// 게시글 삭제
export const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};

// fetch 방식
/*export const updatePost = async (id: number, post: Post) => {
  const response = await fetch(`http://localhost:9090/api/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  return response.json();
};

export const deletePost = async (id: number) => {
  await fetch(`http://localhost:9090/api/posts/${id}`, {
    method: "DELETE",
  });*/