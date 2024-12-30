import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import LandingPage from "@/components/LandingPage";



export default function Home() {
  return (
    <div className="bg-[#0d0f2b]">
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <LandingPage />
      </main>
      <Footer />
    </div>
    </div>
  );
}
