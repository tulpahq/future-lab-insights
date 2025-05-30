
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Beaker, Database, Zap, Users, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for reaching out!",
        description: "We'll be in touch to learn more about your needs.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Beaker className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-slate-800">FutureLab</span>
        </div>
        <Button variant="outline">Contact</Button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            The future of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> laboratory intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            We're building something extraordinary for research teams. 
            Help us shape the future of how science gets done.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <form onSubmit={handleEarlyAccess} className="flex gap-2 w-full max-w-md">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          <div className="animate-bounce">
            <ChevronDown className="h-6 w-6 text-slate-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Unified Intelligence</h3>
              <p className="text-slate-600">
                All your research data, protocols, and insights in one intelligent ecosystem.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-slate-600">
                Speed that matches the pace of discovery. No more waiting for your tools.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Team-First</h3>
              <p className="text-slate-600">
                Built for how research teams actually work together in the modern lab.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mystery Section */}
      <section className="px-6 py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's build this together</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Our team of former researchers and engineers is tackling problems that have 
            frustrated scientists for decades. We're looking for visionary research teams 
            to collaborate with us in creating something that will fundamentally change 
            how science gets done.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Partner With Us</h3>
              <p className="text-slate-300">
                Share your biggest challenges and help us understand what the future 
                of laboratory software should look like.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-3 text-purple-400">Shape the Future</h3>
              <p className="text-slate-300">
                Work directly with our team to design solutions that address your 
                specific research workflows and pain points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Beaker className="h-6 w-6 text-blue-600" />
            <span className="font-semibold text-slate-800">FutureLab Insights</span>
          </div>
          <p className="text-slate-600 text-sm">© 2024 FutureLab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
