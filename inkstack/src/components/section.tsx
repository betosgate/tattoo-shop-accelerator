import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-12 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
}: {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-8`}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-electric bg-electric/10 border border-electric/20 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-ink-300 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
