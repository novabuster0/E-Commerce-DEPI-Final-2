import mapImg from "/src/assets/Home/map.png";
const atelier = {
    label: "FLAGSHIP SPACES",
    title: "EXPERIENCE THE ATELIER IN PERSON",
    text: "Visit our experiential retail concept spaces in Tokyo, Berlin, and New York. Touch the fabrics, explore customized fit consultations, and collect physical release access cards.",
};

const locations = [
    { id: 1, name: "TOKYO // SHIBUYA DUPLEX", status: "OPEN TODAY" },
    { id: 2, name: "BERLIN // MITTE LAB", status: "OPEN TODAY" },
    { id: 3, name: "NYC // SOHO VAULT", status: "OPEN TODAY" },
];

export default function AtelierLocations() {

    function displayLocations() {
        const result = [];

        for (let i = 0; i < locations.length; i++) {
            const l = locations[i];

            result.push(
                <div
                    key={l.id}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[12px] font-bold tracking-wide"
                >
                    <span className="text-slate-700">{l.name}</span>
                    <span className="text-blue-600">{l.status}</span>
                </div>
            );
        }

        return result;
    }
    return (
        <section className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-10">
            <div className="grid grid-cols-2 gap-6 rounded-2xl border border-slate-200 bg-white p-6 max-md:grid-cols-1">
                <div className="flex flex-col justify-center ">
                    <p className="font-mono text-[12px] font-extrabold tracking-[0.16em] text-blue-600">
                        {atelier.label}
                    </p>
                    <h2 className="mt-[19.5px] text-[36px] font-extrabold leading-[1.1] tracking-[-0.035em] text-slate-900">
                        {atelier.title}
                    </h2>
                    <p className="mt-3 max-w-[460px] text-[15px] leading-relaxed text-slate-500">
                        {atelier.text}
                    </p>

                    <div className="mt-6 flex flex-col gap-2">
                        {displayLocations()}
                    </div>
                </div>

  
                <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-slate-200 bg-slate-100 ">
                        <img
                        src={mapImg}
                        alt="World map showing our flagship locations"
                        className="h-full w-full object-contain opacity-80"
                    />
                </div>
            </div>
        </section>
    );
}
