import { Footer, Header, NotFoundResult } from "@/components";

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-[1600px] w-full p-4">
      <Header />

      <NotFoundResult
        title="Page not found"
        description="This page could not be found, please try to navigate between pages
          through our links or actions."
      />

      <Footer />
    </div>
  );
}
