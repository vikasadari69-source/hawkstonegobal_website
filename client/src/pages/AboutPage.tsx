import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { FadeIn, FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import connectivityImage from "@assets/generated_images/global_tech_connectivity_abstract.png";
import WhyChooseUs from "@/components/WhyChooseUs";



const leadershipTeam = [
  {
    name: "",
    role: "",
    bio: "Hawkstone is redefining the way businesses scale technology teams. We bring together world-class talent, deep industry expertise, and modern delivery models to help companies transform with confidence. Our global-to-local staffing approach ensures adaptability, speed, and quality—while our customer-first mindset enables us to deliver meaningful outcomes, every time.",
    focus: "Global Strategy • Client Experience",
    image: "@assets/generated_images/vikas.jpg",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-about-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <FadeIn>
                <span className="text-primary font-semibold text-lg uppercase tracking-wider">About Us</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
                  Powering Global Digital Transformation
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
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
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button size="lg" data-testid="button-about-contact">
                      Partner With Us
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>

            <SlideInRight>
              <div className="relative">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={connectivityImage}
                    alt="Global technology connectivity"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                  <div className="text-4xl font-bold">98%</div>
                  <div className="text-sm opacity-90"> of Excellence</div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      
      <WhyChooseUs />

      <section className="py-16 md:py-24 bg-primary text-primary-foreground" data-testid="section-about-cta">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how Hawkstone Global Software can help accelerate your technology initiatives.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg" data-testid="button-about-cta">
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeInUp>
        </div>
      </section>
    </PageLayout>
  );
}
