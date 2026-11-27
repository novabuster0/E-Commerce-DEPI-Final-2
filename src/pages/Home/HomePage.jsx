import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import SaleBanner from "./components/SaleBanner";
import CommunityEssentials from "./components/CommunityEssentials";
import Manifesto from "./components/Manifesto";
import AtelierLocations from "./components/AtelierLocations";

// Static layout only: no state, no handlers. Navbar/Footer come from Layout.
export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
            <Hero />
            <CategoryGrid />
            <SaleBanner />
            <CommunityEssentials />
            <Manifesto />
            <AtelierLocations />
        </div>
    );
}
