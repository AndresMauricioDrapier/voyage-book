import Header from "../../components/dashboard/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen flex-col md:overflow-hidden">
        <div className="w-full flex-none">
          <Header />
          
          </div>
          <main className="flex-grow">
            <div className="py-4 px-12 h-full mx-auto">
              {children}
            </div>
          </main>
      </div>
    );
  }