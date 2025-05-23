
import { MainLayout } from '@/components/layout/MainLayout';
import { ContactForm } from '@/components/features/contact/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have questions or special requests? I'm here to assist you. Reach out through the form below or via my contact details.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              <CardDescription>
                Fill out the form and I'll respond as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">My Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Monday - Friday:</strong> 11:00 AM - 2:00 AM
                </p>
                <p className="text-muted-foreground">
                  <strong>Saturday:</strong> Noon - Midnight
                </p>
                <p className="text-muted-foreground">
                  <strong>Sunday:</strong> 1:00 PM - Midnight
                </p>
                <p className="mt-2 text-muted-foreground">
                  <strong>All major holidays:</strong> Must book 2 days in advance
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Bookings outside these hours may be possible. Please inquire.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Other Contact Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-3 mt-1 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <Link href="mailto:contact@nikkibynight.example.com" className="text-muted-foreground hover:text-primary break-all">
                      contact@nikkibynight.com
                    </Link>
                  </div>
                </div>
                 <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 mt-1 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">
                      I operate in select upscale locations throughout Pinellas County, FL. Specifics are provided upon confirmed booking for your privacy and my discretion.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
