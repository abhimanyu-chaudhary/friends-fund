import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import Testimonials from "../components/Sections/Testimonials";
import { Route, Router, Routes} from "react-router-dom";
import Login from "../components/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import AuthProvider from "../lib/provider/AuthProvider";
import PrivateRoute from "../lib/provider/PrivateRoute";
import Error from "../components/Sections/Error";
const MainLayout = () => (
 <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
 </>
);

export default function Landing() {
  return (
    <>
      <>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />} >
               <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </>
    </>
  );
}


