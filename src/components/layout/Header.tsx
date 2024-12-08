import { Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">COGNIFOS.AI</span>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Pricing</Button>
          <ThemeToggle />
          <Button>Sign In</Button>
        </nav>
      </div>
    </header>
  );
}