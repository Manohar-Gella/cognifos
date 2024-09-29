import React from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Chat Window */}
      <div className="flex-1 bg-gradient-to-b from-gray-900 to-black relative">
        <TopNav />
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
