"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectDetails: string;
};

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Something went wrong. Try again or email us directly.",
        );
      }

      setSubmitStatus("success");
      reset();
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Try again or email us directly.";
      setErrorMessage(message);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full bg-black/20 border rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus-ring transition-[border-color,box-shadow] duration-200 ${
      hasError ? "border-red-500" : "border-white/10"
    }`;

  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
      <div className="mb-8 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 text-balance">
          Start Your Project
        </h2>
        <p className="text-white/60 text-sm md:text-base">
          Tell us about your vision, and we&apos;ll help you build it.
        </p>
      </div>

      <div aria-live="polite" aria-atomic="true">
        {submitStatus === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
            role="status"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-accent" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
            <p className="text-white/60 mb-6">
              We received your project details and will get back to you shortly.
            </p>
            <button
              type="button"
              onClick={() => setSubmitStatus("idle")}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm transition-colors focus-ring"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white/80 ml-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  spellCheck={false}
                  {...register("name", { required: "Name is required" })}
                  className={inputClass(!!errors.name)}
                  placeholder="Jane Doe…"
                />
                {errors.name ? (
                  <span className="text-xs text-red-500 ml-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" aria-hidden="true" />
                    {errors.name.message}
                  </span>
                ) : null}
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-white/80 ml-1">
                  Company{" "}
                  <span className="text-white/40 font-normal">(Optional)</span>
                </label>
                <input
                  id="company"
                  type="text"
                  autoComplete="organization"
                  {...register("company")}
                  className={inputClass(false)}
                  placeholder="Acme Inc.…"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/80 ml-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  spellCheck={false}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Enter a valid email address",
                    },
                  })}
                  className={inputClass(!!errors.email)}
                  placeholder="jane@example.com…"
                />
                {errors.email ? (
                  <span className="text-xs text-red-500 ml-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" aria-hidden="true" />
                    {errors.email.message}
                  </span>
                ) : null}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-white/80 ml-1">
                  Phone{" "}
                  <span className="text-white/40 font-normal">(Optional)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  {...register("phone")}
                  className={inputClass(false)}
                  placeholder="+1 (555) 000-0000…"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="projectDetails"
                className="text-sm font-medium text-white/80 ml-1"
              >
                Tell Us More About Your Project
              </label>
              <textarea
                id="projectDetails"
                rows={4}
                autoComplete="off"
                {...register("projectDetails", {
                  required: "Please tell us a bit about your project",
                })}
                className={`${inputClass(!!errors.projectDetails)} resize-none`}
                placeholder="We need a custom web application for…"
              />
              {errors.projectDetails ? (
                <span className="text-xs text-red-500 ml-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" aria-hidden="true" />
                  {errors.projectDetails.message}
                </span>
              ) : null}
            </div>

            {errorMessage ? (
              <div
                role="alert"
                className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                {errorMessage}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="w-full bg-accent text-black font-bold uppercase tracking-wider py-4 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2 focus-ring touch-manipulation"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                "Submit Inquiry"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
