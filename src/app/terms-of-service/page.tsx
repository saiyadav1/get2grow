import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Get 2 Grow Agency",
  description: "Terms of Service for Get 2 Grow Agency.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-24 font-sans selection:bg-primary/30">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-12 text-sm uppercase tracking-widest font-bold">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none space-y-8 text-white/70">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Get 2 Grow Agency's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on Get 2 Grow Agency's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
            <p>
              The materials on Get 2 Grow Agency's website are provided on an 'as is' basis. Get 2 Grow Agency makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
            <p>
              In no event shall Get 2 Grow Agency or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Get 2 Grow Agency's website, even if Get 2 Grow Agency or a Get 2 Grow Agency authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Revisions and Errata</h2>
            <p>
              The materials appearing on Get 2 Grow Agency's website could include technical, typographical, or photographic errors. Get 2 Grow Agency does not warrant that any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on our website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Terms of Service, do not hesitate to contact us at:
            </p>
            <p className="mt-4 font-bold text-primary">get2grow@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
