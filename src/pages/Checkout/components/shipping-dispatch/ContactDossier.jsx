import SectionCard, { Field } from "./SectionCard";

export default function ContactDossier() {
    return (
        <SectionCard number="01" title="CONTACT DOSSIER" aside={<span className="text-blue-600">HAVE A VAULT ACCOUNT? LOG IN</span>}>
            <Field label="COMMUNICATION ADDRESS" value="alexander.vance@nocturne.studio" />
            <label className="mt-3 flex items-start gap-2 text-[10px] leading-relaxed text-slate-500">
                <input type="checkbox" checked readOnly className="mt-0.5 h-4 w-4 accent-blue-600" />
                <span>Transcribe this terminal for priority nocturnal access keys, secret lookbook drops, and unlisted archive drops.</span>
            </label>
        </SectionCard>
    );
}
