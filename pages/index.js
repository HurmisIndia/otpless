import Box from "@/components/box";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.otpless = (otplessUser) => alert(JSON.stringify(otplessUser));
  }, []);
  return (
    <>
        <Script async src="https://otpless.com/auth.js" />
      <h1>OTPless intergration</h1>
    </>
  );
}
