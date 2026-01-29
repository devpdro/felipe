import { Banner, Price, FAQ, Footer, Lumen, Proof, Comparison, Exclusive, Manifesto, HowItWorks } from "@/app/components";


export default function Home() {
  return (
    <div className="flex flex-col w-full relative bg-[#0a0a0a]" style={{
      backgroundColor: '#0a0a0a',
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)',
      backgroundSize: '16px 16px',
      backgroundPosition: '0 0'
    }}>
      <div className="fixed inset-0 z-0 bg-[#0a0a0a]" style={{
        backgroundColor: '#0a0a0a',
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)',
        backgroundSize: '16px 16px',
        backgroundPosition: '0 0'
      }}>
      </div>
      <div className="relative w-full z-10" style={{ marginTop: "0", marginBottom: "4rem" }}>
        <Banner />
      </div>
      <div className="relative w-full z-10" style={{ marginTop: "2rem", marginBottom: "4rem" }}>
        <Manifesto />
      </div>
      <div className="relative w-full z-10" style={{ marginTop: "2rem", marginBottom: "4rem" }}>
        <HowItWorks />
      </div>
      <div className="relative w-full z-10" style={{ marginTop: "2rem", marginBottom: "4rem" }}>
        <Exclusive />
      </div>
      <div className="relative w-full z-10" style={{ marginTop: "2rem", marginBottom: "4rem" }}>
        <Comparison />
      </div>
      <div className="relative w-full z-10" style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>
        <Proof />
      </div>
      <div className="relative w-full z-10" style={{ marginTop: "0", marginBottom: "0" }}>
        <Lumen />
      </div>
      <div className="relative w-full z-10" style={{ marginTop: "0.5rem", marginBottom: "5.5rem" }}>
        <Price />
      </div>
      <div className="relative w-full z-10" style={{ marginTop: "3.5rem", marginBottom: "4rem" }}>
        <FAQ />
      </div>
      <div className="relative w-full z-10">
        <Footer />
      </div>
    </div>
  );
}