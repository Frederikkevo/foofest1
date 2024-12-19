"use client";

import React from "react";
import BookingFlow from "../../components/BookingFlow";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50">
      <Header/>
      <main className="flex flex-col items-center p-8">
        <BookingFlow />
      </main>
      <Footer/>
    </div>
  );
}
