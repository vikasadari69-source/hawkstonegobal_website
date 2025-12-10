/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SITE CONTENT CONFIGURATION - HAWKSTONE GLOBAL SOFTWARE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * All text, images, and metrics are centralized here for easy customization.
 * Look for // REPLACE HERE comments to find key content to update.
 * 
 * CUSTOMIZATION GUIDE:
 * 
 * 1. LOGO: Replace attached_assets/hawkstone-logo.png
 * 2. COLORS: Edit index.css :root variables
 * 3. IMAGES: Update image paths in heroContent and elsewhere
 * 4. TEXT: Modify strings marked with // REPLACE HERE
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderConfig {
  companyName: string;
  ctaButton: {
    text: string;
    href: string;
    backgroundColor: string;
    textColor: string;
    hoverBackgroundColor: string;
  };
  navLinks: NavLink[];
  overlay: {
    backgroundColor: string;
    accentBorderColor: string;
    linkColor: string;
    linkHoverColor: string;
  };
  ariaLabels: {
    menuButton: string;
    closeButton: string;
    mainNav: string;
  };
}

export const headerConfig: HeaderConfig = {
  companyName: "Hawkstone Global — Software Pvt Ltd", // REPLACE HERE
  
  ctaButton: {
    text: "Contact",
    href: "/contact",
    backgroundColor: "#FFB000", // REPLACE HERE - Brand gold
    textColor: "#072A53", // REPLACE HERE - Brand navy
    hoverBackgroundColor: "#e6a000",
  },
  
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  
  overlay: {
    backgroundColor: "#0a0a14",
    accentBorderColor: "#FFB000",
    linkColor: "#ffffff",
    linkHoverColor: "#FFB000",
  },
  
  ariaLabels: {
    menuButton: "Toggle navigation menu",
    closeButton: "Close navigation menu",
    mainNav: "Main navigation",
  },
};

export const heroContent = {
  badge: "Free Trial", // REPLACE HERE
  badgeText: "Get your Next-Hiring with our Free Trial", // REPLACE HERE
  
  headline: "Empowering businesses worldwide with skilled professionals who drive growth, innovation, and long-term success.", // REPLACE HERE
  
  subheadline: "", // REPLACE HERE
  
  primaryCta: "Start Hiring Experts", // REPLACE HERE
  secondaryCta: "View Services", // REPLACE HERE
  
  cards: [
    {
      title: "Fast Talent Delivery", // REPLACE HERE
      description: "Receive shortlisted, interview-ready candidates within 24–72 hours", // REPLACE HERE
      cta: "",
      type: "feature",
    },
    {
      title: "Precision Matching",
      description: "AI-powered sourcing + industry-expert recruiters ensure accurate role-fit.",
      type: "stat",
    },
    {
      title: "Specialised in UK & EU Talent Compliance",
      description: "Fully compliant hiring across UK & EU, including right-to-work, GDPR, and IR35.",
      type: "highlight",
    },
    {
      title: "End-to-End Recruitment Support",
      description: "From sourcing to onboarding — we manage the entire hiring process.",
      type: "stat",
    },
  ],
};

export const servicesContent = {
  sectionTitle: "Expert Hiring Services to Drive Your Growth", // REPLACE HERE
  sectionSubtitle: "Your career is our priority. We take the time to understand your goals and match you with the perfect role.", // REPLACE HERE
  
  services: [
    {
      icon: "users", // Lucide icon name
      title: "Talent Sourcing", // REPLACE HERE
      description: "Identify, source, and attract the most qualified sales professionals across various industries levels.", // REPLACE HERE
      cta: "Get Started",
    },
    {
      icon: "userPlus",
      title: "Candidate Onboarding", // REPLACE HERE
      description: "We provide full onboarding support to ensure your new hires are prepared for success from day one.", // REPLACE HERE
      cta: "Get Started",
    },
    {
      icon: "award",
      title: "Sales Leadership", // REPLACE HERE
      description: "We specialize in placing high-impact sales leaders who can drive results and inspire teams to exceed targets.", // REPLACE HERE
      cta: "Get Started",
    },
    {
      icon: "barChart",
      title: "Market Insights", // REPLACE HERE
      description: "Receive up-to-date insights and advice on the latest trends in sales recruitment and market compensation.", // REPLACE HERE
      cta: "Get Started",
    },
    {
      icon: "search",
      title: "Executive Search", // REPLACE HERE
      description: "Recruitment for senior leadership and executive roles, connecting you with top-tier professionals.", // REPLACE HERE
      cta: "Get Started",
    },
    {
      icon: "briefcase",
      title: "Contract Staffing", // REPLACE HERE
      description: "Workforce solutions to meet short-term or project-based needs, ensuring you always have the right talent.", // REPLACE HERE
      cta: "Get Started",
    },
  ],
};

export const statsContent = {
  stats: [
    { value: 20, suffix: "+", label: "Clients" }, // REPLACE HERE
    { value: 1000, suffix: "+", label: "Professional served" }, // REPLACE HERE
    { value: 5, suffix: "+", label: "Years" }, // REPLACE HERE
    { value: 98, suffix: "%", label: "Success Rate" }, // REPLACE HERE
  ],
};

export const aboutContent = {
  sectionTitle: "Empowering Careers, Building Futures", // REPLACE HERE
  sectionSubtitle: "We take the time to understand your goals and match you with the perfect role, ensuring a seamless transition into your next opportunity.", // REPLACE HERE
  
  features: [
    {
      title: "Accelerate your time to hire",
      description: "Providing transparency with exceptional candidates who bring value, skill, and passion to every role.",
    },
    {
      title: "Flexible hiring models to fit your needs",
      description: "Our streamlined services empowering to empower you with the tools and expertise needed to navigate the unexpected.",
    },
  ],
  
  cta: "Try Recruitment Process",
};

export const whyChooseContent = {
  sectionTitle: "Recruitment Solutions Tailored to Your Needs", // REPLACE HERE
  sectionSubtitle: "Whether you're looking for your next career opportunity or seeking top talent to join your team, our expert recruiters are here to guide you.", // REPLACE HERE
  
  benefits: [
    "Expertise Across Multiple Industries", // REPLACE HERE
    "Comprehensive Candidate Screening Process", // REPLACE HERE
    "Proven Track Record of Successful Placements", // REPLACE HERE
    "Personalized Recruitment Strategies", // REPLACE HERE
    "Dedicated Support Throughout the Process", // REPLACE HERE
    "Access to Exclusive Talent Networks", // REPLACE HERE
  ],
  
  cta: "Try Recruitment Process",
};

export const outcomesContent = {
  sectionTitle: "Driven by Results, Powered by People", // REPLACE HERE
  sectionSubtitle: "Your career is our priority. We take the time to understand your goals and match you with the perfect role, ensuring a seamless transition into your next opportunity.", // REPLACE HERE
  
  caseStudy: {
    title: "Scaling Temporary Workforce for Manufacturing Clients", // REPLACE HERE
    description: "Demonstrated capacity to meet urgent needs of a manufacturing client by providing temporary staff quickly and efficiently.", // REPLACE HERE
    tags: ["Fulfillment", "Temporary Staffing", "On-demand workforce"],
  },
  
  talentBadge: "We Find Top 01% Talent", // REPLACE HERE
  talentDescription: "We take the time to understand your goals and match you with the perfect role, ensuring a seamless transition into your next opportunity.", // REPLACE HERE
};

export const testimonialsContent = {
  sectionTitle: "Trusted by Leading Companies Worldwide", // REPLACE HERE
  sectionSubtitle: "Hear firsthand how we've helped businesses like yours achieve their goals and overcome challenges.", // REPLACE HERE
  
  testimonials: [
    {
      quote: "Their professionalism and attention to detail set them apart from any other agency I've worked with. I'm now thriving in my new role, and I owe it all to their expertise. I can't recommend them enough!", // REPLACE HERE
      author: "Ethan Carter", // REPLACE HERE
      role: "Marketing Manager", // REPLACE HERE
    },
    {
      quote: "The team understood our requirements perfectly and delivered candidates who exceeded our expectations. Our hiring process has never been smoother.", // REPLACE HERE
      author: "Sarah Chen", // REPLACE HERE
      role: "HR Director", // REPLACE HERE
    },
    {
      quote: "Working with Hawkstone Global was a game-changer for our tech recruitment. They found us exceptional talent within days.", // REPLACE HERE
      author: "Michael Ross", // REPLACE HERE
      role: "CTO", // REPLACE HERE
    },
  ],
};

export const faqContent = {
  sectionTitle: "Frequently Asked Questions", // REPLACE HERE
  sectionSubtitle: "Our dedicated team of experts is committed to understanding your unique needs and objectives, working closely with you to develop and execute.", // REPLACE HERE
  
  faqs: [
    {
      question: "What types of roles do you specialize in?", // REPLACE HERE
      answer: "We specialize in recruiting for a wide range of industries, including Retail & E-commerce, F, Healthcare, Finance, engineering, etc, and provide placements for both permanent and temporary positions.", // REPLACE HERE
    },
    {
      question: "What are your fees for recruitment services?", // REPLACE HERE
      answer: "Our fees vary depending on the type of placement and the level of the position. We offer competitive pricing and flexible engagement models to suit your budget and needs.", // REPLACE HERE
    },
    {
      question: "Do you provide any guarantees?", // REPLACE HERE
      answer: "Yes, we offer placement guarantees. If a candidate doesn't work out within a specified period, we'll find a replacement at no additional cost.", // REPLACE HERE
    },
    {
      question: "Can you provide temporary or contract workers?", // REPLACE HERE
      answer: "Absolutely! We have a robust temporary staffing division that can provide skilled workers for short-term projects or seasonal needs.", // REPLACE HERE
    },
    {
      question: "How does the recruitment process work?", // REPLACE HERE
      answer: "Our recruitment process begins with understanding your business needs and job requirements. We then source, screen, and interview candidates presenting you with only the most qualified individuals for final interviews.", // REPLACE HERE
    },
    {
      question: "How long does it take to fill a position?", // REPLACE HERE
      answer: "The timeline varies depending on the role complexity and market conditions. Typically, we can present qualified candidates within 24-72 hours for most positions.", // REPLACE HERE
    },
    {
      question: "What is your candidate screening process?", // REPLACE HERE
      answer: "We conduct thorough background checks, skill assessments, and multiple interview rounds to ensure candidates meet both technical requirements and cultural fit.", // REPLACE HERE
    },
    {
      question: "What happens to my data if I cancel my subscription?", // REPLACE HERE
      answer: "Your data remains secure and accessible for 30 days after cancellation. You can export your data at any time during this period.", // REPLACE HERE
    },
  ],
};

export const contactContent = {
  sectionTitle: "Get in Touch", // REPLACE HERE
  sectionSubtitle: "Ready to find your next great hire or career opportunity? Contact us today.", // REPLACE HERE
  
  form: {
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Tell us about your needs...",
    submitText: "Send Message",
  },
  
  info: {
    email: "contact@hawkstoneglobal.com", // REPLACE HERE
    phone: "+1 (555) 123-4567", // REPLACE HERE
    address: "123 Business District, London, UK", // REPLACE HERE
  },
};

export const footerContent = {
  tagline: "Driving Success by Connecting Talent and Opportunity", // REPLACE HERE
  
  links: {
    company: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Pricing", href: "/pricing" },
      { label: "Testimonial", href: "/testimonials" },
    ],
    services: [
      { label: "Contract Staffing", href: "/services#contract" },
      { label: "Leadership Hiring", href: "/services#leadership" },
      { label: "Candidate Sourcing", href: "/services#sourcing" },
      { label: "Specialty Recruitment", href: "/services#specialty" },
      { label: "Training Support", href: "/services#training" },
    ],
    other: [
      { label: "Why Choose Us?", href: "/why-choose-us" },
      { label: "Contact Sales", href: "/contact" },
      { label: "Allowed Questions", href: "/faq" },
      { label: "Our Projects", href: "/projects" },
    ],
  },
  
  legal: {
    privacyPolicy: "/privacy",
    termsConditions: "/terms",
    copyright: "Copyright 2025 — All Rights Reserved", // REPLACE HERE
  },
};

export const ctaContent = {
  title: "Expert Hiring Services to Drive Your Growth", // REPLACE HERE
  subtitle: "Whether you're looking for your next career opportunity or seeking top talent to join your team, our expert recruiters are here to guide you every step of the way.", // REPLACE HERE
  primaryCta: "Get Started Now", // REPLACE HERE
  trustBadge: "", // REPLACE HERE
};

export default headerConfig;
