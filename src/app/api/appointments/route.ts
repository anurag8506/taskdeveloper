import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Appointment from '@/models/appointment';

export async function POST(request: Request) {
  try {
    const { name, contactNumber, date, time } = await request.json();

    // Basic validation
    if (!name || !contactNumber || !date || !time) {
      return NextResponse.json(
        { success: false, message: 'All fields (name, contactNumber, date, time) are required.' },
        { status: 400 }
      );
    }

    // Connect to DB
    await connectToDatabase();

    // Save appointment
    const newAppointment = new Appointment({
      name,
      contactNumber,
      date,
      time,
    });

    await newAppointment.save();

    return NextResponse.json(
      { success: true, message: 'Appointment booked successfully.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Booking Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to book appointment.' },
      { status: 500 }
    );
  }
}
