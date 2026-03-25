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
    <section id={id} className={`py-8 sm:py-10 ${className}`}>
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
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-6`}>
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
