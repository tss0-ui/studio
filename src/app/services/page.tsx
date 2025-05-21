
import { MainLayout } from '@/components/layout/MainLayout';
import { ServiceCard } from '@/components/features/services/ServiceCard';
import { services } from '@/constants/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, ListChecks, BadgeDollarSign, Info } from 'lucide-react';
import Link from 'next/link';

const escortActivities = [
  "69 position",
  "Classic vaginal sex",
  "Cum in face",
  "Cum in mouth",
  "Cum on body",
  "Dirty talk",
  "Erotic massage",
  "Foot fetish",
  "Handjob",
  "Role-play",
  "Oral without condom"
];

const standardRates = [
  { duration: "Quick Visit (15 min)", price: "$80" },
  { duration: "1 Half Hour", price: "$150" },
  { duration: "1 Hour", price: "$300" },
];

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ListChecks className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            My Exquisite Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover a range of experiences I've meticulously crafted for your pleasure and privacy.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="space-y-12">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Check className="h-6 w-6 mr-3 text-primary" />
                Escort Service Activities
              </CardTitle>
              <CardDescription>
                During our encounters, I am open to exploring the following activities based on mutual comfort and desire:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-muted-foreground">
                {escortActivities.map((activity, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary shrink-0" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <BadgeDollarSign className="h-6 w-6 mr-3 text-primary" />
                My Rates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground">
                For detailed information on all my rates and policies, please visit the{' '}
                <Link href="/rates" className="text-primary hover:underline font-semibold">
                  My Rates page
                </Link>
                . You can also feel free to reach out directly for any specific inquiries. I offer competitive and flexible pricing depending on the type of service, duration, and event.
              </p>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Standard Escort Rates</h3>
                <p className="text-muted-foreground mb-4">Below I have listed the rates for my standard escort packages.</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[70%]">Duration</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {standardRates.map((rate) => (
                      <TableRow key={rate.duration}>
                        <TableCell className="font-medium">{rate.duration}</TableCell>
                        <TableCell className="text-right">{rate.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
               <div className="mt-6 p-4 border border-primary/20 rounded-lg bg-muted/30">
                 <div className="flex items-start">
                    <Info className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
                    <div>
                        <h4 className="font-semibold text-foreground">Please Note:</h4>
                        <p className="text-sm text-muted-foreground">
                        These standard rates are for companionship. Specific activities and experiences are discussed and agreed upon individually. Additional services listed on the <Link href="/rates" className="text-primary hover:underline">Rates page</Link> may have separate pricing.
                        </p>
                    </div>
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
