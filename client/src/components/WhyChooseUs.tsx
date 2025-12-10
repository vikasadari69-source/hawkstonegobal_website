import { Card } from "@/components/ui/card";
import { Globe, Users, Clock, DollarSign, Layers, Zap } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Global Talent Reach",
    description:
      "Access a worldwide network of pre-vetted technology professionals across 15+ countries. Our local presence in the UK, Europe, USA, and India enables us to source the best talent regardless of geography.",
    highlight: "15+ Countries",
  },
  {
    icon: Users,
    title: "Deep Engineering Expertise",
    description:
      "Our recruitment specialists bring hands-on technology experience, ensuring accurate skill assessment and cultural fit evaluation. We understand the difference between good developers and great ones.",
    highlight: "200+ Tech Specialists",
  },
  {
    icon: Clock,
    title: "Rapid 24-72 Hour Turnaround",
    description:
      "Time is critical in technology projects. Our streamlined processes and ready talent pools enable us to present qualified candidates within 24-72 hours of requirement finalization.",
    highlight: "72hr Average",
  },
  {
    icon: Layers,
    title: "Flexible Engagement Models",
    description:
      "Choose the model that fits your needs: staff augmentation, managed teams, project-based delivery, or hybrid approaches. Scale up or down as your requirements evolve.",
    highlight: "5+ Models",
  },
  {
    icon: DollarSign,
    title: "Cost-Optimized Delivery",
    description:
      "Leverage our offshore and nearshore delivery centers to achieve 40-60% cost savings without compromising quality. Smart resource allocation across geographies maximizes your investment.",
    highlight: "40-60% Savings",
  },
  {
    icon: Zap,
    title: "Dedicated Delivery Teams",
    description:
      "Every client receives a dedicated account manager and delivery team committed to your success. Single point of contact, proactive communication, and continuous improvement focus.",
    highlight: "98% Satisfaction",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 lg:py-32 bg-muted/30" data-testid="section-why-choose-us">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <button className="inline-block text-[#FFB000] font-semibold text-sm uppercase tracking-wider bg-blue-900 px-6 py-3 rounded-full hover:bg-blue-800 transition-colors cursor-pointer shadow-lg">
                Why Choose Us
              </button>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            The Hawkstone Advantage
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            What sets us apart is our unwavering commitment to quality, speed, and value. Here's why leading enterprises choose Hawkstone Global Software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="p-6 hover-elevate relative overflow-visible"
              data-testid={`card-reason-${reason.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="absolute -top-3 right-6">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {reason.highlight}
                </span>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
