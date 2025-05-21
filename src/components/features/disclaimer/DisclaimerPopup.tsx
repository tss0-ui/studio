
"use client";

import { useEffect, useState } from 'react';
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
import { AlertTriangle } from 'lucide-react';

const DISCLAIMER_ACCEPTED_KEY = 'disclaimerAcceptedV1'; // Added a version in case text changes

export function DisclaimerPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const alreadyAccepted = localStorage.getItem(DISCLAIMER_ACCEPTED_KEY);
      if (!alreadyAccepted) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 3000); // 3 seconds delay
        return () => clearTimeout(timer);
      }
    }
  }, [isMounted]);

  const handleAccept = () => {
    if (isMounted) {
      localStorage.setItem(DISCLAIMER_ACCEPTED_KEY, 'true');
    }
    setIsOpen(false);
  };

  if (!isMounted) {
    // To prevent hydration mismatch and flashing content, don't render until mounted
    // and initial localStorage check has potential to run
    return null; 
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="max-w-lg w-[90vw] shadow-xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center text-xl">
            <AlertTriangle className="h-6 w-6 mr-3 text-primary" />
            Site Entry Confirmation
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-muted-foreground pt-2 space-y-3 max-h-[60vh] overflow-y-auto">
            <p>By entering this site, you confirm the following:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>I am 18 years of age or older.</li>
              <li>
                I understand this site offers companionship and social entertainment only — not sexual services or illegal activities.
              </li>
              <li>I agree not to misrepresent myself or make inappropriate requests.</li>
              <li>
                I understand that all bookings are for time and presence only, and I respect Nikki’s personal boundaries and autonomy.
              </li>
              <li>
                I accept that all payments are non-refundable, though future credits may apply under certain terms.
              </li>
              <li>
                I agree to hold Nikki harmless for how time is mutually spent once a booking begins.
              </li>
            </ul>
            <p className="pt-2">
              By continuing, I fully accept the{' '}
              <a
                href="https://www.termsfeed.com/live/809b7ac7-d11a-41cd-9c5d-04b41f0bcd80"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                terms of service
              </a>{' '}
              and this site's disclaimer policy.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="pt-4">
          <AlertDialogAction asChild className="w-full sm:w-auto">
            <Button onClick={handleAccept} size="lg">I Accept</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
