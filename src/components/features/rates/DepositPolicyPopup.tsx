
"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import { ShieldCheck, Percent, Info } from 'lucide-react';

type DepositPolicyPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function DepositPolicyPopup({ isOpen, onClose }: DepositPolicyPopupProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-lg w-[90vw] shadow-xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center text-xl">
            <ShieldCheck className="h-6 w-6 mr-3 text-primary" />
            Deposit & Cancellation Policy
          </AlertDialogTitle>
          <AlertDialogDescription>
            Please review the deposit and cancellation policy details below.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="text-sm text-muted-foreground pt-3 space-y-4 max-h-[60vh] overflow-y-auto">
          <div className="font-semibold text-foreground">
            ALL DATE BOOKINGS REQUIRE A DEPOSIT.
          </div>
          <div>
            The deposit is solely to build trust and ensure you plan to attend our scheduled meeting, as my time is valuable.
          </div>
          
          <div className="flex items-start p-3 bg-muted/50 rounded-md border border-border">
            <Percent className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
            <div>
              <p className="text-foreground font-medium">Required Deposit Amount:</p>
              <p>
                The deposit is <strong>30%</strong> of the total donation for the date.
                <br />
                (e.g., If the total donation is $100, the deposit is $30).
              </p>
            </div>
          </div>

          <div className="flex items-start p-3 bg-muted/50 rounded-md border border-accent/30">
              <Info className="h-5 w-5 mr-3 mt-1 text-accent shrink-0" />
            <div>
              <p className="text-accent font-medium">Deposit Refund Policy:</p>
              <p>
                If you need to cancel for any reason, you WILL receive a FULL refund of your deposit, provided you:
              </p>
              <ol className="list-decimal list-inside mt-2 space-y-1 pl-1">
                <li>Contact me directly to inform me of the cancellation.</li>
                <li>Do so at least <strong>1 hour in advance</strong> of our scheduled meeting time.</li>
              </ol>
            </div>
          </div>
          <div className="pt-2 text-xs text-muted-foreground/80">
            By clicking "I Understand", you acknowledge that you have read and understood this deposit and cancellation policy.
          </div>
        </div>
        
        <AlertDialogFooter className="pt-4">
          <AlertDialogAction asChild className="w-full sm:w-auto">
            <Button onClick={onClose} size="lg">I Understand</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
