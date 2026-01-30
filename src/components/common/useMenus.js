import { useEffect, useState } from "react";
import axios from "axios";

const useMenus = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    loadMenus();
  }, []);

  const loadMenus = async () => {
    try {
      const res = await axios.get("https://localhost:7118/api/Menu");
      setMenus(res.data);
    } catch (err) {
      console.error("Menu load error", err);
    }
  };

  return menus;
};

export default useMenus;
