'use client';

import { useSearchParams } from 'next/navigation';

export default function BookingClient() {
  const searchParams = useSearchParams();
  const date = searchParams.get('date');
  const time = searchParams.get('time');

  return (
    <div className="text-white text-center">
      <h1 className="text-3xl font-bold">Booking Confirmation</h1>
      <p className="mt-2">Selected Date: {date}</p>
      <p>Selected Time: {time}</p>
    </div>
  );
}
