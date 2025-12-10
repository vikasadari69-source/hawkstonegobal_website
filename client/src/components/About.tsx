import { Card } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import connectivityImage from "@assets/generated_images/global_tech_connectivity_abstract.png";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To bridge the global technology talent gap by connecting exceptional professionals with forward-thinking organizations, enabling digital transformation and business growth.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the world's most trusted technology talent and consulting partner, recognized for our commitment to quality, innovation, and client success across every engagement.",
  },
  {
    icon: Award,
    title: "Our Values",
    description:
      "Excellence in delivery, integrity in partnerships, innovation in solutions, and a relentless focus on creating lasting value for our clients and candidates.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A diverse, experienced team of 200+ professionals across four continents, united by a shared passion for technology and commitment to client success.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Powering Global Digital Transformation
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hawkstone Global Software Pvt Ltd is a premier technology talent acquisition, consulting, and digital engineering solutions company with a truly global footprint. Operating across the UK, Europe, USA, and India, we specialize in connecting world-class technology professionals with innovative organizations driving the future of business.
              </p>
              <p>
                With over 15 years of industry experience, we have built deep expertise across multiple technology domains and industry verticals. Our comprehensive service portfolio spans contract and temporary staffing, permanent recruitment, offshore and nearshore delivery centers, managed services, and executive-level hiring.
              </p>
              <p>
                What sets us apart is our unique combination of global reach and local expertise. Our dedicated teams in each region understand the nuances of local markets while leveraging our international network to deliver optimal solutions for every client engagement.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden">
              <img
                src={connectivityImage}
                alt="Global technology connectivity"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card key={value.title} className="p-6 hover-elevate" data-testid={`card-value-${value.title.toLowerCase().replace(/\s+/g, "-")}`}>
              <value.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
