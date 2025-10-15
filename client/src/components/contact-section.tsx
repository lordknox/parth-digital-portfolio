import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { socialLinks } from "../data/portfolio";

export function ContactSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github": return <Github className="h-6 w-6" />;
      case "linkedin": return <Linkedin className="h-6 w-6" />;
      case "instagram": return <Instagram className="h-6 w-6" />;
      case "mail": return <Mail className="h-6 w-6" />;
      default: return null;
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-contact-title">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out through any of these platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {socialLinks.map((link) => (
            <Card
              key={link.platform}
              className="hover-elevate transition-all duration-300"
              data-testid={`card-contact-${link.platform.toLowerCase()}`}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-6 hover-elevate active-elevate-2 rounded-md"
                data-testid={`link-contact-${link.platform.toLowerCase()}`}
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {getIcon(link.icon)}
                </div>
                <span className="font-medium">{link.platform}</span>
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 pt-16 border-t">
          <p className="text-muted-foreground">
            © 2024 Alex Morgan. Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
