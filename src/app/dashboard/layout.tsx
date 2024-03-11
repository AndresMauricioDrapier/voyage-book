import Header from "../../components/dashboard/header";
import { Card } from "@/components/ui/card";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen flex-col md:overflow-hidden">
        <div className="w-full flex-none">
          <Header />
          
          </div>
          <main className="flex-grow">
            <div className="py-4 px-12 h-full mx-auto">
              <Card className="h-full p-4">
                <h1>Dashboard</h1>
                {children}
              </Card>
             
            </div>
          </main>
      </div>
    );
  }