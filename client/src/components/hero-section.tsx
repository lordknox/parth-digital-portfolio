import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileImg from "@assets/stock_images/professional_headsho_f05303f1.jpg";
import { socialLinks } from "../data/portfolio";

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github": return <Github className="h-5 w-5" />;
      case "linkedin": return <Linkedin className="h-5 w-5" />;
      case "instagram": return <Instagram className="h-5 w-5" />;
      case "mail": return <Mail className="h-5 w-5" />;
      default: return null;
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <Avatar className="h-40 w-40 border-4 border-primary/20 shadow-xl">
            <AvatarImage src={profileImg} alt="Parth Parekh" />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight" data-testid="text-hero-name">
              Parth Parekh
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Full Stack Developer
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting beautiful, performant web applications with modern technologies. 
              Specialized in React, Node.js, and cloud architecture. Passionate about 
              creating exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.platform}
                variant="outline"
                size="icon"
                asChild
                data-testid={`link-social-${link.platform.toLowerCase()}`}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                >
                  {getIcon(link.icon)}
                </a>
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              data-testid="button-view-projects"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              data-testid="button-download-resume"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <button
            onClick={scrollToProjects}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hover-elevate active-elevate-2 p-2 rounded-full"
            aria-label="Scroll down"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
