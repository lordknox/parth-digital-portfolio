import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences, education } from "../data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-experience-title">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <Card
                  key={exp.id}
                  className="hover-elevate transition-all duration-300"
                  data-testid={`card-experience-${exp.id}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-1" data-testid={`text-exp-title-${exp.id}`}>
                          {exp.title}
                        </h4>
                        <p className="text-primary font-medium" data-testid={`text-exp-company-${exp.id}`}>
                          {exp.company}
                        </p>
                      </div>
                      {exp.current && (
                        <Badge variant="default" data-testid={`badge-current-${exp.id}`}>
                          Current
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3" data-testid={`text-exp-period-${exp.id}`}>
                      {exp.period}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <Card
                  key={edu.id}
                  className="hover-elevate transition-all duration-300"
                  data-testid={`card-education-${edu.id}`}
                >
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-1" data-testid={`text-edu-degree-${edu.id}`}>
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium mb-2" data-testid={`text-edu-institution-${edu.id}`}>
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3" data-testid={`text-edu-period-${edu.id}`}>
                      {edu.period}
                    </p>
                    {edu.description && (
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
