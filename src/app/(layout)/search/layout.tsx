import { Footer, Header } from "@/components";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-testid="search-layout-wrapper"
      className="mx-auto max-w-[1600px] w-full p-4"
    >
      <Header />

      <main className="my-6">{children}</main>

      <Footer />
    </div>
  );
}
