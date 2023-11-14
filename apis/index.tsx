import { API_KEY } from "@/helper/common";
import axios from "axios";

export const getBlogsList = async () => {
  try {
    const response = await axios.get(`${API_KEY}posts`);
    if (response?.status === 200) {
      return response?.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
  }
};

export const getBlogsDetail = async (id: number) => {
  try {
    const response = await axios.get(`${API_KEY}posts/${id}`);
    if (response?.status === 200) {
      return response?.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
  }
};
