
import { MainLayout } from '@/components/layout/MainLayout';
import { BookingForm } from '@/components/features/booking/BookingForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Lock } from 'lucide-react';

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
            Schedule your appointment with ease. We ensure utmost privacy and discretion.
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Appointment Details</CardTitle>
            <CardDescription>
              Please fill out the form below to request your appointment. 
              Our team will contact you to confirm availability.
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
      </div>
    </MainLayout>
  );
}
