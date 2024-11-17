import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../helper/supabaseClient";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch initial user session
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };

    fetchUser();

    // Listen for auth state changes
    const { subscription } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session?.user);
        navigate("/dashboard"); // Navigate to dashboard on login
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        navigate("/login"); // Redirect to login on logout
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const loginAction = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error; // Propagate error for handling in Login
    setUser(data?.user); // Update user state
  };

  const logOut = async () => {
    await supabase.auth.signOut();
    setUser(null); // Clear user state
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
