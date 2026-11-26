import SectionCard, { Field, SelectField } from "./SectionCard";

export default function DispatchDestination() {
    return (
        <SectionCard number="02" title="DISPATCH DESTINATION" aside="GLOBAL TACTICAL CARGO">
            <div className="space-y-3">
                <SelectField label="TERRITORY / HUB" value="UNITED STATES (CONUS & APO HUBS)" options={["UNITED STATES (CONUS & APO HUBS)"]} />
                <div className="grid grid-cols-2 gap-3">
                    <Field label="FIRST NAME" value="Alexander" />
                    <Field label="LAST NAME" value="Vance" />
                </div>
                <Field label="STREET ADDRESS / RESIDENCE" value="744 S San Pedro St" />
                <Field label="APT / SUITE / SECURITY GATE CODE (OPTIONAL)" value="Floor 4, Studio 408" />
                <div className="grid grid-cols-[1.2fr_1.1fr_1fr] gap-3 max-md:grid-cols-1">
                    <Field label="METRO / CITY" value="Los Angeles" />
                    <SelectField label="STATE / PROVINCE" value="California (CA)" options={["California (CA)"]} />
                    <Field label="POSTAL CODE" value="90014" />
                </div>
                <Field label="SMS LOGISTICS DISPATCH LINE" value="+1 (US)     213-555-0194" />
                <p className="text-[8px] text-slate-400">Direct courier telemetry updates transmitted via encrypted SMS prior to handoff.</p>
            </div>
        </SectionCard>
    );
}
