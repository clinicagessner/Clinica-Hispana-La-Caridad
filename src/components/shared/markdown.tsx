import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "@/i18n/routing";

/**
 * Renderiza markdown de contenido (servicios y bloques largos).
 * Convive con el parser antiguo de `**Título**`: la página elige uno u otro
 * según el texto traiga `## ` o no, para poder migrar servicio a servicio.
 */
export function Markdown({ content }: { content: string }) {
  return (
    <div className="space-y-5">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-xl md:text-2xl font-heading font-bold text-slate-dark mt-8 mb-3 first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-heading font-bold text-slate-dark mt-6 mb-2">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">{children}</p>
          ),
          ul: ({ children }) => <ul className="space-y-2 my-3">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal ml-5 space-y-2 my-3">{children}</ol>,
          li: ({ children }) => (
            <li className="flex items-start gap-2.5 text-slate-600 text-sm md:text-base">
              <span className="size-1.5 rounded-full bg-blue-primary shrink-0 mt-2" />
              <span>{children}</span>
            </li>
          ),
          strong: ({ children }) => <strong className="font-semibold text-slate-dark">{children}</strong>,
          a: ({ href, children }) => {
            const url = href ?? "#";
            return url.startsWith("/") ? (
              <Link href={url} className="text-blue-primary font-medium hover:underline">
                {children}
              </Link>
            ) : (
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-primary font-medium hover:underline">
                {children}
              </a>
            );
          },
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b border-slate-200 bg-cyan-bg px-3 py-2 text-left font-semibold text-slate-dark">{children}</th>
          ),
          td: ({ children }) => <td className="border-b border-slate-100 px-3 py-2 text-slate-600">{children}</td>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
