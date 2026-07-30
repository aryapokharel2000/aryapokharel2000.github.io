export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  verifyUrl?: string;
}


export interface Experience {
  role: string;
  company: string;
  period: string;
  description?: string;
  highlights: string[];
}


export const certifications: Certification[] = [
  { name: "Burp Suite Certified Practitioner", issuer: "PortSwigger", verifyUrl: "https://portswigger.net/web-security/e/c/6d51ba9c877fcaee" },
  { name: "HTB Certified Penetration Testing Specialist", issuer: "Hack The Box", verifyUrl: "https://academy.hackthebox.com/achievement/badge/007ae1b4-323e-11f1-9254-bea50ffe6cb4" },
  { name: "APIsec Certified Practitioner", issuer: "APIsec University", verifyUrl: "https://www.credly.com/badges/513dc606-d1ea-473f-9348-01df311ea7ea/public_url" },
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", year: "Expired Apr 2026", verifyUrl: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=rlnj1AY+UiCoR51PNf9Qv6BTASx7xExZFA97Ig5RXvM=" },
  { name: "CRTP", issuer: "Altered Security", verifyUrl: "https://www.credential.net/55276648-0e9a-4221-8e8e-04b79006efca#acc.vyIkugTw" },
  { name: "ISO/IEC 27001 Information Security Associate™", issuer: "SkillFront", verifyUrl: "https://www.skillfront.com/Badges/41399581473270" },
  { name: "Certified AppSec Practitioner (CAP)", issuer: "The SecOps Group", verifyUrl: "https://www.credential.net/b515481a-60bd-4f96-9ad4-381e3d1cedbf?username=aryapokharel607051" },
  { name: "Certified Network Security Specialist", issuer: "DefensityOne", verifyUrl: "https://www.credential.net/49a78819-adc7-41b7-a12f-599c9eed49ae#acc.Mq4g7GLS" },
];

// ===== EXPERIENCE =====

export const experiences: Experience[] = [
  {
    role: "Application Security / Red Team Researcher",
    company: "Softwarica College of IT & E-Commerce / Coventry University",
    period: "Nov 2022 - Present",
    highlights: [
      "Deliver undergraduate lectures and practical laboratories in Application Security, Secure Software Engineering, Ethical Hacking, and Cybersecurity.",
      "Designed and developed intentionally vulnerable applications in MERN and LAMP stack to teach SSJI, Insecure Deserialization, Request Smuggling, and OWASP Top 10 exploits.",
      "Built and maintained containerised lab environments (Docker, Ludus) enabling students to practice red teaming and penetration testing in isolated settings.",
      "Developed CTF-style assessment platforms distributed as hardened VirtualBox/UTM OVA images for black-box student evaluation.",
      "Mentored students through structured assessments, report writing, and vulnerability documentation.",
    ],
  },
  {
    role: "Penetration Tester (Contractor)",
    company: "Private Engagements",
    period: "Jan 2025 - Present",
    highlights: [
      "Conduct web and mobile penetration tests for enterprise clients; identified and exploited critical vulnerabilities including SQLi, SSRF, Prototype Pollution, and RCE.",
      "Deliver validated Proof-of-Concept exploits with documented business impact.",
      "Manage full engagement lifecycle under NDA: scoping, manual exploitation, report writing, and debrief with development teams.",
      "Drive critical remediation directly through structured reporting and technical debriefs.",
    ],
  },
  {
    role: "Penetration Tester (Intern)",
    company: "Bugv",
    period: "Aug 2022 - Nov 2022",
    highlights: [
      "Validated vulnerabilities across web applications and authored exploitation documentation for client-facing security reports.",
    ],
  },
];


// ===== RESEARCH INTERESTS / FOCUS AREAS =====

export const focusAreas = [
  "GRC & Cloud Security",
  "Secure Software Development",
  "Security Education",
  "Vulnerability Research",
  "System & Network Security",
  "Web Application Security",
  "Offensive Security & Red Teaming",
];


