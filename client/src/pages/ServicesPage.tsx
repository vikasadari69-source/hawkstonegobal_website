import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, UserCheck, Target, Building, FileText, Crown, ArrowRight, CheckCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { FadeIn, FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  {
    icon: Users,
    title: "Contract & Temporary Staffing",
    description:
      "Flexible technology staffing solutions for project-based needs. Access pre-vetted professionals for short-term and long-term assignments with rapid deployment within 24-72 hours.",
    features: ["Rapid 24-72 hour deployment", "Pre-vetted technology professionals", "Flexible engagement terms", "Seamless onboarding support", "Dedicated account management", "Compliance and payroll handling"],
    highlight: "Most Popular",
  },
  {
    icon: UserCheck,
    title: "Permanent Recruitment",
    description:
      "Strategic permanent hiring solutions to build your core technology teams. Our rigorous assessment process ensures cultural fit and long-term success for every placement.",
    features: ["Comprehensive candidate assessment", "Cultural fit evaluation", "Salary benchmarking", "Replacement guarantee", "Interview coordination", "Offer negotiation support"],
    highlight: null,
  },
  {
    icon: Target,
    title: "Talent Acquisition",
    description:
      "End-to-end talent acquisition strategies tailored to your organization's unique needs. From employer branding to candidate experience optimization.",
    features: ["Employer brand development", "Recruitment process design", "Candidate pipeline building", "Market intelligence reports", "Talent mapping", "Succession planning"],
    highlight: null,
  },
  {
    icon: Building,
    title: "Offshore & Nearshore Delivery",
    description:
      "Cost-effective offshore development centers in India and nearshore teams across Europe. Dedicated teams aligned with your processes and culture.",
    features: ["Dedicated delivery centers", "Time zone-aligned teams", "40-60% cost optimization", "IP protection guaranteed", "Scalable team structures", "Cultural integration support"],
    highlight: "Best Value",
  },
  {
    icon: FileText,
    title: "Managed Services (SOW)",
    description:
      "Outcome-based managed services with Statement of Work delivery model. Fixed-price projects with defined milestones and guaranteed deliverables.",
    features: ["Fixed-price delivery", "Defined SLAs and KPIs", "Risk-shared partnerships", "Transparent reporting", "Quality assurance", "Continuous improvement"],
    highlight: null,
  },
  {
    icon: Crown,
    title: "Executive & Leadership Hiring",
    description:
      "Specialized executive search for CTOs, Heads of Engineering, Digital Transformation Leaders, and other senior technology roles across industries.",
    features: ["C-suite and VP-level search", "Confidential headhunting", "Leadership assessment", "Succession planning support", "Board advisory placements", "Compensation benchmarking"],
    highlight: "Premium",
  },
];

const process = [
  { step: "01", title: "Discovery", description: "Understanding your unique requirements, culture, and technical needs" },
  { step: "02", title: "Strategy", description: "Developing a tailored approach with clear timelines and deliverables" },
  { step: "03", title: "Sourcing", description: "Leveraging our global network to identify the best candidates" },
  { step: "04", title: "Assessment", description: "Rigorous technical and cultural evaluation of candidates" },
  { step: "05", title: "Presentation", description: "Presenting pre-vetted candidates with detailed profiles" },
  { step: "06", title: "Onboarding", description: "Supporting seamless integration into your team" },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-services-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
                Comprehensive Technology Solutions
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From talent acquisition to managed delivery, we offer end-to-end solutions designed to accelerate your technology initiatives and drive business growth.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-services-list">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <StaggerContainer className="space-y-8">
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <Card
                  className="p-6 md:p-8 hover-elevate relative overflow-visible"
                  data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {service.highlight && (
                    <div className="absolute -top-3 right-6">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {service.highlight}
                      </span>
                    </div>
                  )}
                  <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold text-foreground">{service.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                      <Link href="/contact">
                        <Button variant="outline" data-testid={`button-inquire-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                          Inquire Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                How We Deliver Excellence
              </h2>
              <p className="text-muted-foreground text-lg">
                A proven methodology refined over 15 years of delivering world-class technology talent solutions.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item) => (
              <StaggerItem key={item.step}>
                <Card className="p-6 hover-elevate text-center">
                  <div className="text-4xl font-bold text-primary/20 mb-2">{item.step}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground" data-testid="section-services-cta">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              We tailor our services to meet your specific requirements. Let's discuss how we can help you achieve your technology goals.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg" data-testid="button-services-cta">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeInUp>
        </div>
      </section>
    </PageLayout>
  );
}
