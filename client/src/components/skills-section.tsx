import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "../data/portfolio";
import { Code2, Server, Wrench } from "lucide-react";

export function SkillsSection() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend": return <Code2 className="h-5 w-5" />;
      case "Backend": return <Server className="h-5 w-5" />;
      case "Tools": return <Wrench className="h-5 w-5" />;
      default: return null;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-skills-title">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <Card
              key={category}
              className="p-8 hover-elevate transition-all duration-300"
              data-testid={`card-skill-category-${category.toLowerCase()}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="font-mono text-sm"
                    data-testid={`badge-skill-${skill.name.toLowerCase().replace(/\./g, '').replace(/\//g, '-')}`}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
