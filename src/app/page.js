"use client";

import React from 'react';
import Head from 'next/head';
import BookingFlow from '../../components/BookingFlow';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Foofest Booking System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome to Foofest!</h1>
        <BookingFlow />
      </main>
    </div>
  );
}

