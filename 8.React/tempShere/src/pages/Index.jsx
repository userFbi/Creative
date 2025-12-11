import Header from "@/components/Header.jsx";
import UploadCard from "@/components/UploadCard.jsx";
import HowItWorks from "@/components/HowItWorks.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-8 sm:py-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Share files{" "}
              <span className="bg-gradient-to-r from-navy to-purple bg-clip-text text-transparent">
                temporarily
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Upload photos, videos, or documents and get a shareable link that expires automatically.
            </p>
          </div>

          <UploadCard />
        </div>

        <HowItWorks />
      </main>

      <footer className="py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2024 TempShare. Files are stored securely and deleted after expiry.
        </p>
      </footer>
    </div>
  );
};

export default Index;
