import Head from 'next/head';
import React from 'react';

export default function Layout() {
  return (
    <div className="relative">
      <Head>
        <title>Next.js + Tailwind CSS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
      </main>
    </div>
  );
}