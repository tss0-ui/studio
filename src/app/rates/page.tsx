
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DollarSign, Info, CalendarClock, Percent, Hourglass, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

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
  return (
    <MainLayout>
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
          <Card className="shadow-xl border-primary/30">
            <CardHeader className="flex flex-row items-center gap-4">
              <ShieldCheck className="h-10 w-10 text-primary" />
              <div>
                <CardTitle className="text-2xl">Deposit & Cancellation Policy</CardTitle>
                <CardDescription>
                  Important information regarding booking confirmations and cancellations.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                ALL DATE BOOKINGS DO REQUIRE A DEPOSIT. THE DEPOSIT IS ONLY TO BUILD TRUST WITH ME AND TO ENSURE THAT YOU DON'T PLAN ON BEING A NO SHOW - BECAUSE I WOULDN'T WANT TO PLAN TO WASTE MY TIME.
              </p>
              <div className="flex items-center p-4 bg-muted/50 rounded-md">
                <Percent className="h-6 w-6 mr-3 text-primary shrink-0" />
                <p className="text-foreground">
                  The required deposit is only <strong>30%</strong> of the date's total donation.
                  (e.g., If it's a $100 donation for the date + service, the deposit is $30).
                </p>
              </div>
              <Alert variant="default" className="border-accent/50">
                <Info className="h-5 w-5 text-accent" />
                <AlertTitle className="text-accent">Refund Policy for Deposits</AlertTitle>
                <AlertDescription className="text-muted-foreground">
                  If you end up needing to cancel for any reason, you WILL receive a FULL refund of your deposit, provided you:
                  <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>Contact me directly to inform me of the cancellation.</li>
                    <li>Do so at least <strong>1 Hour in advance</strong> of our scheduled meeting time.</li>
                  </ol>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card className="shadow-xl">
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
                    <TableRow key={rate.duration}>
                      <TableCell className="font-medium">{rate.duration}</TableCell>
                      <TableCell className="text-right">{rate.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="shadow-xl">
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
                    <TableRow key={item.service}>
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
        </div>
      </div>
    </MainLayout>
  );
}
