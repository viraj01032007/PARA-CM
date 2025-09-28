"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { IndianRupee } from 'lucide-react';

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM'
];

interface BookingCalendarProps {
    rate: number;
}

export default function BookingCalendar({ rate }: BookingCalendarProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const { toast } = useToast();

  const handleBooking = () => {
    if (date && selectedTime) {
      toast({
        title: "Appointment Booked!",
        description: `Your appointment is confirmed for ${date.toLocaleDateString()} at ${selectedTime}.`,
        variant: 'default',
      });
      setSelectedTime(null);
    } else {
       toast({
        title: "Incomplete Selection",
        description: "Please select a date and time slot.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Book an Appointment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border p-0"
          disabled={(day) => day < new Date(new Date().setDate(new Date().getDate() - 1))}
        />
        {date && (
            <div>
                <h4 className="font-semibold mb-2 text-sm">Select a time</h4>
                <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map(time => (
                        <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            onClick={() => setSelectedTime(time)}
                            className="text-xs"
                        >
                            {time}
                        </Button>
                    ))}
                </div>
            </div>
        )}
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-3">
        <div className="flex justify-between items-center font-bold">
            <span>Total:</span>
            <span className='flex items-center'><IndianRupee className="w-5 h-5 mr-1" />{rate}/hr</span>
        </div>
        <Button onClick={handleBooking} disabled={!date || !selectedTime} className="w-full">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
