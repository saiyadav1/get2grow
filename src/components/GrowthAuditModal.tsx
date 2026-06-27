"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GrowthAuditModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check if first visit
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("growth_audit_visited");
    if (!hasVisited) {
      setIsFirstVisit(true);
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("growth_audit_visited", "true");
  };

  const handleOpenFromButton = () => {
    setIsOpen(true);
    setStep(1);
  };

  const handleNextStep = () => {
    //setStep(2);
    setIsOpen(false);
    router.push("/contact-form");
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send form data to your API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: "growth_audit",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        sessionStorage.setItem("growth_audit_visited", "true");
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: "", businessName: "", phone: "", email: "" });
          setStep(1);
          setIsSubmitted(false);
          setIsOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl max-w-md w-full relative border border-slate-700 overflow-hidden">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Step 1: Headline */}
            {step === 1 && !isSubmitted && (
              <div className="p-8 text-center">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                    How Many Customers Are You Losing Every Month?
                  </h2>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Get a <span className="font-semibold text-primary">FREE Growth Audit</span> and discover the exact marketing gaps preventing your business from generating more leads, appointments, and sales.
                  </p>
                </div>

                <button
                  onClick={handleNextStep}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  YES, I WANT MY FREE AUDIT
                </button>

                {/* <p className="text-xs text-gray-400 mt-4">
                  Your audit is completely free. No credit card required.
                </p> */}
              </div>
            )}

            {/* Step 2: Form */}
            {step === 2 && !isSubmitted && (
              <div className="p-8">
                <button
                  onClick={handlePrevStep}
                  className="flex items-center text-gray-400 hover:text-white transition-colors mb-4"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back
                </button>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Step 2
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Enter your details below and we'll personally review your business and send you actionable recommendations.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="businessName"
                      placeholder="Business Name"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "SUBMITTING..." : "CLAIM MY AUDIT"}
                  </button>
                </form>
              </div>
            )}

            {/* Success Message */}
            {isSubmitted && (
              <div className="p-8 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Thank You!
                </h3>
                <p className="text-gray-300 mb-4">
                  We've received your information. Our team will personally review your business and send you actionable recommendations within 24 hours.
                </p>
                <p className="text-sm text-gray-400">
                  Check your email for updates.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Button - Show when modal is closed */}
      {!isOpen && (
        <button
          onClick={handleOpenFromButton}
          className="fixed bottom-8 right-8 z-30 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-bold py-3 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2 hover:gap-3 group"
        >
          <span className="text-lg">📊</span>
          <span className="hidden sm:inline text-sm whitespace-nowrap">Get Free Audit</span>
          <span className="animate-pulse">→</span>
        </button>
      )}
    </>
  );
}
