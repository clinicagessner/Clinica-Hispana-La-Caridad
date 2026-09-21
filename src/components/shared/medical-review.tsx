import { getLocale, getTranslations } from "next-intl/server";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";

// Caja de autoría y revisión (E-E-A-T): quién responde por el contenido y cuándo
// se revisó, con <time> legible por máquinas. Sin médico nombrado — el cliente
// confirmó que no hay especialistas titulados, así que revisa el equipo de la
// clínica y el JSON-LD apunta al @id de la clínica, no a una persona inventada.
export async function MedicalReview({
  published,
  updated,
}: {
  published?: string;
  updated: string;
}) {
  const locale = await getLocale();
  const t = await getTranslations("MedicalReview");

  const format = (date: string) =>
    new Date(date).toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <aside
      aria-label={t("reviewedBy")}
      className="mt-10 flex gap-4 rounded-2xl border border-blue-primary/10 bg-cyan-bg p-5 text-sm text-slate-primary"
    >
      <ShieldCheck
        className="mt-0.5 h-5 w-5 shrink-0 text-blue-primary"
        weight="fill"
        aria-hidden
      />
      <div className="space-y-1">
        <p className="font-semibold text-slate-dark">{t("reviewedBy")}</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          {published && (
            <span>
              {t("published")}{" "}
              <time dateTime={published}>{format(published)}</time>
            </span>
          )}
          <span>
            {t("updated")} <time dateTime={updated}>{format(updated)}</time>
          </span>
        </p>
        <p className="text-slate-muted">{t("disclaimer")}</p>
      </div>
    </aside>
  );
}
