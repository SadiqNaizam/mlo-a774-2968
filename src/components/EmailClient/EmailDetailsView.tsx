import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Archive,
  ArrowLeft,
  ChevronDown,
  Flag,
  Forward,
  Reply,
  ReplyAll,
  Smile,
  Trash2,
  MoreVertical,
  Paperclip,
  AlertCircle,
  Check
} from 'lucide-react';
import type { Email } from './EmailPreviewCard';

interface EmailDetailsViewProps {
  email: Email | null;
  onBack: () => void;
}

const EmailDetailsView: React.FC<EmailDetailsViewProps> = ({ email, onBack }) => {
  if (!email) {
    return (
      <div className="flex h-full items-center justify-center bg-background p-4 text-muted-foreground">
        Select an item to read.
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col bg-card">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} className="md:hidden">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-xl font-bold truncate">{email.subject}</h2>
        </div>
        {/* Add top-right action icons here if needed */}
      </div>

      <div className="flex items-center gap-2 p-2 border-b">
        <Button variant="ghost"><Reply className="mr-2 h-4 w-4"/>Reply</Button>
        <Button variant="ghost"><ReplyAll className="mr-2 h-4 w-4"/>Reply all</Button>
        <Button variant="ghost"><Forward className="mr-2 h-4 w-4"/>Forward</Button>
        <Separator orientation="vertical" className="h-6 mx-2" />
        <Button variant="ghost" size="icon"><Archive className="h-4 w-4" /></Button>
        <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive" /></Button>
        <Button variant="ghost" size="icon"><Flag className="h-4 w-4" /></Button>
         <Button variant="ghost">Read / Unread <ChevronDown className="ml-2 h-4 w-4" /></Button>
        <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-red-500 text-white text-xl">{email.senderInitial}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg">{email.sender}</p>
                <p className="text-sm text-muted-foreground">{`<announcements@figma.com>`}</p>
              </div>
              <p className="text-sm text-muted-foreground">{`Tue 6/24/2025 ${email.timestamp}`}</p>
            </div>
            <p className="text-sm text-muted-foreground mt-1">To: Raghuram Pathmanaban <Check className="inline h-4 w-4 text-green-500"/></p>
          </div>
        </div>
        
        {email.type === 'caution' && (
            <> 
              <div className="rounded-md border border-yellow-200/20 bg-yellow-900/20 p-3 text-sm text-yellow-200 flex items-center gap-3">
                <AlertCircle className="h-5 w-5 flex-shrink-0"/>
                <span>Some content in this message has been blocked because the sender isn't in your Safe senders list.</span>
                <div className="ml-auto flex gap-2">
                    <Button variant="outline" size="sm" className="bg-transparent border-yellow-200/50 hover:bg-yellow-200/10 text-yellow-200">Trust sender</Button>
                    <Button variant="outline" size="sm" className="bg-transparent border-yellow-200/50 hover:bg-yellow-200/10 text-yellow-200">Show blocked content</Button>
                </div>
              </div>
              <div className="border-l-4 border-red-500 bg-red-900/20 p-3">
                <p className="font-bold text-red-400">CAUTION:- External Mail.</p>
              </div>
            </>
        )}

        <div className="prose prose-invert max-w-none text-foreground/90">
          <p>Hi there,</p>
          <p>We're reaching out to let you know we're updating <strong>Figma's Terms of Service</strong> for our Starter and Professional plans. We do this regularly to ensure these terms are clear and cover the growing list of products, features, and services available to you as a Figma user. We've also updated our terms to stay current with applicable laws and regulations and to add clarity where we believe it would be useful.</p>
          <p>You can currently view both the existing and new Terms of Service <a href="#" className="text-primary underline">here</a>, and we encourage you to do so.</p>
          <p>These updated Terms of Service go into effect on <strong>July 29, 2025</strong> - by keeping your Figma account after that date you agree to these updated terms.</p>
          <p>Thanks,<br />The Figma Team</p>
        </div>
      </div>
      
    </div>
  );
};

export default EmailDetailsView;
