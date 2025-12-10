import { useState, useMemo } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, MapPin, Send, Users, Clock, ArrowRight, Search } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { FadeIn, FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const categories = [
  "All Categories",
  "Software Engineering", 
  "Data Management",
  "Support",
  "QA",
  "UI/UX",
  "Business Analysis",
  "Agile / Scrum",
  "DevOps"
];

const jobRoles = [
  {
    id: 1,
    title: "Senior Data Engineer",
    department: "Data Management",
    location: "India",
    type: "Full-time",
    description: "We are looking for a Senior Data Engineer to join our dynamic team. You will be responsible for designing, building, and maintaining data pipelines and infrastructure that enable data-driven decision making across the organization.",
    responsibilities: [
      "Design and implement scalable data pipelines using modern ETL/ELT tools",
      "Develop and maintain data warehouse solutions",
      "Work with cross-functional teams to understand data requirements",
      "Ensure data quality and governance standards are met",
      "Optimize data processing and query performance"
    ],
    requirements: [
      "5+ years of experience in data engineering",
      "Strong proficiency in SQL and Python",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Knowledge of data warehousing concepts and tools",
      "Experience with big data technologies like Spark, Hadoop"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health insurance",
      "Flexible work arrangements",
      "Professional development opportunities",
      "Global exposure and collaboration"
    ]
  },
  {
    id: 2,
    title: "Agile Consultant II",
    department: "Agile / Scrum",
    location: "Lima",
    type: "Full-time",
    description: "Join our team as an Agile Consultant II to help organizations transform their project management and delivery processes. You will guide teams in adopting Agile methodologies and improving their overall efficiency.",
    responsibilities: [
      "Lead Agile transformation initiatives for client organizations",
      "Conduct Agile training sessions and workshops",
      "Coach teams on Scrum, Kanban, and other Agile frameworks",
      "Facilitate sprint planning, retrospectives, and reviews",
      "Measure and improve team performance metrics"
    ],
    requirements: [
      "4+ years of experience as an Agile Coach or Scrum Master",
      "Certified Scrum Professional (CSP) or equivalent",
      "Experience in enterprise Agile transformations",
      "Strong facilitation and communication skills",
      "Experience with Agile tools like JIRA, Azure DevOps"
    ],
    benefits: [
      "International work exposure",
      "Certification sponsorship programs",
      "Remote work flexibility",
      "Performance-based incentives",
      "Career advancement opportunities"
    ]
  },
  {
    id: 3,
    title: "Frontend Developer",
    department: "UI/UX",
    location: "India",
    type: "Full-time",
    description: "We are seeking a talented Frontend Developer to create exceptional user interfaces and experiences. You will work closely with design teams to bring beautiful, responsive designs to life.",
    responsibilities: [
      "Develop responsive and interactive web applications",
      "Collaborate with UX designers to implement design specifications",
      "Optimize applications for maximum speed and scalability",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and agile ceremonies"
    ],
    requirements: [
      "3+ years of experience in frontend development",
      "Strong proficiency in React, TypeScript, and modern CSS",
      "Experience with state management libraries (Redux, Zustand)",
      "Knowledge of responsive design principles",
      "Familiarity with testing frameworks like Jest, Cypress"
    ],
    benefits: [
      "Modern tech stack and tools",
      "Creative and collaborative environment",
      "Flexible working hours",
      "Skill development programs",
      "Health and wellness benefits"
    ]
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "DevOps",
    location: "India",
    type: "Full-time",
    description: "Looking for an experienced DevOps Engineer to automate and streamline our operations and processes. You will play a key role in building and maintaining CI/CD pipelines and infrastructure.",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure and deployment automation",
      "Monitor system performance and troubleshoot issues",
      "Implement security best practices and compliance",
      "Collaborate with development teams on deployment strategies"
    ],
    requirements: [
      "4+ years of experience in DevOps or similar role",
      "Experience with containerization (Docker, Kubernetes)",
      "Proficiency in scripting languages (Python, Bash)",
      "Knowledge of cloud platforms (AWS, Azure, GCP)",
      "Experience with infrastructure as code (Terraform, CloudFormation)"
    ],
    benefits: [
      "Cutting-edge technology exposure",
      "Certification support",
      "Remote work options",
      "Performance bonuses",
      "Career growth opportunities"
    ]
  }
];

const countryCodes = [
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+34", country: "Spain" },
  { code: "+39", country: "Italy" },
  { code: "+31", country: "Netherlands" },
  { code: "+46", country: "Sweden" },
  { code: "+47", country: "Norway" },
  { code: "+358", country: "Finland" },
  { code: "+45", country: "Denmark" },
  { code: "+41", country: "Switzerland" },
  { code: "+43", country: "Austria" },
  { code: "+48", country: "Poland" },
  { code: "+420", country: "Czech Republic" },
  { code: "+36", country: "Hungary" },
  { code: "+30", country: "Greece" },
  { code: "+90", country: "Turkey" },
  { code: "+972", country: "Israel" },
  { code: "+971", country: "United Arab Emirates" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+65", country: "Singapore" },
  { code: "+60", country: "Malaysia" },
  { code: "+66", country: "Thailand" },
  { code: "+62", country: "Indonesia" },
  { code: "+63", country: "Philippines" },
  { code: "+64", country: "New Zealand" },
  { code: "+55", country: "Brazil" },
  { code: "+52", country: "Mexico" },
  { code: "+54", country: "Argentina" },
  { code: "+56", country: "Chile" },
  { code: "+57", country: "Colombia" },
  { code: "+51", country: "Peru" },
  { code: "+27", country: "South Africa" },
  { code: "+20", country: "Egypt" },
  { code: "+234", country: "Nigeria" },
  { code: "+254", country: "Kenya" },
  { code: "+92", country: "Pakistan" },
  { code: "+880", country: "Bangladesh" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+977", country: "Nepal" },
  { code: "+855", country: "Cambodia" },
  { code: "+84", country: "Vietnam" },
  { code: "+82", country: "South Korea" },
  { code: "+852", country: "Hong Kong" },
  { code: "+853", country: "Macau" },
  { code: "+886", country: "Taiwan" },
  { code: "+86", country: "China" }
];

export default function CareersPage() {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<typeof jobRoles[0] | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    linkedinProfile: "",
    consent1: false,
    consent2: false,
  });

  const filteredJobs = useMemo(() => {
    return jobRoles.filter(job => {
      const matchesSearch = searchTerm === "" || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "All Categories" || 
        job.department === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (2MB limit)
      const maxSize = 2 * 1024 * 1024; // 2MB in bytes
      if (file.size > maxSize) {
        toast({
          title: "File Too Large",
          description: "Please upload a file smaller than 2MB.",
          variant: "destructive",
        });
        e.target.value = '';
        return;
      }

      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/rtf'];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF, DOC, DOCX, TXT, or RTF file.",
          variant: "destructive",
        });
        e.target.value = '';
        return;
      }

      setResumeFile(file);
    }
  };

  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Convert resume to base64 if exists
      let resumeBase64 = '';
      if (resumeFile) {
        resumeBase64 = await readFileAsBase64(resumeFile);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          jobTitle: selectedJob?.title,
          jobId: selectedJob?.id,
          resumeFileName: resumeFile?.name || '',
          resumeFileType: resumeFile?.type || '',
          resumeData: resumeBase64,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit application");
      }

      toast({
        title: "Application Submitted Successfully",
        description: "Thank you for your interest. Our team will review your application and contact you soon.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        linkedinProfile: "",
        consent1: false,
        consent2: false,
      });
      setResumeFile(null);
    } catch (error) {
      console.error("Career application submission error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-careers-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">CAREERS</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
                Join Our Global Team
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Build your career with a team that's transforming the future of technology. 
                Explore opportunities to work with cutting-edge technologies and amazing colleagues worldwide.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {!selectedJob ? (
        <section className="py-16 md:py-24 bg-background" data-testid="section-job-listings">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <FadeInUp>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                  Current Openings
                </h2>
                <p className="text-muted-foreground text-lg">
                  Discover exciting opportunities to grow your career with us
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <div className="max-w-4xl mx-auto mb-8">
                <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Job Title, Skill, or Technology"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-12"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger className="w-48 h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button className="h-12 px-6">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <StaggerItem key={job.id}>
                  <Card className="p-6 hover-elevate cursor-pointer" onClick={() => setSelectedJob(job)}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            #{job.id}
                          </span>
                          <span className="text-sm text-muted-foreground">{job.type}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{job.title}</h3>
                        <p className="text-primary font-medium text-sm mb-3">{job.department}</p>
                      </div>
                      <Briefcase className="w-8 h-8 text-primary/20" />
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>Team: {job.department}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full group">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      ) : (
        <section className="py-16 md:py-24 bg-background" data-testid="section-job-details">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-8">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedJob(null)}
                className="mb-4"
              >
                ← Back to Job Listings
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <FadeInUp className="space-y-6">
                <Card className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      #{selectedJob.id}
                    </span>
                    <span className="text-sm text-muted-foreground">{selectedJob.type}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-foreground mb-2">{selectedJob.title}</h2>
                  <p className="text-primary font-medium text-lg mb-4">{selectedJob.department}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedJob.type}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">About the Role</h3>
                      <p className="text-muted-foreground leading-relaxed">{selectedJob.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Key Responsibilities</h3>
                      <ul className="space-y-2">
                        {selectedJob.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Requirements</h3>
                      <ul className="space-y-2">
                        {selectedJob.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Benefits & Perks</h3>
                      <ul className="space-y-2">
                        {selectedJob.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <Card className="p-6 md:p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Apply for This Position</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          placeholder="Smith"
                          value={formData.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="flex gap-2">
                        <Select
                          value={formData.countryCode}
                          onValueChange={(value) => handleChange("countryCode", value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="max-h-60 overflow-y-auto">
                            {countryCodes.map((country) => (
                              <SelectItem key={country.code} value={country.code}>
                                {country.code} {country.country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder=""
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          className="flex-1"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resume">Resume/CV *</Label>
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx,.txt,.rtf"
                        onChange={handleFileChange}
                        required
                        className="file:mr-6 file:py-2 file:px-6 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:cursor-pointer"
                      />
                      <p className="text-xs text-muted-foreground">
                        Accepted file types: PDF, DOC, DOCX, TXT, RTF (Max 2MB)
                      </p>
                      {resumeFile && (
                        <p className="text-xs text-green-600">
                          Selected: {resumeFile.name} ({(resumeFile.size / 1024).toFixed(1)} KB)
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="linkedinProfile">LinkedIn Profile</Label>
                      <Input
                        id="linkedinProfile"
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={formData.linkedinProfile}
                        onChange={(e) => handleChange("linkedinProfile", e.target.value)}
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent1"
                          checked={formData.consent1}
                          onCheckedChange={(checked) => handleChange("consent1", checked as boolean)}
                          required
                        />
                        <Label htmlFor="consent1" className="text-sm text-muted-foreground leading-relaxed">
                          By checking this box, I agree to allow Hawkstone Global Solutions to store and process my data for the purpose of considering my eligibility regarding my current application for employment. *
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent2"
                          checked={formData.consent2}
                          onCheckedChange={(checked) => handleChange("consent2", checked as boolean)}
                        />
                        <Label htmlFor="consent2" className="text-sm text-muted-foreground leading-relaxed">
                          By checking this box, I agree to allow Hawkstone Global Solutions to retain my data for future opportunities for employment for up to 1825 days after the conclusion of consideration of my current application for employment.
                        </Label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting || !selectedJob || !formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.consent1 || !formData.consent2 || !resumeFile}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Submit Application
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </FadeInUp>
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
