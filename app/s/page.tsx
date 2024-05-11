// ExploreSol/app/s/page.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import EmailSubscriptionForm from "@/components/EmailSubscriptionForm";

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(Array(6).fill(false));
  // Define fixed metadata values
  const title = "S - ExploreSol";
  const description =
    "Earn while Exploring the best and most interesting Solana Projects.";
  const ogImage =
    "https://res.cloudinary.com/difhad1rl/image/upload/v1712648696/ExploreSol-Banner-01_qgtopx.jpg";

  useEffect(() => {
    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      let selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector);
      if (!metaTag) {
        metaTag = document.createElement("meta");
        if (property) {
          metaTag.setAttribute("property", name);
        } else {
          metaTag.setAttribute("name", name);
        }
        document.getElementsByTagName("head")[0].appendChild(metaTag);
      }
      metaTag.setAttribute("content", content);
    };

    // Update the document title and meta tags
    document.title = title; // Update the title
    updateMetaTag("description", description);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:url", window.location.href, true);
    updateMetaTag("og:type", "website", true);
  }, []); // Empty dependency array to run only once on component mount

  // Toggle selection function
  const toggleSection = (index: number) => {
    setIsOpen(isOpen.map((open, i) => (i === index ? !open : false)));
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-6 text-purple-500">
        S WORDS COMMUNITY
      </h1>
      <p>Watchout for the S words community.</p>
      <EmailSubscriptionForm />
      <p>
        <Link href="/">Back to home</Link>
      </p>
    </div>
  );
}