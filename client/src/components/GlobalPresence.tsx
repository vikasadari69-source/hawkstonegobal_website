import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import globalMapImage from "@assets/generated_images/global_presence_world_map.png";

const offices = [
  {
    region: "United Kingdom",
    city: "London",
    address: "30 St Mary Axe, London EC3A 8BF",
    phone: "",
    email: "uk@hawkstone-global.com",
    flag: "🇬🇧",
  },
  {
    region: "United States",
    city: "New York",
    address: "350 Fifth Avenue, New York, NY 10118",
    phone: "",
    email: "usa@hawkstone-global.com",
    flag: "🇺🇸",
  },
  {
    region: "Europe",
    city: "Frankfurt",
    address: "Taunusanlage 12, 60325 Frankfurt",
    phone: "",
    email: "europe@hawkstone-global.com",
    flag: "🇩🇪",
  },
  {
    region: "India",
    city: "Bangalore",
    address: "Manyata Tech Park, Nagavara, Bangalore 560045",
    phone: "",
    email: "india@hawkstone-global.com",
    flag: "🇮🇳",
  },
];

export default function GlobalPresence() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background" data-testid="section-global-presence">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Global Presence</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Wherever You Are, We're There
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With offices across four continents, we provide local expertise backed by global capabilities. Our teams operate in your timezone, speak your language, and understand your market.
          </p>
        </div>

        <div className="mb-12 rounded-xl overflow-hidden">
          <img
            src={globalMapImage}
            alt="Global presence map showing UK, Europe, USA and India"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((office) => (
            <Card key={office.region} className="p-6 hover-elevate" data-testid={`office-${office.region.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className="text-3xl mb-3">{office.flag}</div>
              <h3 className="text-lg font-semibold text-foreground">{office.region}</h3>
              <p className="text-primary font-medium text-sm mb-4">{office.city}</p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{office.email}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
