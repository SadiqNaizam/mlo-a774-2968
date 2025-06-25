import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Inbox,
  Send,
  FileText,
  Trash2,
  Archive,
  Star,
  ChevronDown,
  NotebookText,
  History,
  Rss,
  Search as SearchIcon,
  Users,
  MailPlus,
} from 'lucide-react';

type NavItem = {
  id: string;
  label: string;
  icon: React.ElementType;
  count?: number;
  isActive?: boolean;
};

const favorites: NavItem[] = [
  { id: 'inbox', label: 'Inbox', icon: Inbox, count: 2, isActive: true },
  { id: 'sent', label: 'Sent Items', icon: Send },
  { id: 'drafts', label: 'Drafts', icon: FileText, count: 4 },
  { id: 'deleted', label: 'Deleted Items', icon: Trash2, count: 28 },
];

const userFolders: NavItem[] = [
  { id: 'user_inbox', label: 'Inbox', icon: Inbox, count: 2, isActive: true },
  { id: 'user_drafts', label: 'Drafts', icon: FileText, count: 4 },
  { id: 'user_sent', label: 'Sent Items', icon: Send },
  { id: 'user_deleted', label: 'Deleted Items', icon: Trash2, count: 28 },
  { id: 'user_junk', label: 'Junk Email', icon: Archive },
  { id: 'user_notes', label: 'Notes', icon: NotebookText, count: 2 },
  { id: 'user_archive', label: 'Archive', icon: Archive },
  { id: 'user_history', label: 'Conversation History', icon: History },
  { id: 'user_rss', label: 'RSS Feeds', icon: Rss },
];

const otherFolders: NavItem[] = [
  { id: 'search', label: 'Search Folders', icon: SearchIcon },
  { id: 'groups', label: 'Go to Groups', icon: Users },
];

const SidebarNav: React.FC = () => {
  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground w-64 border-r border-sidebar-border">
      <div className="p-2">
        <Button className="w-full justify-start bg-primary text-primary-foreground hover:bg-primary/90">
          <MailPlus className="mr-2 h-4 w-4" />
          New mail
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Accordion type="multiple" defaultValue={['favorites', 'user_folders']} className="w-full px-2">
          <AccordionItem value="favorites" className="border-none">
            <AccordionTrigger className="hover:no-underline text-xs font-semibold text-sidebar-foreground/80 py-1 px-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-400" />
                <span>Favorites</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <nav className="space-y-1">
                {favorites.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className={cn(
                      'w-full justify-start h-8 text-sm',
                      item.isActive
                        ? 'bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground'
                        : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                    {item.count && <span className="ml-auto text-xs">{item.count}</span>}
                  </Button>
                ))}
              </nav>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="user_folders" className="border-none">
            <AccordionTrigger className="hover:no-underline text-xs font-semibold text-sidebar-foreground/80 py-1 px-2">
              <div className="flex items-center">
                 raghuram.pathmanaba...
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <nav className="space-y-1">
                {userFolders.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className={cn(
                      'w-full justify-start h-8 text-sm',
                      item.isActive
                        ? 'bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground'
                        : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                    {item.count && <span className="ml-auto text-xs">{item.count}</span>}
                  </Button>
                ))}
              </nav>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="px-2 mt-2">
           <nav className="space-y-1">
                {otherFolders.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="w-full justify-start h-8 text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                ))}
            </nav>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
