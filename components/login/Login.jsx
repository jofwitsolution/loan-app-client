"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import images from "@constants/images";
import styles from "@styles/tailwind";
import { useState, useEffect } from "react";
import Link from "next/link";
import apiClient from "@services/api-client";

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    setLoading(true);
    try {
      const { data } = await apiClient.post("/auth/login", formData);
      console.log(data);
      router.replace("/user/dashboard");
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.msg) {
        setError(error.response.data.msg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-[600px] w-[1000px] mx-auto my-auto shadow-md">
      <div className="w-[45%] bg-color-secondary">
        <Image src={images.amico} alt="amico" className="mt-[100px]" />
      </div>
      <div className="w-[55%] px-[50px] py-[20px] flex items-center ">
        <div className="w-full">
          <h1 className="text-center mb-[40px] text-[28px] font-bold">
            Log In
          </h1>
          <div>
            {error && (
              <p className="text-center text-red-600 text-[13px] mb-4">
                {error}
              </p>
            )}
          </div>
          <form onSubmit={handleSubmit}>
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <button
                disabled={loading}
                type="submit"
                className={`${styles.buttonOne}`}
              >
                {loading ? "Loading..." : "Log In"}
              </button>
            </div>
            <div className="mt-3 text-center">
              Don't have an account?{" "}
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
