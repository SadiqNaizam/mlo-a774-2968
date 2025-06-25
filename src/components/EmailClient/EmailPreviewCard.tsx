import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Bell, MessageSquare } from 'lucide-react';

export interface Email {
  id: string;
  sender: string;
  senderInitial: string;
  subject: string;
  preview: string;
  timestamp: string;
  isRead: boolean;
  isSelected: boolean;
  type: 'standard' | 'meeting' | 'caution' as const;
  meetingDetails?: {
    title: string;
    time: string;
    conflict: string;
  };
}

interface EmailPreviewCardProps {
  email: Email;
  onSelect: (id: string) => void;
}

const EmailPreviewCard: React.FC<EmailPreviewCardProps> = ({ email, onSelect }) => {
  const initialColor = email.senderInitial === 'F' ? 'bg-red-500' : 'bg-blue-500';

  return (
    <div
      onClick={() => onSelect(email.id)}
      className={cn(
        'flex cursor-pointer items-start gap-3 border-l-4 p-3 transition-colors',
        email.isSelected
          ? 'bg-accent/20 border-accent'
          : 'border-transparent hover:bg-muted/50',
        !email.isRead && !email.isSelected && 'bg-muted/30'
      )}
    >
      <div className="mt-1 flex items-center space-x-3">
        <Checkbox checked={email.isSelected} aria-label={`Select email from ${email.sender}`} />
        <Avatar className="h-8 w-8">
            <AvatarFallback className={cn('text-white', initialColor)}>{email.senderInitial}</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="flex items-center justify-between">
          <span className={cn('font-semibold text-sm', !email.isRead && 'text-foreground')}>
            {email.sender}
          </span>
          <span className="text-xs text-muted-foreground">{email.timestamp}</span>
        </div>
        <p className={cn('truncate text-sm font-medium', !email.isRead && 'text-foreground')}>
          {email.subject}
        </p>
        {email.type === 'meeting' && email.meetingDetails ? (
          <div className="mt-1 border-l-2 border-gray-600 pl-2">
            <p className="text-xs text-muted-foreground">{email.meetingDetails.title}</p>
            <div className="flex items-center justify-between mt-1">
                <p className="text-xs text-muted-foreground">{email.meetingDetails.time} <br/> {email.meetingDetails.conflict}</p>
                <Button size="sm" variant="secondary">RSVP</Button>
            </div>
          </div>
        ) : (
          <p className="truncate text-xs text-muted-foreground">{email.preview}</p>
        )}
      </div>
      <div className="flex flex-col items-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="ghost" size="icon" className="h-6 w-6">
            <MessageSquare className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default EmailPreviewCard;
