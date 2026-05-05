import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Get 2 Grow Agency",
  description: "Privacy Policy for Get 2 Grow Agency.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-24 font-sans selection:bg-primary/30">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-12 text-sm uppercase tracking-widest font-bold">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-8 text-white/70">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to Get 2 Grow Agency. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. The Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="mt-4 font-bold text-primary">get2grow@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
