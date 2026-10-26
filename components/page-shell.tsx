import Navbar from "./navbar";
import Footer from "./footer";
import AmbientBackground from "./ambient-background";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <AmbientBackground />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
