
import { MainLayout } from '@/components/layout/MainLayout';
import { BookingForm } from '@/components/features/booking/BookingForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Lock, ShieldCheck, CreditCard, Coins } from 'lucide-react';
import Link from 'next/link';

export default function BookingPage() {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <CalendarDays className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Book Your Experience
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Schedule your appointment with ease. I ensure utmost privacy and discretion.
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Appointment Details</CardTitle>
            <CardDescription>
              Please fill out the form below to request your appointment. 
              I will contact you to confirm availability.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BookingForm />
          </CardContent>
        </Card>
        
        <div className="mt-12 text-center text-sm text-muted-foreground flex items-center justify-center">
          <Lock className="h-4 w-4 mr-2" />
          Your information is kept confidential and secure.
        </div>

        <Card className="shadow-xl mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Payment Information & Policies</CardTitle>
            <CardDescription>
              Secure and flexible payment options for your convenience.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start p-4 rounded-lg border bg-card-foreground/5">
              <ShieldCheck className="h-8 w-8 text-green-500 mr-4 mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Secure Transactions</h3>
                <p className="text-muted-foreground">
                  I prioritize your security and privacy in all transactions. My systems use industry-standard encryption and security protocols.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg border bg-card-foreground/5">
              <CreditCard className="h-8 w-8 text-primary mr-4 mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Stripe Payments</h3>
                <p className="text-muted-foreground">
                  I accept all major credit and debit cards through Stripe, a leading global payment processor. Stripe provides a seamless and secure way to pay using your preferred card. Your card details are never stored on my servers.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg border bg-card-foreground/5">
              <Coins className="h-8 w-8 text-primary mr-4 mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Cryptocurrency Payments</h3>
                <p className="text-muted-foreground">
                  For enhanced privacy, I also accept payments in select cryptocurrencies. I currently support payments in Bitcoin (BTC), Ethereum (ETH), and Monero (XMR). Please contact me directly if you wish to pay using cryptocurrency to receive my wallet details and instructions.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Note: Cryptocurrency transactions are final and non-refundable. Ensure you send the correct amount to the provided address.
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              For any payment-related queries, please don't hesitate to <Link href="/contact" className="text-primary hover:underline">contact me</Link>.
            </p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
