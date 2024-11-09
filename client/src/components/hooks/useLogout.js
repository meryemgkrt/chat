import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);

    try {
      // Çıkış işlemi (örn: sunucuya çıkış isteği gönderilebilir)
      localStorage.removeItem("chat-user"); // Kullanıcı verisini localStorage'dan kaldırır
      setAuthUser(null); // Context'teki kullanıcı bilgisini sıfırlar
      toast.success("Successfully logged out");
    } catch (error) {
      toast.error("Something went wrong during logout");
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout }; // `loading` ve `logout` işlevini döndürüyoruz
};

export default useLogout;
