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
export const getPostById = async (id: number): Promise<Post> => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

// 게시글 생성
export const createPost = async (post: Omit<Post, "id">): Promise<Post> => {
  const response = await axios.post(API_BASE_URL, post);
  return response.data;
};

// 게시글 수정
export const updatePost = async (id: number, post: Omit<Post, "id">): Promise<Post> => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, post);
  return response.data;
};

// 게시글 삭제
export const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};