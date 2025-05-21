
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Bitcoin, ShieldCheck } from 'lucide-react'; // Bitcoin is a placeholder for general crypto

export default function PaymentsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <CreditCard className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Payment Information
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Secure and flexible payment options for your convenience.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <ShieldCheck className="h-10 w-10 text-green-500" />
              <div>
                <CardTitle className="text-2xl">Secure Transactions</CardTitle>
                <CardDescription>
                  All payments are processed securely to protect your financial information.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>I prioritize your security and privacy in all transactions. My systems use industry-standard encryption and security protocols.</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
               <div className="p-2 bg-primary/10 rounded-md"><CreditCard className="h-8 w-8 text-primary" /></div>
              <div>
                <CardTitle className="text-xl">Stripe Payments</CardTitle>
                <CardDescription>
                  I accept all major credit and debit cards through Stripe, a leading global payment processor.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>Stripe provides a seamless and secure way to pay using your preferred card. Your card details are never stored on my servers.</p>
              {/* In a real app, you might embed a Stripe payment element or link to a checkout page */}
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-md"><Bitcoin className="h-8 w-8 text-primary" /></div>
              <div>
                <CardTitle className="text-xl">Cryptocurrency Payments</CardTitle>
                <CardDescription>
                  For enhanced privacy, I also accept payments in select cryptocurrencies.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>I currently support payments in Bitcoin (BTC), Ethereum (ETH), and Monero (XMR). Please contact me directly if you wish to pay using cryptocurrency to receive my wallet details and instructions.</p>
              <p className="mt-2 text-sm text-muted-foreground">Note: Cryptocurrency transactions are final and non-refundable. Ensure you send the correct amount to the provided address.</p>
            </CardContent>
          </Card>
        </div>
        
        <p className="mt-12 text-center text-muted-foreground">
          For any payment-related queries, please don't hesitate to <Link href="/contact" className="text-primary hover:underline">contact me</Link>.
        </p>
      </div>
    </MainLayout>
  );
}
