import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
