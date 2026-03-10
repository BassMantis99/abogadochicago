export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-label text-orange uppercase tracking-[0.1em]">
      {children}
    </p>
  );
}
