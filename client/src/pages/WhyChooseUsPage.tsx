import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Globe, Users, Clock, DollarSign, Layers, Zap, ArrowRight, CheckCircle, Award, Shield, Headphones } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { FadeIn, FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const reasons = [
  {
    icon: Globe,
    title: "Global Talent Reach",
    description:
      "Access a worldwide network of pre-vetted technology professionals across 15+ countries. Our local presence in the UK, Europe, USA, and India enables us to source the best talent regardless of geography.",
    highlight: "15+ Countries",
    details: [
      "Local recruitment teams in major tech hubs",
      "Cultural and language expertise",
      "Time zone-optimized team building",
      "Visa and relocation support",
    ],
  },
  {
    icon: Users,
    title: "Deep Engineering Expertise",
    description:
      "Our recruitment specialists bring hands-on technology experience, ensuring accurate skill assessment and cultural fit evaluation. We understand the difference between good developers and great ones.",
    highlight: "200+ Tech Specialists",
    details: [
      "Technical recruiters with engineering backgrounds",
      "Rigorous coding assessments",
      "Architecture and system design evaluation",
      "Soft skills and cultural fit analysis",
    ],
  },
  {
    icon: Clock,
    title: "Rapid 24-72 Hour Turnaround",
    description:
      "Time is critical in technology projects. Our streamlined processes and ready talent pools enable us to present qualified candidates within 24-72 hours of requirement finalization.",
    highlight: "72hr Average",
    details: [
      "Pre-vetted candidate databases",
      "Automated matching algorithms",
      "Priority response for urgent needs",
      "Dedicated fast-track process",
    ],
  },
  {
    icon: Layers,
    title: "Flexible Engagement Models",
    description:
      "Choose the model that fits your needs: staff augmentation, managed teams, project-based delivery, or hybrid approaches. Scale up or down as your requirements evolve.",
    highlight: "5+ Models",
    details: [
      "Staff augmentation",
      "Managed team services",
      "Project-based SOW delivery",
      "Build-operate-transfer",
      "Hybrid flexible models",
    ],
  },
  {
    icon: DollarSign,
    title: "Cost-Optimized Delivery",
    description:
      "Leverage our offshore and nearshore delivery centers to achieve 40-60% cost savings without compromising quality. Smart resource allocation across geographies maximizes your investment.",
    highlight: "40-60% Savings",
    details: [
      "Offshore delivery centers in India",
      "Nearshore teams in Eastern Europe",
      "Blended delivery models",
      "Transparent pricing structures",
    ],
  },
  {
    icon: Zap,
    title: "Dedicated Delivery Teams",
    description:
      "Every client receives a dedicated account manager and delivery team committed to your success. Single point of contact, proactive communication, and continuous improvement focus.",
    highlight: "98% Satisfaction",
    details: [
      "Named account managers",
      "Regular performance reviews",
      "Proactive talent pipeline management",
      "24/7 support availability",
    ],
  },
];

const differentiators = [
  { icon: Award, title: "15+ Years Experience", description: "Proven track record since 2008" },
  { icon: Shield, title: "Quality Guarantee", description: "Replacement guarantee on all placements" },
  { icon: Headphones, title: "24/7 Support", description: "Round-the-clock client assistance" },
];

const testimonials = [
  {
    quote: "Hawkstone has been instrumental in building our engineering team. Their understanding of our culture and technical requirements is exceptional.",
    author: "CTO",
    company: "Global Investment Bank",
  },
  {
    quote: "The speed and quality of candidates presented was impressive. They delivered where others failed.",
    author: "VP Engineering",
    company: "Leading E-Commerce Platform",
  },
  {
    quote: "Our offshore development center, built with Hawkstone's help, has exceeded all expectations in quality and productivity.",
    author: "Head of Technology",
    company: "Fortune 500 Retailer",
  },
];

export default function WhyChooseUsPage() {
  return (
    <PageLayout>
      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-why-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <button className="inline-block text-[#FFB000] font-semibold text-sm uppercase tracking-wider bg-blue-900 px-6 py-3 rounded-full hover:bg-blue-800 transition-colors cursor-pointer shadow-lg">
                Why Choose Us
              </button>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
                The Hawkstone Advantage
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                What sets us apart is our unwavering commitment to quality, speed, and value. Here's why leading enterprises choose Hawkstone Global Software.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-differentiators">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-16">
            {differentiators.map((item) => (
              <StaggerItem key={item.title}>
                <Card className="p-6 text-center hover-elevate">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-reasons">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Six Reasons to Partner With Us
              </h2>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <StaggerItem key={reason.title}>
                <Card
                  className="p-6 md:p-8 hover-elevate relative overflow-visible h-full"
                  data-testid={`card-reason-${reason.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="absolute -top-3 right-6">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {reason.highlight}
                    </span>
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{reason.description}</p>
                  <ul className="space-y-2">
                    {reason.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Client Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                What Our Clients Say
              </h2>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <Card className="p-6 h-full flex flex-col">
                  <blockquote className="text-muted-foreground italic leading-relaxed mb-6 flex-1">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground" data-testid="section-why-cta">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the Hawkstone Difference?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join 500+ enterprises that trust Hawkstone Global Software for their technology talent needs.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg" data-testid="button-why-cta">
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeInUp>
        </div>
      </section>
    </PageLayout>
  );
}
