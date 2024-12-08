import React from 'react';
import { ChatArea } from '../Chat/ChatArea';
import { ChatInput } from '../Chat/ChatInput';
import { Header } from '../Header/Header';

export const MainContent: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col relative pt-16 lg:pt-0">
      <Header />
      <ChatArea />
      <ChatInput />
    </div>
  );
};