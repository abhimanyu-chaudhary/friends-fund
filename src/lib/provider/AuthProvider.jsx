import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../helper/supabaseClient"; // Adjust the path as needed
import Loading from "./Loading"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Track if session is still being checked
  const navigate = useNavigate();

  useEffect(() => {
    // Check Supabase session on app initialization
    const checkSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) {
          console.error("Error fetching session:", error.message);
        }

        if (session) {
          setUser(session.user);
        }
      } catch (err) {
        console.error("Unexpected error during session check:", err.message);
      } finally {
        setLoading(false); // Ensure loading state is cleared
      }
    };

    checkSession();
  }, []);

  const loginAction = async ({ email, password }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        console.error("Login failed:", error.message);
        return;
      }

      setUser(data.user); // Set user data from login response
      navigate("/dashboard"); // Redirect to dashboard
    } catch (err) {
      console.error("Login failed:", err.message);
      console.error("Unexpected login error:", err.message);
    }
  };

  const logOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error("Error logging out:", err.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loginAction, logOut }}>
      {!loading ? children : <Loading />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
