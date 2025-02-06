//  設定 API 請求
import axios from 'axios';
import { Post } from '../types/post';

const API_URL = 'https://jsonplaceholder.typicode.com'; // 使用假 API

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(`${API_URL}/posts`);
  return response.data;
};

export const getPost = async (id: number): Promise<Post> => {
  const response = await axios.get<Post>(`${API_URL}/posts/${id}`);
  return response.data;
};