import { Header } from '@/components/layout/Header';
import { ChatContainer } from '@/components/chat/ChatContainer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ChatContainer />
      </main>
    </div>
  );
}

export default App;