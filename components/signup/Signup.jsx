"use client";

import Image from "next/image";
import images from "@constants/images";
import styles from "@styles/tailwind";
import { useState, useEffect } from "react";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="flex h-[600px] w-[1000px] mx-auto my-auto shadow-md">
      <div className="w-[45%] bg-color-secondary">
        <Image src={images.amico} alt="amico" className="mt-[100px]" />
      </div>
      <div className="w-[55%] px-[50px] py-[20px]">
        <h1 className="text-center mb-[40px] text-[28px] font-bold">Sign Up</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="firstName" className="inline-block mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Adetula"
              id="firstName"
              className={`${styles.inputOne}`}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="inline-block mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Adewale"
              id="lastName"
              className={`${styles.inputOne}`}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="inline-block mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="08098765678"
              id="phone"
              className={`${styles.inputOne}`}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="inline-block mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="adetula@gmail.com"
              id="email"
              className={`${styles.inputOne}`}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="inline-block mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="123456"
              id="password"
              className={`${styles.inputOne}`}
            />
          </div>

          <div className="mt-4">
            <button className={`${styles.buttonOne}`}>Sign Up</button>
          </div>
          <div className="mt-3 text-center">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
