import Header from "../../components/dashboard/header";
import { Card } from "@/components/ui/card";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-full flex-col md:overflow-hidden mb-12 p-12">
          <Header />
          <Card className="p-4 h-full mt-6">
            {children}
          </Card>
          
      </div>

    );
  }