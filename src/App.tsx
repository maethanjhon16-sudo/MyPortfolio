import { ConfigProvider, theme as antdTheme } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

// Keep these tokens in sync with the CSS custom properties in
// src/styles/theme.css so antd's own components (Form, Timeline,
// Drawer, etc.) match the rest of the page.
const themeConfig = {
  algorithm: antdTheme.darkAlgorithm,
  token: {
    colorPrimary: "#4cc9f0",
    colorBgBase: "#0a0e14",
    colorBgContainer: "#10141c",
    colorBgElevated: "#161b26",
    colorBorder: "#232a38",
    colorText: "#e8edf4",
    colorTextSecondary: "#a7b0bf",
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    borderRadius: 10,
  },
};

export default function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <Header />
      <div className="app-shell">
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}
