// import { useState } from 'react';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Resume from './Resume';
import { useEffect } from 'react';

import Privacy from './Privacy';
import ContactMe from './ContactMe';

function MainArea({ page, setPage }) {
    useEffect(() => {
        function handlePageChange() {
            const path = window.location.hash.slice(1) || '/about'; // 获取哈希值，并提供默认页面
            setPage(path);
        }

        window.addEventListener("hashchange", handlePageChange); // 监听 hashchange 事件
        handlePageChange(); // 初始化页面状态

        return () => {
            window.removeEventListener("hashchange", handlePageChange);
        };
    }, []);

    const renderPage = () => {
        switch (page) {
            case '/about':
                return <AboutMe />;
            case '/experience':
                return <Experience />;
            case '/projects':
                return <Projects />;
            case '/resume':
                return <Resume />;
            case '/privacy':
                return <Privacy />;
            case '/contactme':
                return <ContactMe />;
            default:
                return <AboutMe />;
        }
    };

    return <>{renderPage()}</>;
}


export default MainArea; 