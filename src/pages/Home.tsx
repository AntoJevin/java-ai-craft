import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Database, Brain, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const skills = [
    { icon: Code2, title: "Full Stack Development", description: "Java, Spring Boot, React, TypeScript" },
    { icon: Database, title: "Backend Architecture", description: "Microservices, REST APIs, PostgreSQL" },
    { icon: Brain, title: "AI & LLM Engineering", description: "Machine Learning, NLP, Model Integration" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,200,230,0.2),transparent)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
                Full Stack Engineer &
                <br />
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  AI Specialist
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Building scalable applications with Java, Spring Boot, and cutting-edge AI/LLM technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/projects">
                  <Button size="lg" variant="secondary" className="group">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center mt-12 animate-fade-in">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Github className="h-6 w-6 text-primary-foreground" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-primary-foreground" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="h-6 w-6 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-glow" />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Core Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specializing in enterprise-grade solutions and innovative AI implementations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6">
                  <skill.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              I'm always interested in new opportunities and collaborations
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:opacity-90">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
