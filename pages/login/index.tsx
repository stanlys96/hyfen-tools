import Image from 'next/image';
import Link from 'next/link';
import React, { ReactHTML, useState } from 'react';
import { LogoApp } from '../../src/components/icons';
import { FormInput } from '../../src/components/molecules';

export default function Index() {
  const [form, setform] = useState({
    email: '',
    password: '',
  });

  const handlerSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative flex bg-app-background min-h-screen max-h-full w-full">
      {/* Form Login */}
      <div className="relative w-2/5 flex flex-col justify-center px-[104px] py-24">
        {/* Container Login */}

        <div className="relative">
          {/* Logo */}
          <div className="relative text-white text-left wf">
            <LogoApp />
          </div>

          {/* Heading Login */}
          <div className="relative mt-[32px]">
            <h1 className="text-white text-heading1 font-semibold">Log in</h1>
            <p className="text-white/50 text-heading5 text-app-disabled font-light mt-[8px]">
              Sign to stay connected
            </p>
          </div>

          {/* Section Form */}
          <form
            onSubmit={handlerSubmit}
            className="relative flex flex-col mt-[10px]">
            {/* Form  */}
            {Object.entries(form).map(([key, value]) => (
              <FormInput
                key={key}
                classRoot="mt-[20px]"
                label={key === 'email' ? 'Email Address' : 'Password'}
                placeholder={key === 'email' ? 'Email Address' : 'Password'}
                type={key}
                name={key}
                value={value}
                required={true}
                onChange={(e) => setform({ ...form, [key]: e.target.value })}
                typeForm={key}
              />
            ))}

            {/* Link Forgot Password */}
            <Link
              href="/forgot"
              className="mt-[12px] text-app-disabled text-heading5 font-light tracking-wide">
              Forgot Password?
            </Link>

            {/* Button Login */}
            <button
              className={[
                'relative w-full transition-all duration-300 mt-[30px] py-[14px] rounded-full text-white',
                form.email && form.password
                  ? 'bg-app-primary hover:bg-app-primary/80'
                  : 'bg-app-disabled cursor-not-allowed',
              ].join(' ')}>
              Login
            </button>

            {/* Link Register */}
            <Link
              href="/register"
              className="text-app-disabled font-light text-center mt-[16px]">
              Don't have an account?{' '}
              <span className="text-app-primary font-medium">Register</span>
            </Link>
          </form>

          {/* Container Language */}
          <div className="relative mt-12 text-label flex divide-x-2 divide-app-disabled/30 tracking-wide font-light">
            <Link href="/" className="px-2 text-white">
              English
            </Link>
            <Link href="/" className="text-app-disabled px-2">
              Bahasa Indonesia
            </Link>
          </div>
        </div>
      </div>
      {/* Image Background */}
      <div className="relative box-border grid grid-cols-1 m-0 bg-app-background2 w-3/5">
        {/* Text Heading  */}
        <div className="relative z-10 font-medium tracking-wide flex flex-col justify-end px-24 items-start">
          <h2 className="text-heading4 font-light text-white">
            Welcome to Hyfen Tools
          </h2>
          <h1 className="text-heading1 text-white mt-[8px] w-96">
            Manage your Guild with less time and effort.
          </h1>
        </div>

        <div className="relative w-full flex justify-end items-end">
          <div className="relative h-[580px]  2xl:h-[680px] 2xl:w-[90%] w-[80%]">
            <Image
              alt="img-bg"
              className="object-cover"
              src="/images/login/Dark.png"
              sizes="50vw"
              layout="fill"
              // height={539}
              // width={811}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
