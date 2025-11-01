import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername",
      color: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">Let's Connect</h1>
          <p className="text-xl text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-in-right">
              <Card className="p-8 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg mb-8 opacity-90">
                  Whether you have a question, want to discuss a project, or just want to say hi, 
                  I'll try my best to get back to you!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Location</p>
                      <p className="font-medium">Available Remotely</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Resume</p>
                      <a
                        href="/resume.pdf"
                        className="font-medium hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Links */}
              <Card className="p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Quick Response</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  For fastest response, reach out via LinkedIn or email. I typically respond within 24 hours.
                </p>
                <div className="flex gap-2">
                  <a href="mailto:your.email@example.com" className="flex-1">
                    <Button variant="outline" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Me
                    </Button>
                  </a>
                </div>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group bg-card">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <method.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                        <p className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                          {method.value}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                          className="h-6 w-6 text-muted-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}

              {/* Availability Card */}
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-glow mt-1.5" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Currently Available</h3>
                    <p className="text-sm text-muted-foreground">
                      Open to full-time opportunities, contract work, and interesting collaborations.
                      Specialized in Java full-stack development and AI/LLM integration projects.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
