import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Microservices Platform",
      description: "Architected and developed a scalable microservices ecosystem using Spring Boot, handling 10M+ daily transactions with 99.9% uptime.",
      tags: ["Java", "Spring Boot", "Kubernetes", "PostgreSQL", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "AI-Powered Code Review Assistant",
      description: "Built an LLM-based code review tool that analyzes pull requests, suggests improvements, and detects potential bugs using advanced NLP models.",
      tags: ["Python", "LangChain", "OpenAI", "React", "FastAPI"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Developed a high-performance analytics platform processing streaming data with Apache Kafka, featuring interactive visualizations and predictive insights.",
      tags: ["Java", "Kafka", "Spark", "React", "D3.js"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Intelligent Document Processing System",
      description: "Created an AI system for automated document classification, entity extraction, and summarization using transformer models and OCR technology.",
      tags: ["Python", "Transformers", "TensorFlow", "Spring Boot", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Cloud-Native E-Commerce Platform",
      description: "Built a full-stack e-commerce solution with microservices architecture, featuring payment integration, inventory management, and AI recommendations.",
      tags: ["Java", "React", "AWS", "Docker", "MySQL"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Conversational AI Chatbot",
      description: "Developed an enterprise chatbot using LLM fine-tuning and RAG architecture, integrated with company knowledge bases for accurate responses.",
      tags: ["Python", "LangChain", "Pinecone", "FastAPI", "React"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">Featured Projects</h1>
          <p className="text-xl text-muted-foreground">
            A showcase of full-stack applications and AI-driven solutions I've built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="group/btn">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                    <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </Button>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="bg-gradient-to-r from-secondary to-accent hover:opacity-90">
                    Live Demo
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
