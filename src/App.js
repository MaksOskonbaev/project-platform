import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Courses from "./pages/Courses";
import Freelans from "./pages/Freelans";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import News from "./pages/News";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Layout>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/newsportal" element={<News />} />
          <Route path="/freelans" element={<Freelans />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Layout>
      <Header />
      <Footer />


    </div>
  );
}

export default App;
