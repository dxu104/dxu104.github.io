import "./css/App.css";

import Header from "./jsx/Header ";
import MainArea from "./jsx/MainArea";
import Footer from "./jsx/Footer";
import { useEffect, useState } from "react";

function App() {
  const [page, setPage] = useState("/about"); //默认页面设置为"About Me"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    function handlePageChange() {
      // 使用 window.location.hash 获取哈希值作为页面
      const path = window.location.hash.slice(1); // 移除前面的 '#'
      setPage(path || "/about"); // 如果没有哈希，则默认为 "/about"
    }
    handlePageChange(); // 设置初始页面
  
    window.addEventListener("hashchange", handlePageChange); // 监听 hashchange 事件而不是 popstate
    return () => {
      window.removeEventListener("hashchange", handlePageChange);
    };
  }, []);
  
  const themeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}-theme`}>
      <Header  setPage={setPage} themeChange={themeChange} />
      <MainArea page={page} setPage={setPage} />
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
