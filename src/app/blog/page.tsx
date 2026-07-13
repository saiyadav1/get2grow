import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogHubContent from "./BlogHubContent";

export const metadata = {
  title: "G2G Growth Hub | Insights & Marketing Strategies",
  description: "Stay ahead with the latest digital marketing trends, strategies, and growth guides curated by the Get 2 Grow team.",
};

export default function BlogHub() {
  return (
    <>
      <Navbar />
      <BlogHubContent />
      <Footer />
    </>
  );
}
