import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  ArrowUpDown,
  ChevronDown,
  Filter,
  List,
} from 'lucide-react';
import EmailPreviewCard, { type Email } from './EmailPreviewCard';

// Dummy data grouped by date
const todayEmails: Email[] = [
  {
    id: '1',
    sender: 'C&D Culture Team',
    senderInitial: 'CT',
    subject: 'Recenter: A Modern Yoga...', 
    preview: 'Join the meeting now Meeting ID: 221 ...',
    timestamp: '1:13 PM',
    isRead: false,
    isSelected: false,
    type: 'meeting' as const,
    meetingDetails: {
      title: 'Join the meeting now Meeting ID: 221 ...',
      time: 'Thu 7/3/2025 12:00 ...',
      conflict: 'No conflicts'
    }
  },
  {
    id: '2',
    sender: 'Figma',
    senderInitial: 'F',
    subject: "We've updated our Terms of Service",
    preview: 'CAUTION:- External Mail.',
    timestamp: '4:33 AM',
    isRead: true,
    isSelected: true,
    type: 'caution' as const,
  },
];

const yesterdayEmails: Email[] = [
  {
    id: '3',
    sender: 'KK',
    senderInitial: 'KK',
    subject: 'ACTION REQUIRED: Mee...',
    preview: 'New monthly mailer for client engage...',
    timestamp: 'Mon 7:24 PM',
    isRead: true,
    isSelected: false,
    type: 'standard' as const,
  },
   {
    id: '4',
    sender: 'Prasad Maladkar, Mia Abendan, +1 other',
    senderInitial: 'P',
    subject: 'Ascendion Daily Digest',
    preview: 'CAUTION:- External Mail.',
    timestamp: 'Mon 6:44 PM',
    isRead: true,
    isSelected: false,
    type: 'caution' as const,
  },
];

interface FolderSectionProps {
  onEmailSelect: (email: Email | null) => void;
}

const FolderSection: React.FC<FolderSectionProps> = ({ onEmailSelect }) => {
  const [emails, setEmails] = useState<Email[]>([...todayEmails, ...yesterdayEmails]);

  const handleSelect = (id: string) => {
    let selectedEmail: Email | null = null;
    const newEmails = emails.map(e => {
        const isSelected = e.id === id;
        if (isSelected) selectedEmail = {...e, isSelected: true, isRead: true };
        return {...e, isSelected };
    });
    setEmails(newEmails);
    onEmailSelect(selectedEmail);
  };

  return (
    <div className="flex flex-col bg-background h-full">
      <Tabs defaultValue="focused" className="flex-1 flex flex-col">
        <div className="px-4 py-2 border-b">
            <TabsList>
              <TabsTrigger value="focused">Focused</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
        </div>
        <div className="px-4 py-2 border-b flex justify-between items-center">
           <h3 className="font-bold">Focused</h3>
           <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm"><Filter className="h-4 w-4 mr-2"/>Filter</Button>
                <Button variant="ghost" size="icon" className="h-8 w-8"><List className="h-4 w-4"/></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8"><ArrowUpDown className="h-4 w-4"/></Button>
           </div>
        </div>
        <TabsContent value="focused" className="flex-1 overflow-y-auto mt-0">
          <div className="space-y-1">
            <div className="px-4 py-1 text-sm font-semibold text-muted-foreground flex items-center gap-2">
                <ChevronDown className="h-4 w-4"/> Today
            </div>
            {todayEmails.map(email => (
              <EmailPreviewCard key={email.id} email={emails.find(e => e.id === email.id)!} onSelect={handleSelect} />
            ))}

             <div className="px-4 py-1 text-sm font-semibold text-muted-foreground flex items-center gap-2">
                <ChevronDown className="h-4 w-4"/> Yesterday
            </div>
            {yesterdayEmails.map(email => (
              <EmailPreviewCard key={email.id} email={emails.find(e => e.id === email.id)!} onSelect={handleSelect} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="other" className="flex-1 flex items-center justify-center text-muted-foreground">
          <p>Other emails will be shown here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FolderSection;
