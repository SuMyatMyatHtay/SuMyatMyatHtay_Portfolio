export const navItems = [
  { label: "Home", href: "/" },
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

export const quickFacts = [
  "Software Engineering @ SMU",
  "AI + Full-stack Engineering",
  "Hackathon Builder",
  "Product-minded Developer",
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C#"],
  },
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Responsive UI",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "Supabase", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "AI & Automation",
    items: [
      "LLM workflows",
      "AI agents",
      "Prompt design",
      "Computer vision",
      "RAG concepts",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "GitHub", "Vercel"],
  },
  {
    title: "Creative Tech",
    items: ["Unity", "Unreal Engine", "Game development", "XR concepts"],
  },
];

export const education = [
  {
    period: "2025 — Present",
    school: "Singapore Management University",
    location: "Singapore",
    programme: "Bachelor of Science (Software Engineering)",
    description:
      "Building a stronger foundation in software engineering, product development, data, and AI while staying active in technical communities and competitions.",
    highlights: [
      "Honorary Finance Secretary, SMU Artificial Intelligence Club",
      "Participated in national and regional AI / software hackathons",
      "Student Assistant supporting university programmes and operations",
    ],
  },
  {
    period: "Before SMU",
    school: "Republic Polytechnic",
    location: "Singapore",
    programme: "School of Infocomm",
    description:
      "Developed practical computing skills through hands-on software, networking, database, web, and project-based coursework.",
    highlights: [
      "Built web, networking and software projects in team environments",
      "Represented the School of Infocomm in external competitions",
      "Active in student leadership and community-focused activities",
    ],
  },
];

export const experiences = [
  {
    period: "2025",
    organisation: "Octopus8",
    role: "Project Manager & Data Analyst",
    location: "Singapore",
    bullets: [
      "Coordinated data migration and delivery workflows across software projects.",
      "Improved analytics templates and tracked implementation progress across stakeholders.",
      "Bridged operational requirements with technical execution and data quality checks.",
    ],
  },
  {
    period: "2024",
    organisation: "Octopus8",
    role: "Business & Technology Intern",
    location: "Singapore",
    bullets: [
      "Worked across UI implementation, database structure, WordPress customisation and product support.",
      "Translated business needs into practical technical changes and implementation tasks.",
      "Supported software delivery for charity and community-oriented digital projects.",
    ],
  },
  {
    period: "2026 — Present",
    organisation: "SMU Artificial Intelligence Club",
    role: "Honorary Finance Secretary",
    location: "Singapore",
    bullets: [
      "Manage budgeting, claims and financial governance for club programmes and events.",
      "Partner with the executive committee on planning, sponsorship and operational decisions.",
      "Support an active student AI community through events, partnerships and member initiatives.",
    ],
  },
  {
    period: "University",
    organisation: "Singapore Management University",
    role: "Student Assistant",
    location: "Singapore",
    bullets: [
      "Supported course and programme operations, logistics, administrative workflows and event delivery.",
      "Balanced part-time responsibilities alongside academic and competition commitments.",
    ],
  },
];

export const projects = [
  {
    year: "2026",
    title: "AP Command Center",
    subtitle: "Supervity AutoPilot Asia Hackathon · Finance Track · 3rd Place",
    summary:
      "A governed, agentic Accounts Payable command center that automates routine invoice work while keeping humans in control of high-risk decisions.",
    highlights: [
      "Multi-agent orchestration for extraction, duplicate checks, matching, risk screening and policy decisions",
      "Human-in-the-loop approvals for vendor onboarding, bank verification and DOA exceptions",
      "Self-learning fraud pattern workflow using human-confirmed outcomes as reusable knowledge",
      "AI Insights layer for workload, queue and operational optimisation",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Supervity",
      "AI Agents",
    ],
    featured: true,
    accent: "violet",
  },
  {
    year: "2026",
    title: "Smart Tool Log Parser",
    subtitle: "National AI Student Challenge · Micron Track · Champion",
    summary:
      "An AI-powered log processing pipeline for normalising diverse equipment logs into consistent, analysis-ready data for manufacturing operations.",
    highlights: [
      "Designed a distributed end-to-end architecture for ingestion and parsing",
      "Used LLM-based extraction and normalisation to handle varying vendor and firmware log formats",
      "Added urgency classification to support anomaly detection and predictive maintenance workflows",
    ],
    stack: ["Python", "LLMs", "Data Pipelines", "AI", "System Design"],
    featured: true,
    accent: "cyan",
  },
  {
    year: "2026",
    title: "Automated Helpdesk Triage & Routing",
    subtitle: "SIM AI-GNITION",
    summary:
      "An AI-assisted support workflow designed to classify incoming requests and route them to the right handling path more quickly.",
    highlights: [
      "Focused on reducing manual triage effort and improving response consistency",
      "Designed around practical automation rather than a standalone chatbot experience",
    ],
    stack: ["AI", "Automation", "Classification", "Workflow Design"],
    featured: false,
    accent: "pink",
  },
  {
    year: "2026",
    title: "Answer and Conquer",
    subtitle: "Multiplayer Game Project",
    summary:
      "A Python/Tkinter multiplayer strategy-and-quiz game built around a 5×5 board, timed turns and networked play.",
    highlights: [
      "Implemented multiplayer socket communication and game settings",
      "Designed configurable timers, player options and board-state interactions",
    ],
    stack: ["Python", "Tkinter", "Sockets", "Game Development"],
    featured: false,
    accent: "amber",
  },
];

export const storyItems = [
  {
    id: "academic",
    label: "Academic Prizes",
    eyebrow: "tiny trophies, big memories",
    description:
      "The competitions and academic wins that made me want to keep learning, building, and trying things that once felt a little scary.",
    image: "/story/academic/national-ai-student-challenge.jpeg",
    icon: "academic" as const,
    category: "achievements" as const,
    nodeClass: "node-academic",
    tags: ["Hackathons", "AI", "Problem Solving"],
    slides: [
      {
        title: "1st Place: National AI Student Challenge",
        image: "/story/academic/national-ai-student-challenge.jpeg",
        description: "Winning first place at the National AI Student Challenge was a proud moment in my journey with AI. It is one of the memories I look back on as I keep learning and building.",
      },
      {
        title: "2nd Runner-Up: Supervity AutoPilot Asia",
        image: "/story/academic/supervity-autopilot-asia.jpeg",
        description: "Another milestone was placing second runner-up at Supervity AutoPilot Asia. This award is part of the story of how I have explored AI and turned ideas into projects.",
      },
    ],
  },
  {
    id: "sports",
    label: "Sports",
    eyebrow: "from running tracks to dance floors",
    description:
      "From running at Singapore Polytechnic to lifesaving competitions and dancing at university, here is how my sporting journey has unfolded.",
    image: "/story/sports/poly50.jpeg",
    icon: "sports" as const,
    category: "achievements" as const,
    nodeClass: "node-sports",
    tags: ["Running", "Lifesaving", "Dance"],
    slides: [
      {
        title: "2023: Poly50",
        image: "/story/sports/poly50.jpeg",
        description:
          "Back at Singapore Polytechnic, running was part of my life. This Poly50 photo takes me back to that chapter, before swimming competitions and dance became part of the story. Ohh and our team won the 5th place!",
      },
      {
        title: "2024: Nationals Still Water Competition",
        image: "/story/sports/lifesaving_nationals.jpeg",
        description:
          "In Year 3, I represented Singapore Polytechnic at the Nationals Still Water Competition. From the running track to the pool, lifesaving became the next chapter of my sporting journey.",
      },
      {
        title: "2025: Latin Dance (Caderas Latinas)",
        image: "/story/sports/latinas.jpeg",
        description:
          "When I started university, I tried a different way of moving: Latin dance with Caderas Latinas. My sporting story found its way onto the dance floor. I am the fourth one from the left!",
      },
      {
        title: "2026: Ballroom Dancing",
        image: "/story/sports/ballare.jpg",
        description:
          "Now in my second year at university, I am doing ballroom dancing with Ballare. From Poly50 to lifesaving, Latin dance and now ballroom, this is the chapter I am in today.",
      },
    ],
  },
  {
    id: "student-life",
    label: "Student Life",
    eyebrow: "the people between the classes",
    description:
      "From representing the School of Computing at Singapore Polytechnic to student leadership at SMU, these are the roles that have shaped my campus life.",
    image: "/story/student-life/soca.jpeg",
    icon: "student" as const,
    category: "community" as const,
    nodeClass: "node-student",
    tags: ["SOCA", "SOCC", "SMUAI", "Leadership"],
    slides: [
      {
        title: "SOCA: School of Computing Ambassador",
        image: "/story/student-life/soca.jpeg",
        description: "At Singapore Polytechnic, I was a School of Computing Ambassador (SOCA). Representing my school became part of my student life beyond the classroom.",
      },
      {
        title: "SOCC: Events Department Head | 2022–2024",
        image: "/story/student-life/socc.jpeg",
        description: "From 2022 to 2024, I served for two years as Events Department Head of Singapore Polytechnic's School of Computing Club (SOCC). This role was a big part of my student leadership journey at poly.",
      },
      {
        title: "SMUAI: Honorary Finance Secretary | 2026",
        image: "/story/student-life/smuai.jpeg",
        description: "In 2026, my student leadership journey continued at university as Honorary Finance Secretary of the SMU Artificial Intelligence Club (SMUAI), bringing together my interest in AI and campus life.",
      },
    ],
  },
  {
    id: "service",
    label: "Community Service",
    eyebrow: "showing up for people",
    description:
      "From two years volunteering at Newlife Child Care Center to teaching Primary 6 maths at BCare, community service has become part of my story.",
    image: "/story/community/newlife.jpeg",
    icon: "service" as const,
    category: "community" as const,
    nodeClass: "node-service",
    tags: ["Volunteering", "Children", "Teaching"],
    slides: [
      {
        title: "Newlife Child Care Center | 2022–2024",
        image: "/story/community/newlife.jpeg",
        description: "From 2022 to 2024, I volunteered at Newlife Child Care Center for two years. This was a chapter of my life spent giving my time to children in the community.",
      },
      {
        title: "BCare: Teaching Primary 6 Maths",
        image: "/story/community/bcare.jpeg",
        description: "At BCare, I teach Primary 6 maths. It is another way I contribute to the community, sharing what I know and supporting students in their learning.",
      },
    ],
  },
  {
    id: "hobbies",
    label: "Hobbies",
    eyebrow: "things I make just for fun",
    description:
      "I love making things, whether that is a pencil drawing, a 3D design, a cute animation, something in the kitchen, or a VR game.",
    image: "/story/hobbies/3d-animation.jpeg",
    icon: "hobbies" as const,
    category: "roots" as const,
    nodeClass: "node-hobbies",
    tags: ["3D Design", "Animation", "Cooking & Baking", "VR Games", "Pencil Art"],
    slides: [
      {
        title: "3D Design & Cute Animation",
        image: "/story/hobbies/3d-animation.jpeg",
        description: "I enjoy 3D design and making cute animations. It is a playful side of creating that I love exploring just for fun.",
      },
      {
        title: "Cooking & Baking",
        image: "/story/hobbies/cooking-baking.jpeg",
        description: "Away from the screen, I love cooking and baking. The kitchen is another place where I get to make something of my own.",
      },
      {
        title: "Programming VR Games",
        image: "/story/hobbies/vr-games.jpeg",
        description: "I also love programming VR games. It brings my interest in coding and creating together in an interactive world you can step into.",
      },
      {
        title: "Pencil Art",
        image: "/story/hobbies/pencil-art.jpeg",
        description: "I love drawing pencil art too. Away from digital tools, a pencil and paper give me another way to express my creativity.",
      },
    ],
  },
  {
    id: "myanmar",
    label: "Where I’m From",
    eyebrow: "my roots",
    description:
      "My story began in Myanmar and brought me to Singapore in 2022. From my childhood schools to Singapore Polytechnic and SMU, each chapter has brought new places and people into my life.",
    image: "/story/roots/total-brainworks.jpeg",
    icon: "myanmar" as const,
    category: "roots" as const,
    nodeClass: "node-myanmar",
    tags: ["Myanmar", "Singapore", "School Memories", "Friendship"],
    slides: [
      {
        title: "Childhood in Myanmar: Total Brainworks",
        image: "/story/roots/total-brainworks.jpeg",
        description: "That little kid is me! I went to Total Brainworks International School back in Myanmar. This photo takes me back to a childhood chapter, long before my move to Singapore.",
      },
      {
        title: "My Government School Days",
        image: "/story/roots/government-school.jpeg",
        description: "Another glimpse of a younger me. I also studied at a government school in Myanmar, another part of the school years that shaped my story before Singapore.",
      },
      {
        title: "2022: A New Chapter in Singapore",
        image: "/story/roots/singapore-polytechnic.jpeg",
        description: "In 2022, I came to Singapore and studied at Singapore Polytechnic. Moving from Myanmar marked the beginning of a new chapter in my life and education.",
      },
      {
        title: "SMU: University & New Friendships",
        image: "/story/roots/smu-friends.jpeg",
        description: "After graduating from Singapore Polytechnic, I continued my studies at Singapore Management University. Along the way, I have made lots of friends who are now part of my Singapore story.",
      },
    ],
  },
];

export const socials = [
  {
    label: "Email",
    value: "mmh.su.2025@computing.smu.edu.sg",
    href: "mailto:mmh.su.2025@computing.smu.edu.sg",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/su-myat-myat-htay-7342a3271",
    href: "https://linkedin.com/in/su-myat-myat-htay-7342a3271",
  },
];

// Backward-compatible exports retained for the original component files.
export const badges = skillGroups.flatMap((group) => group.items);
export const journeyItems = experiences.slice(0, 3).map((item, index) => ({
  year: item.period,
  title: `${item.role} · ${item.organisation}`,
  description: item.bullets[0],
  color: ["bg-[#ffc7de]", "bg-[#8ce7ff]", "bg-[#baf7b8]"][index],
}));
