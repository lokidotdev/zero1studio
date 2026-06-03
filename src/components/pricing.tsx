"use client";
import React, { useState } from "react";
import Link from "next/link";
import ContactForm from "./contact-form";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Plan = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  highlight?: boolean;
};

type PricingData = {
  [key: string]: Plan[];
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("web");

  const tabs = [
    { id: "web", label: "Web Development" },
    { id: "chatbot", label: "Chatbot Creation" },
  ];

  const pricingData: PricingData = {
    chatbot: [
      {
        name: "FAQ Bot",
        price: "$400",
        desc: "Automate common questions.",
        features: [
          "Scripted Responses",
          "Website Widget",
          "Basic Analytics",
          "Email Handoff",
        ],
      },
      {
        name: "AI Agent",
        price: "$1,200",
        desc: "Smart conversationalist.",
        features: [
          "LLM Integration",
          "Knowledge Base",
          "Sentiment Analysis",
          "Lead Qualification",
          "CRM Sync",
        ],
        highlight: true,
      },
      {
        name: "Custom Brain",
        price: "$4,000+",
        desc: "Full enterprise integration.",
        features: [
          "Custom Model Tuning",
          "API Actions",
          "Multi-channel",
          "Voice Capability",
          "SLA Support",
        ],
      },
    ],
  };

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 md:px-6 pricing-section">
      <div className="max-w-[90rem] mx-auto">
        {/* Tabs */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mb-8">
            LET'S TALK
          </h2>
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-white/5 rounded-3xl md:rounded-full backdrop-blur-sm border border-white/10 w-full md:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 md:flex-none px-4 md:px-6 py-3 md:py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-colors duration-300 focus-ring touch-manipulation ${activeTab === tab.id ? "text-black" : "text-white/60 hover:text-white"}`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === "web" ? (
              <motion.div
                key="web-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <ContactForm />
              </motion.div>
            ) : (
              <motion.div
                key="chatbot-pricing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden"
              >
                {pricingData["chatbot"]?.map((plan, i) => (
                  <div
                    key={i}
                    className={`bg-background p-6 md:p-12 flex flex-col relative group ${plan.highlight ? "bg-surface" : ""}`}
                  >
                    {plan.highlight && (
                      <div className="absolute top-0 right-0 p-4">
                        <div className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#D4FF00]"></div>
                      </div>
                    )}

                    <div className="mb-8 md:mb-12">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-white/50 text-xs md:text-sm mb-6 md:mb-8 h-8 md:h-10">
                        {plan.desc}
                      </p>
                      <div className="flex items-baseline">
                        <span className="font-display text-4xl md:text-6xl font-bold text-white tracking-tighter">
                          {plan.price}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12 flex-1">
                      {plan.features.map((feature, f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-xs md:text-sm text-white/70"
                        >
                          <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="https://calendly.com/lokeshyadv8177/30min"
                      target="_blank"
                      className={`block text-center w-full py-3 md:py-4 px-6 rounded-full border border-white/20 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 ${plan.highlight ? "bg-accent text-black border-accent" : "bg-transparent text-white hover:bg-white hover:text-black"}`}
                    >
                      Start Project
                    </Link>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
