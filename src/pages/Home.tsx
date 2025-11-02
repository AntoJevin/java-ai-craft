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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              {/* Profile Image */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-primary/20">
                    <img 
                      src="/placeholder.svg" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 pointer-events-none" />
                </div>
              </div>
              
              {/* Name */}
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                Your Name
              </h1>
              
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Full Stack Engineer &
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  AI Specialist
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
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
                  <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
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
                className="p-3 rounded-full bg-card border border-primary/30 hover:bg-primary/20 hover:border-primary transition-all"
              >
                <Github className="h-6 w-6 text-foreground" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-primary/30 hover:bg-primary/20 hover:border-primary transition-all"
              >
                <Linkedin className="h-6 w-6 text-foreground" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 rounded-full bg-card border border-primary/30 hover:bg-primary/20 hover:border-primary transition-all"
              >
                <Mail className="h-6 w-6 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-glow" />
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
                className="p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 bg-card border-primary/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <skill.icon className="h-7 w-7 text-primary-foreground" />
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
