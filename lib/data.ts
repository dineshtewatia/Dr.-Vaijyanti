import {
  Activity,
  BadgeCheck,
  Brain,
  Building2,
  CircleDollarSign,
  ClipboardCheck,
  HeartPulse,
  Plane,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users
} from "lucide-react";

export type Treatment = {
  slug: string;
  title: string;
  specialty: string;
  description: string;
  idealFor: string;
  duration: string;
  recovery: string;
  indiaCost: string;
  usCost: string;
  ukCost: string;
  savings: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
};

export type Hospital = {
  name: string;
  city: string;
  accreditations: string[];
  specialties: string[];
  rooms: string;
  image: string;
};

export type Doctor = {
  name: string;
  role: string;
  hospital: string;
  experience: string;
  languages: string[];
  expertise: string[];
};

export const navItems = [
  { href: "/#appointment", label: "Appointment" },
  { href: "/#services", label: "Services" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" }
];

export const treatments: Treatment[] = [
  {
    slug: "cardiac-surgery-india",
    title: "Cardiac Surgery in India",
    specialty: "Cardiology",
    description:
      "Advanced bypass, valve, minimally invasive, and pediatric cardiac procedures coordinated at internationally accredited cardiac centers.",
    idealFor: "Patients seeking high-end cardiac care with faster scheduling and concierge recovery support.",
    duration: "10-21 days",
    recovery: "4-8 weeks",
    indiaCost: "$6,500-$14,000",
    usCost: "$70,000-$150,000",
    ukCost: "$35,000-$80,000",
    savings: "Up to 85%",
    highlights: ["JCI/NABH cardiac centers", "Robotic and minimally invasive options", "Dedicated ICU coordination"],
    faqs: [
      {
        question: "How quickly can surgery be scheduled?",
        answer: "Most reviewed cardiac cases can receive a specialist plan within 48 hours and tentative surgery dates within a week."
      },
      {
        question: "Is post-surgery follow-up included?",
        answer: "Yes. Curivora coordinates virtual follow-ups, medication plans, and recovery milestones after travel."
      }
    ]
  },
  {
    slug: "orthopedic-joint-replacement-india",
    title: "Joint Replacement in India",
    specialty: "Orthopedics",
    description:
      "Premium hip, knee, shoulder, and revision joint replacement programs with navigation-assisted surgery and physiotherapy planning.",
    idealFor: "Patients with severe arthritis, trauma, limited mobility, or failed prior implants.",
    duration: "12-18 days",
    recovery: "6-12 weeks",
    indiaCost: "$4,800-$9,500",
    usCost: "$38,000-$75,000",
    ukCost: "$18,000-$36,000",
    savings: "Up to 80%",
    highlights: ["Computer-navigated implants", "Private rehab planning", "Airport-to-suite mobility support"],
    faqs: [
      {
        question: "Can both knees be replaced in one trip?",
        answer: "Selected patients may be eligible after surgical assessment, cardiac clearance, and mobility evaluation."
      },
      {
        question: "Do packages include physiotherapy?",
        answer: "Most Curivora orthopedic plans include in-hospital physiotherapy and a home recovery protocol."
      }
    ]
  },
  {
    slug: "oncology-treatment-india",
    title: "Cancer Treatment in India",
    specialty: "Oncology",
    description:
      "Integrated medical, surgical, radiation, immunotherapy, and precision oncology pathways with tumor board review.",
    idealFor: "Patients needing second opinions, faster diagnostics, complex surgery, or ongoing chemotherapy coordination.",
    duration: "2-8 weeks",
    recovery: "Case dependent",
    indiaCost: "$3,000-$22,000",
    usCost: "$45,000-$250,000",
    ukCost: "$20,000-$120,000",
    savings: "Up to 78%",
    highlights: ["Tumor board review", "PET-CT and genomic testing", "Personal care navigator"],
    faqs: [
      {
        question: "Can Curivora arrange a second opinion?",
        answer: "Yes. We collect reports, imaging, pathology, and prior protocols for a specialist opinion."
      },
      {
        question: "Are long treatments possible for international patients?",
        answer: "Yes. Plans can combine India-based treatment blocks with remote monitoring between visits."
      }
    ]
  },
  {
    slug: "fertility-ivf-india",
    title: "IVF and Fertility Care in India",
    specialty: "Fertility",
    description:
      "Discreet IVF, ICSI, fertility preservation, donor programs, and advanced diagnostics delivered with privacy-first coordination.",
    idealFor: "Individuals and couples seeking transparent, expert-led reproductive medicine support.",
    duration: "14-28 days",
    recovery: "Minimal downtime",
    indiaCost: "$2,500-$6,500",
    usCost: "$15,000-$30,000",
    ukCost: "$8,000-$18,000",
    savings: "Up to 75%",
    highlights: ["High-touch privacy", "Embryology lab selection", "Protocol and travel timing coordination"],
    faqs: [
      {
        question: "Can treatment start before travel?",
        answer: "Initial fertility assessment and protocol planning can begin remotely with lab and scan review."
      },
      {
        question: "Is patient privacy protected?",
        answer: "Curivora uses consent-led communication and secure report handling for all fertility cases."
      }
    ]
  },
  {
    slug: "transplant-programs-india",
    title: "Transplant Programs in India",
    specialty: "Transplant",
    description:
      "Liver, kidney, and bone marrow transplant guidance with ethics, documentation, specialist review, and family support.",
    idealFor: "Patients with eligible donor pathways and complex international documentation needs.",
    duration: "4-12 weeks",
    recovery: "3-6 months",
    indiaCost: "$18,000-$55,000",
    usCost: "$250,000-$900,000",
    ukCost: "$110,000-$320,000",
    savings: "Up to 90%",
    highlights: ["Documentation guidance", "Transplant board assessment", "Long-stay family concierge"],
    faqs: [
      {
        question: "Can Curivora find an organ donor?",
        answer: "No. Curivora only supports legally compliant, ethically reviewed donor pathways."
      },
      {
        question: "What documents are required?",
        answer: "Requirements vary by transplant type, donor relationship, nationality, and hospital ethics protocols."
      }
    ]
  },
  {
    slug: "neurosurgery-india",
    title: "Neurosurgery in India",
    specialty: "Neurosciences",
    description:
      "Brain, spine, epilepsy, aneurysm, and complex neurosurgery programs with advanced imaging and neurocritical care.",
    idealFor: "Patients seeking specialist review for complex brain or spine conditions.",
    duration: "10-30 days",
    recovery: "4-16 weeks",
    indiaCost: "$7,500-$28,000",
    usCost: "$80,000-$220,000",
    ukCost: "$40,000-$120,000",
    savings: "Up to 82%",
    highlights: ["Advanced imaging review", "Neuro ICU access", "Spine and brain sub-specialists"],
    faqs: [
      {
        question: "Can imaging be reviewed remotely?",
        answer: "Yes. MRI, CT, angiography, and prior operative notes can be reviewed before travel."
      },
      {
        question: "Are emergency cases accepted?",
        answer: "Curivora can escalate urgent opinions, but emergency travel depends on clinical stability and visa feasibility."
      }
    ]
  }
];

export const hospitals: Hospital[] = [
  {
    name: "Aster Meridian International",
    city: "Bengaluru",
    accreditations: ["JCI", "NABH"],
    specialties: ["Cardiac Sciences", "Transplant", "Robotic Surgery"],
    rooms: "Signature recovery suites",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Lotus Global Cancer Institute",
    city: "Mumbai",
    accreditations: ["NABH", "CAP Lab"],
    specialties: ["Oncology", "Radiation", "Precision Medicine"],
    rooms: "Private oncology lounges",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Sanjeevani Advanced Ortho Center",
    city: "Delhi NCR",
    accreditations: ["NABH"],
    specialties: ["Joint Replacement", "Sports Medicine", "Spine"],
    rooms: "Rehab-connected suites",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1200&q=80"
  }
];

export const doctors: Doctor[] = [
  {
    name: "Dr. Anika Mehra",
    role: "Senior Cardiac Surgeon",
    hospital: "Aster Meridian International",
    experience: "24 years",
    languages: ["English", "Hindi", "Arabic"],
    expertise: ["CABG", "Valve repair", "Minimally invasive cardiac surgery"]
  },
  {
    name: "Dr. Rohan Iyer",
    role: "Director, Orthopedic Reconstruction",
    hospital: "Sanjeevani Advanced Ortho Center",
    experience: "21 years",
    languages: ["English", "Hindi", "French"],
    expertise: ["Robotic knee replacement", "Hip replacement", "Revision joints"]
  },
  {
    name: "Dr. Farah Qureshi",
    role: "Consultant Medical Oncologist",
    hospital: "Lotus Global Cancer Institute",
    experience: "18 years",
    languages: ["English", "Urdu", "Swahili"],
    expertise: ["Breast cancer", "Immunotherapy", "Tumor board planning"]
  },
  {
    name: "Dr. Dev Raman",
    role: "Lead Neurosurgeon",
    hospital: "Aster Meridian International",
    experience: "20 years",
    languages: ["English", "Hindi", "Spanish"],
    expertise: ["Brain tumors", "Spine surgery", "Aneurysm clipping"]
  }
];

export const journeySteps = [
  { title: "Share Records", text: "Upload reports, scans, diagnosis notes, and personal priorities through a secure intake.", icon: ClipboardCheck },
  { title: "Specialist Opinion", text: "Curivora curates hospital and doctor options with estimated cost, stay, and recovery plan.", icon: Stethoscope },
  { title: "Travel Concierge", text: "Visa support, airport arrival, accommodation, interpreter, and local SIM coordination.", icon: Plane },
  { title: "Treatment in India", text: "A dedicated care manager tracks appointments, admission, consent, billing, and family needs.", icon: HeartPulse },
  { title: "Recovery and Follow-up", text: "Discharge, medication, rehab, remote follow-ups, and records handover are coordinated.", icon: BadgeCheck }
];

export const successStories = [
  {
    name: "Amara, Kenya",
    treatment: "Cardiac valve repair",
    quote: "Curivora turned a frightening trip into a calm, precise plan. My family always knew what came next.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    name: "Michael, United Kingdom",
    treatment: "Robotic knee replacement",
    quote: "The cost transparency and rehab support were exceptional. It felt like healthcare with a private concierge.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    name: "Noura, UAE",
    treatment: "Fertility care",
    quote: "Everything was discreet and deeply respectful. We had one point of contact from first call to follow-up.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const blogPosts = [
  {
    slug: "medical-visa-india-guide",
    title: "Medical Visa for India: A Patient-Friendly Guide",
    excerpt: "Documents, timelines, attendant visas, and what international patients should prepare before booking care.",
    category: "Travel Planning",
    readTime: "6 min read"
  },
  {
    slug: "how-to-compare-hospital-quotes",
    title: "How to Compare Hospital Quotes Without Missing Hidden Costs",
    excerpt: "A practical framework for comparing surgeon fees, implants, ICU, diagnostics, medicines, and recovery stays.",
    category: "Cost Clarity",
    readTime: "5 min read"
  },
  {
    slug: "why-india-for-robotic-surgery",
    title: "Why India Is Becoming a Hub for Robotic Surgery",
    excerpt: "Experienced surgeons, modern equipment, and shorter waiting times are changing global patient decisions.",
    category: "Clinical Quality",
    readTime: "7 min read"
  }
];

export const trustStats = [
  { label: "Partner hospitals", value: "38+", icon: Building2 },
  { label: "Global patient regions", value: "42", icon: Users },
  { label: "Average planning time", value: "48h", icon: Activity },
  { label: "Typical savings", value: "60-85%", icon: CircleDollarSign }
];

export const whyIndia = [
  { title: "World-class specialists", text: "India combines high surgical volumes with internationally trained clinicians.", icon: Stethoscope },
  { title: "Transparent affordability", text: "Treatment packages can cost a fraction of US, UK, and GCC private care.", icon: CircleDollarSign },
  { title: "Faster access", text: "Consults, diagnostics, and surgery dates are often available in days, not months.", icon: Sparkles },
  { title: "Accredited ecosystems", text: "JCI and NABH hospitals offer modern ICUs, labs, robotic systems, and private rooms.", icon: ShieldCheck },
  { title: "Concierge recovery", text: "Hotels, translators, family support, nutrition, and follow-ups are planned as one journey.", icon: HeartPulse },
  { title: "Multilingual care", text: "Curivora prepares Arabic, French, Russian, Swahili, Spanish, and Bengali workflows.", icon: Brain }
];
