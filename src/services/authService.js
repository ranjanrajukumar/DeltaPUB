import axios from "axios";

const API_URL = "https://localhost:7118/api/Auth";

export const login = async (userName, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      userName,   // ✅ EXACT MATCH with backend
      password,
    });

    const data = response.data;

    // adjust keys if backend returns differently
    localStorage.setItem("token", data.token);
  

    return { success: true };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.message || "Invalid username or password",
    };
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getToken = () => localStorage.getItem("token");
export const getUser = () =>
  JSON.parse(localStorage.getItem("user"));
