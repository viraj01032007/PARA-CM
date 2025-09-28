export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      {children}
    </div>
  );
}
