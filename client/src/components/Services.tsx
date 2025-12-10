import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  UserCheck,
  Target,
  Building,
  FileText,
  Crown,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Contract & Temporary Staffing",
    description:
      "Flexible technology staffing solutions for project-based needs. Access pre-vetted professionals for short-term and long-term assignments with rapid deployment within 24-72 hours.",
    features: ["Rapid 24-72 hour deployment", "Pre-vetted technology professionals", "Flexible engagement terms", "Seamless onboarding support"],
  },
  {
    icon: UserCheck,
    title: "Permanent Recruitment",
    description:
      "Strategic permanent hiring solutions to build your core technology teams. Our rigorous assessment process ensures cultural fit and long-term success for every placement.",
    features: ["Comprehensive candidate assessment", "Cultural fit evaluation", "Salary benchmarking", "Replacement guarantee"],
  },
  {
    icon: Target,
    title: "Talent Acquisition",
    description:
      "End-to-end talent acquisition strategies tailored to your organization's unique needs. From employer branding to candidate experience optimization.",
    features: ["Employer brand development", "Recruitment process design", "Candidate pipeline building", "Market intelligence reports"],
  },
  {
    icon: Building,
    title: "Offshore & Nearshore Delivery",
    description:
      "Cost-effective offshore development centers in India and nearshore teams across Europe. Dedicated teams aligned with your processes and culture.",
    features: ["Dedicated delivery centers", "Time zone-aligned teams", "40-60% cost optimization", "IP protection guaranteed"],
  },
  {
    icon: FileText,
    title: "Managed Services (SOW)",
    description:
      "Outcome-based managed services with Statement of Work delivery model. Fixed-price projects with defined milestones and guaranteed deliverables.",
    features: ["Fixed-price delivery", "Defined SLAs and KPIs", "Risk-shared partnerships", "Transparent reporting"],
  },
  {
    icon: Crown,
    title: "Executive & Leadership Hiring",
    description:
      "Specialized executive search for CTOs, Heads of Engineering, Digital Transformation Leaders, and other senior technology roles across industries.",
    features: ["C-suite and VP-level search", "Confidential headhunting", "Leadership assessment", "Succession planning support"],
  },
];

export default function Services() {
  const handleContactClick = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-muted/30" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From talent acquisition to managed delivery, we offer end-to-end solutions designed to accelerate your technology initiatives and drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="p-6 hover-elevate group"
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                className="p-0 h-auto text-primary hover:text-primary/80"
                onClick={handleContactClick}
                data-testid={`button-learn-more-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                Learn More
                <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
