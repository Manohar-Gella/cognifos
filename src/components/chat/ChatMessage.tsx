import { Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  model?: string;
}

export function ChatMessage({ message, isUser, model }: ChatMessageProps) {
  return (
    <div
      className={cn(
        'flex gap-4 p-4 rounded-lg',
        isUser ? 'bg-primary/10' : 'bg-muted'
      )}
    >
      <div className="flex-shrink-0">
        {isUser ? (
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-5 w-5" />
          </div>
        ) : (
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
            <Bot className="h-5 w-5" />
          </div>
        )}
      </div>
      <div className="flex-1">
        {!isUser && model && (
          <div className="text-sm text-muted-foreground mb-1">{model}</div>
        )}
        <p className="text-sm leading-relaxed">{message}</p>
      </div>
    </div>
  );
}