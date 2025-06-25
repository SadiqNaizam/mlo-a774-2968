import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Bell, CalendarClock, Menu, MessageSquare, Search, Settings } from 'lucide-react';

const TopHeader: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'home' | 'view' | 'help'>('home');

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">ASCENDION</h1>
        <span className="text-lg text-muted-foreground">Outlook</span>
      </div>

      <div className="flex items-center gap-6 flex-1 max-w-2xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-9 bg-surface" />
        </div>
        <nav className="flex items-center">
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab('home')}
            className={cn('text-sm font-medium', activeTab === 'home' && 'bg-accent text-accent-foreground')}>
              Home
            </Button>
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab('view')}
            className={cn('text-sm font-medium', activeTab === 'view' && 'bg-accent text-accent-foreground')}>
              View
            </Button>
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab('help')}
            className={cn('text-sm font-medium', activeTab === 'help' && 'bg-accent text-accent-foreground')}>
              Help
          </Button>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <MessageSquare className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2 text-sm">
           <CalendarClock className="h-4 w-4 text-muted-foreground" />
           <div className="flex flex-col text-right">
                <span className="font-medium">CRM - collab call</span>
                <span className="text-xs text-muted-foreground">Tomorrow 11:00 AM</span>
           </div>
        </div>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback className="bg-primary text-primary-foreground">RP</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default TopHeader;
