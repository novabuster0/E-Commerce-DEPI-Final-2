import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductSpecs from "./components/ProductSpecs";
import CuratedPairings from "./components/CuratedPairings";

export default function ProductDetailsPage() {
    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
            <main className="mx-auto grid w-full max-w-[1440px] grid-cols-[minmax(0,600px)_minmax(340px,1fr)] gap-10 px-5 py-12 md:px-10 max-md:grid-cols-1">
                <ProductGallery />
                <ProductInfo />
            </main>
            <ProductSpecs />
            <CuratedPairings />
        </div>
    );
}