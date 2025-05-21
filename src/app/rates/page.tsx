
'use client';

import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DollarSign, CalendarClock, Hourglass, Info } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { DepositPolicyPopup } from '@/components/features/rates/DepositPolicyPopup';

const datePackageRates = [
  { duration: "Quick Visit (15 minutes)", price: "$80" },
  { duration: "Half Hour (30 minutes)", price: "$125" },
  { duration: "Hour (60 minutes)", price: "$275" },
];

const additionalServiceRates = [
  { service: "BDSM Escort", price: "$150" },
  { service: "Kinky/Fetish Escort", price: "$100" },
  { service: "Anal Escort", price: "$200" },
  { service: "Erotic Massage", price: "$200" },
  { service: "Foot Fetish", price: "$150" },
  { service: "Girlfriend Experience (GFE)", price: "$150" },
  { service: "Swedish Massage", price: "$200" },
  { service: "Tantric Massage", price: "$200" },
  { service: "Sex Massage", price: "$240" },
  { service: "Naked Massage", price: "$240" },
  { service: "Nuru Massage", price: "$200" },
  { service: "Body to Body", price: "$200" },
];

export default function RatesPage() {
  const [isPolicyPopupOpen, setIsPolicyPopupOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Open the popup once the component is mounted and if not previously closed
    if (isMounted && !localStorage.getItem('depositPolicyAccepted')) {
      setIsPolicyPopupOpen(true);
    }
  }, [isMounted]);

  const handleClosePolicyPopup = () => {
    if (isMounted) {
        localStorage.setItem('depositPolicyAccepted', 'true');
    }
    setIsPolicyPopupOpen(false);
  };

  return (
    <MainLayout>
      {isMounted && <DepositPolicyPopup isOpen={isPolicyPopupOpen} onClose={handleClosePolicyPopup} />}
      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <DollarSign className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            My Rates & Policies
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Transparent pricing for unforgettable experiences. All rates are donations for my time and companionship.
          </p>
        </div>

        <div className="space-y-10">
          <Card className="shadow-xl hover:shadow-primary/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-4">
              <CalendarClock className="h-10 w-10 text-primary" />
              <div>
                <CardTitle className="text-2xl">Date Package Rates</CardTitle>
                <CardDescription>
                  Donations for standard date durations. These are for my time and companionship.
                  <br /><strong className="text-primary">This is not included in the Escort services donation listed below.</strong>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[70%]">Duration</TableHead>
                    <TableHead className="text-right">Donation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {datePackageRates.map((rate) => (
                    <TableRow key={rate.duration} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">{rate.duration}</TableCell>
                      <TableCell className="text-right">{rate.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="shadow-xl hover:shadow-primary/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-4">
               <Hourglass className="h-10 w-10 text-primary" />
              <div>
                <CardTitle className="text-2xl">Additional Service Rates</CardTitle>
                <CardDescription>
                  Donations for specific experiences or activities. These may be in addition to date package rates.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[70%]">Service / Experience</TableHead>
                    <TableHead className="text-right">Additional Donation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {additionalServiceRates.map((item) => (
                    <TableRow key={item.service} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">{item.service}</TableCell>
                      <TableCell className="text-right">{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
               <p className="mt-4 text-sm text-muted-foreground">
                Please <Link href="/contact" className="text-primary hover:underline">contact me</Link> to discuss specific desires or combinations of services for a personalized quote.
              </p>
            </CardContent>
          </Card>
          
          <div className="mt-12 p-6 border border-primary/20 rounded-lg bg-muted/30">
             <div className="flex items-start">
                <Info className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
                <div>
                    <h4 className="font-semibold text-foreground">A Note on Discretion & Safety:</h4>
                    <p className="text-sm text-muted-foreground">
                    Your privacy and safety are paramount. All interactions are handled with the utmost discretion. I adhere to strict confidentiality and expect the same in return. My environment is secure, and I prioritize respectful and consensual experiences. For more details, please review my <Link href="/policy" className="text-primary hover:underline">full policy</Link>.
                    </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}

