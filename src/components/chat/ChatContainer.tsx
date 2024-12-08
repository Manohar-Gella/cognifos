import { useState } from 'react';
import { ChatInput } from './ChatInput';
import { ChatMessage } from './ChatMessage';
import { ModelSelector } from './ModelSelector';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  model?: string;
}

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedModel, setSelectedModel] = useState('gpt-4');

  const handleSend = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
    };

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: 'This is a demo response. In production, this would be connected to actual AI models.',
      isUser: false,
      model: selectedModel,
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  return (
    <div className="flex flex-col h-screen pt-16">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Chat</h2>
        <ModelSelector
          selectedModel={selectedModel}
          onModelChange={setSelectedModel}
        />
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.content}
            isUser={message.isUser}
            model={message.model}
          />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}