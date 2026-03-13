import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatAssistant from './ChatAssistant';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Layout;
