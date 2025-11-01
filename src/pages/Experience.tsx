import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Engineer",
      company: "Tech Innovation Corp",
      period: "2021 - Present",
      description: [
        "Led development of microservices architecture serving 5M+ users, reducing latency by 40%",
        "Designed and implemented AI-powered features using LLMs, increasing user engagement by 60%",
        "Mentored team of 8 engineers on best practices for Spring Boot and React development",
        "Established CI/CD pipelines reducing deployment time from hours to minutes",
      ],
      skills: ["Java", "Spring Boot", "React", "AWS", "LLM Integration", "PostgreSQL"],
    },
    {
      title: "Full Stack Java Developer",
      company: "Enterprise Solutions Ltd",
      period: "2019 - 2021",
      description: [
        "Built RESTful APIs handling 100K+ requests per day with sub-100ms response times",
        "Developed responsive web applications using React and TypeScript",
        "Implemented automated testing strategies achieving 90% code coverage",
        "Optimized database queries reducing load times by 50%",
      ],
      skills: ["Java", "Spring", "React", "MySQL", "Docker", "Jenkins"],
    },
    {
      title: "Software Engineer",
      company: "Digital Ventures Inc",
      period: "2017 - 2019",
      description: [
        "Developed full-stack web applications using Java and modern JavaScript frameworks",
        "Collaborated with cross-functional teams to deliver projects on tight deadlines",
        "Participated in code reviews and contributed to technical documentation",
        "Implemented new features based on user feedback and analytics",
      ],
      skills: ["Java", "JavaScript", "Node.js", "MongoDB", "Git"],
    },
  ];

  const skills = {
    "Backend": ["Java", "Spring Boot", "Spring Cloud", "Microservices", "REST APIs", "GraphQL"],
    "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "React Query"],
    "AI/ML": ["LangChain", "OpenAI API", "Hugging Face", "RAG", "Vector Databases", "Model Fine-tuning"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "MySQL"],
    "DevOps": ["Docker", "Kubernetes", "AWS", "CI/CD", "Jenkins", "GitHub Actions"],
    "Tools": ["Git", "Maven", "Gradle", "Kafka", "RabbitMQ", "Prometheus"],
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">Experience & Skills</h1>
          <p className="text-xl text-muted-foreground">
            Building enterprise solutions and AI-powered applications
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-secondary" />
            <h2 className="text-3xl font-bold text-foreground">Work Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary bg-card animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-lg text-secondary font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                    {exp.period}
                  </Badge>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <span className="text-secondary mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-muted text-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-secondary" />
            <h2 className="text-3xl font-bold text-foreground">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <Card
                key={category}
                className="p-6 hover:shadow-lg transition-all duration-300 bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-accent mr-3" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-secondary/30 hover:bg-secondary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
