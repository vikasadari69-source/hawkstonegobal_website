import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, Building2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { FadeIn, FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const serviceOptions = [
  { value: "contract-staffing", label: "Contract & Temporary Staffing" },
  { value: "permanent-recruitment", label: "Permanent Recruitment" },
  { value: "talent-acquisition", label: "Talent Acquisition" },
  { value: "offshore-delivery", label: "Offshore & Nearshore Delivery" },
  { value: "managed-services", label: "Managed Services (SOW)" },
  { value: "executive-hiring", label: "Executive & Leadership Hiring" },
  { value: "other", label: "Other" },
];

const offices = [
  {
    region: "INDIA",
    city: "VISAKHAPATNAM",
    address: "",
    phone: "",
    email: "info@hawkstoneglobal.com",
  },
  /* {
    region: "United States",
    city: "New York",
    address: "350 Fifth Avenue, New York, NY 10118",
    phone: "+1 212 555 0189",
    email: "usa@hawkstone-global.com",
  },
  {
    region: "Europe",
    city: "Frankfurt",
    address: "Taunusanlage 12, 60325 Frankfurt",
    phone: "+49 69 7591 0",
    email: "europe@hawkstone-global.com",
  },
  {
    region: "India",
    city: "Bangalore",
    address: "Manyata Tech Park, Nagavara, Bangalore 560045",
    phone: "+91 80 4567 8900",
    email: "india@hawkstone-global.com",
  }, */
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your inquiry. Our team will contact you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-contact-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
                Let's Discuss Your Needs
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ready to accelerate your technology initiatives? Our experts are here to help you find the right talent and solutions.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-contact-form">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <FadeInUp className="lg:col-span-3">
              <Card className="p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        data-testid="input-phone"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        data-testid="input-company"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleChange("service", value)}
                      required
                    >
                      <SelectTrigger data-testid="select-service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help? *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, timeline, and any specific skills you're looking for..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={5}
                      required
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                    data-testid="button-submit-contact"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </FadeInUp>

            <div className="lg:col-span-2 space-y-6">
              <FadeInUp delay={0.1}>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email Us</p>
                        <p className="text-sm text-muted-foreground">info@hawkstoneglobal.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Headquarters</p>
                        <p className="text-sm text-muted-foreground">Visakhapatnam,Andhra Pradesh</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Response Time</p>
                        <p className="text-sm text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <Card className="p-6 bg-primary text-primary-foreground">
                  <h3 className="text-lg font-semibold mb-2">Need Urgent Support?</h3>
                  <p className="text-sm opacity-90 mb-4">
                    For time-critical requirements, our priority response team is available 24/7.
                  </p>
                  <Button variant="secondary" size="sm" data-testid="button-priority-support">
                    Request Priority Support
                  </Button>
                </Card>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-offices">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Offices</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Global Locations
              </h2>
              <p className="text-muted-foreground text-lg">
                With offices across four continents, we're always close to you.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <StaggerItem key={office.region}>
                <Card className="p-6 h-full hover-elevate" data-testid={`office-${office.region.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Building2 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-foreground">{office.region}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{office.city}</p>
                  
                  <div className="space-y-3 text-sm">
                                        <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{office.email}</span>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageLayout>
  );
}
