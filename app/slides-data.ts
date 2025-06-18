export interface SlideContent {
  id: number
  title?: string
  subtitle?: string
  mainText?: string | string[]
  bulletPoints?: string[]
  visualQuery?: string // For generating placeholder images
  scriptNotes?: string // For your presentation script
  presenter?: "Fahad" | "Sameer"
  durationEstimate?: string // e.g., "30s", "1m"
  accentColor?: string // Tailwind color class e.g., 'text-cyan-400'
  layout?: "center" | "split" // Potential layout variations
}

export const slides: SlideContent[] = [
  {
    id: 1,
    title: "The Impact of Agentic AI",
    subtitle: "on the Future of Work and Skill Requirements: A Roadmap for Education and Retraining",
    mainText: ["Fahad Rashid (F2022266416)", "Sameer Abbas (F2022266420)"],
    visualQuery: "abstract futuristic technology journey beginning",
    scriptNotes:
      "Fahad: Good morning, everyone. I'm Fahad Rashid, and this is Sameer Abbas. Today, we're excited to take you on a journey into the future of work, a future increasingly shaped by Agentic AI. We'll explore its impact and propose a roadmap for how we can all adapt and thrive.",
    presenter: "Fahad",
    durationEstimate: "30s",
    accentColor: "text-sky-400",
  },
  {
    id: 2,
    title: "What is Agentic AI?",
    mainText: "The Next Leap: Autonomous Decision-Making & Independent Task Execution with Minimal Human Oversight.",
    bulletPoints: [
      "Leverages: LLMs, Machine Learning, Reinforcement Learning",
      "Beyond content generation: Performs complex tasks",
    ],
    visualQuery: "glowing central AI orb with branching decision nodes, neural network",
    scriptNotes:
      "Sameer: So, what exactly is Agentic AI? Think of it as AI that doesn't just follow instructions but can make its own decisions and act independently. It's about performing complex functions, from optimizing supply chains to personalized customer service.",
    presenter: "Sameer",
    durationEstimate: "1m",
    accentColor: "text-purple-400",
  },
  {
    id: 3,
    title: "Workforce Transformation",
    mainText: "The Landscape is Shifting Dramatically.",
    bulletPoints: [
      "92 Million Jobs Potentially Displaced by 2030",
      "170 Million New Roles Could Emerge",
      "Shift Towards: Creative & Strategic Roles",
    ],
    visualQuery: "dynamic gears shifting, old jobs fading new AI roles emerging",
    scriptNotes:
      "Fahad: This powerful technology is set to transform our workforce. Research suggests while many jobs might be displaced, an even greater number of new roles could emerge. Work isn't disappearing; it's changing.",
    presenter: "Fahad",
    durationEstimate: "1.5m",
    accentColor: "text-emerald-400",
  },
  {
    id: 4,
    title: "The Challenge: Bridging the Gap",
    mainText: "Are We Ready for These New Roles?",
    bulletPoints: ["Urgent Need for Reskilling & Upskilling", "Focus: Fostering Human-AI Collaboration"],
    visualQuery: "chasm with a glowing bridge being built, skills gap concept",
    scriptNotes:
      "Sameer: This transformation presents a challenge: Are we prepared? There's an urgent need to reskill and upskill, to build a bridge between current capabilities and future demands. Our focus must be on effective human-AI collaboration.",
    presenter: "Sameer",
    durationEstimate: "1m",
    accentColor: "text-amber-400",
  },
  {
    id: 5,
    title: "Essential Skills for the Future (1/2)",
    mainText: "Navigating the AI Era: Key Competencies",
    bulletPoints: [
      "1. Prompt Engineering: Guiding AI (Up to 85% performance boost!)",
      "2. AI Literacy: Understanding AI's power, limits & ethics",
    ],
    visualQuery: "stylized icon prompt engineering speech bubble AI brain, human silhouette understanding AI core",
    scriptNotes:
      "Fahad: So, what skills are crucial? First, Prompt Engineering – crafting precise instructions for AI. Second, AI Literacy – a fundamental understanding of AI's capabilities, limitations, and ethical implications.",
    presenter: "Fahad",
    durationEstimate: "1.5m",
    accentColor: "text-rose-400",
  },
  {
    id: 6,
    title: "Essential Skills for the Future (2/2)",
    mainText: "Essential Skills (Continued)",
    bulletPoints: [
      "3. Technical Skills: Building & managing AI (ML, Data Science)",
      "4. Soft Skills: The human touch (Creativity, Critical Thinking, EQ)",
      "5. Domain Expertise: Industry-specific knowledge",
    ],
    visualQuery:
      "icons for technical skills gears code, soft skills heart brain handshake, domain expertise industry symbol",
    scriptNotes:
      "Sameer: Then, Technical Skills like machine learning. Equally important are Soft Skills – creativity, critical thinking, emotional intelligence. And Domain Expertise ensures AI is applied effectively.",
    presenter: "Sameer",
    durationEstimate: "1.5m",
    accentColor: "text-indigo-400",
  },
  {
    id: 7,
    title: "Our Investigation: Methodology",
    mainText: "Synthesizing Knowledge for Actionable Insights",
    bulletPoints: [
      "Narrative Literature Review",
      "50 Diverse Sources (2023-2025)",
      "Academic Papers, Industry Reports, Expert Analyses",
      "Goal: Identify key skills & educational strategies",
    ],
    visualQuery: "abstract data points converging into insights, research methodology concept",
    scriptNotes:
      "Fahad: To understand this, we conducted a comprehensive literature review, synthesizing insights from 50 recent sources to pinpoint essential skills and educational strategies.",
    presenter: "Fahad",
    durationEstimate: "30s",
    accentColor: "text-lime-400",
  },
  {
    id: 8,
    title: "Key Findings: Core Skills Confirmed",
    mainText: "The Pillars of Human-AI Collaboration:",
    bulletPoints: ["Prompt Engineering", "AI Literacy", "Technical Skills", "Soft Skills", "Domain Expertise"],
    visualQuery: "five skill icons interconnected, synergy concept",
    scriptNotes:
      "Sameer: Our findings consistently highlighted these five core skills as the pillars for effective human-AI collaboration, allowing us to leverage AI's power while navigating its complexities.",
    presenter: "Sameer",
    durationEstimate: "1m",
    accentColor: "text-teal-400",
  },
  {
    id: 9,
    title: "Education: Progress & Pitfalls",
    mainText: "Current Landscape: Initiatives and Gaps",
    bulletPoints: [
      "Progress: Online platforms (Coursera), University programs (MIT), Corporate training (PwC, Intel)",
      "Gaps: Lack of cohesive roadmap, Overemphasis on tech, Neglect of soft skills & AI literacy, Accessibility issues",
    ],
    visualQuery: "split screen positive examples education logos, other side puzzle pieces not fitting gap",
    scriptNotes:
      "Fahad: Educational institutions and companies are responding with initiatives. However, gaps remain: a need for a cohesive roadmap, better balance in skill focus, and improved accessibility.",
    presenter: "Fahad",
    durationEstimate: "1.5m",
    accentColor: "text-cyan-400",
  },
  {
    id: 10,
    title: "Proposed Roadmap (1/3): Foundations",
    mainText: "Building the Future: Starting Early",
    bulletPoints: [
      "1. K-12 Education: Integrate AI Literacy & Digital Skills. Project-based learning.",
      "2. Higher Education: Specialized AI degrees. AI across disciplines. Internships & AI labs.",
    ],
    visualQuery: "stylized roadmap first two milestones K-12 Higher Ed, icons AI literacy schools specialized degrees",
    scriptNotes:
      "Sameer: We propose a multi-tiered roadmap. It starts in K-12, integrating AI literacy. In Higher Education, we need specialized degrees and AI skills woven across all disciplines, with hands-on experience.",
    presenter: "Sameer",
    durationEstimate: "1.5m",
    accentColor: "text-sky-400",
  },
  {
    id: 11,
    title: "Proposed Roadmap (2/3): Advancement",
    mainText: "Empowering the Workforce",
    bulletPoints: [
      "3. Professional Development: Practical training (Prompt Engineering!). Scalable online learning. Certifications.",
      "4. Industry Collaboration: Co-develop curricula. Apprenticeships. Advisory boards.",
    ],
    visualQuery:
      "roadmap continues milestones Professional Dev Industry Collab, icons online courses certifications industry partnerships",
    scriptNotes:
      "Fahad: For the current workforce, Professional Development is key, with practical training and certifications. Crucially, Industry Collaboration is needed to align curricula with real-world job needs.",
    presenter: "Fahad",
    durationEstimate: "1.5m",
    accentColor: "text-purple-400",
  },
  {
    id: 12,
    title: "Proposed Roadmap (3/3): Sustainability",
    mainText: "Ensuring Lasting Impact",
    bulletPoints: [
      "5. Lifelong Learning: Promote continuous education. Culture of adaptability.",
      "6. Inclusive Access: Affordable & accessible for ALL. Outreach to underrepresented groups. Mentoring.",
    ],
    visualQuery:
      "final roadmap milestones Lifelong Learning Inclusive Access, icons continuous learning diverse people",
    scriptNotes:
      "Sameer: The journey requires a culture of Lifelong Learning. And most importantly, all this must be built on Inclusive Access – ensuring opportunities are available to everyone.",
    presenter: "Sameer",
    durationEstimate: "1.5m",
    accentColor: "text-emerald-400",
  },
  {
    id: 13,
    title: "Conclusion: Embracing the Agentic Future",
    mainText: "Challenges & Opportunities Ahead",
    bulletPoints: [
      "Cultivate Key Skills + Implement Roadmap = Prepared Workforce",
      "Mitigate Risks | Promote Inclusivity | Unlock Innovation",
    ],
    visualQuery: "hopeful forward-looking image sunrise over tech cityscape diverse people collaborating AI",
    scriptNotes:
      "Fahad: In conclusion, Agentic AI brings challenges and opportunities. By cultivating key skills and implementing this roadmap, we can prepare our workforce to thrive, mitigate risks, promote inclusivity, and unlock innovation.",
    presenter: "Fahad",
    durationEstimate: "1m",
    accentColor: "text-amber-400",
  },
  {
    id: 14,
    title: "Thank You",
    mainText: "Questions?",
    bulletPoints: ["Fahad Rashid (F2022266416)", "Sameer Abbas (F2022266420)"],
    visualQuery: "clean simple thank you slide, university logo subtle animation",
    scriptNotes: "Sameer: Thank you for joining us on this journey. We're now happy to answer any questions.",
    presenter: "Sameer",
    durationEstimate: "30s",
    accentColor: "text-rose-400",
  },
]
