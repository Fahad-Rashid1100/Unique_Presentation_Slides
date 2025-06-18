// Using a more descriptive name for the data file
import type React from "react"
import {
  Presentation,
  Users,
  Cpu,
  BrainCircuit,
  TrendingUp,
  Briefcase,
  Lightbulb,
  Wrench,
  GraduationCap,
  BookOpen,
  UsersRound,
  Handshake,
  InfinityIcon,
  Scale,
  ShieldCheck,
  Target,
  Zap,
  MessageSquare,
  Code2,
  Heart,
  Eye,
  CloudCog,
  Building,
  Network,
  DollarSign,
  Globe,
  CheckCircle,
  HelpCircle,
  User,
  FileText,
  Sparkles,
  Layers,
  Shuffle,
  BarChart3,
  Settings2,
  GitFork,
  Factory,
  Clock,
  AlertTriangle,
  Palette,
  LayoutGrid,
  ListChecks,
  ArrowRight,
  Quote,
  University,
  Award,
  CloudUpload,
  Link,
  SearchCode,
  BrainCog,
  MessageCircleIcon,
  StarIcon,
  Plus,
  BookMarked,
  Search,
  FileSearch,
  ClipboardCheck,
  Route,
  Puzzle,
  PenToolIcon as Tool,
  Twitter,
  BookCopy,
  FlaskConical,
  Newspaper,
  CloudyIcon as Transparent,
  School
} from "lucide-react"

// Comprehensive Icon Map
export const IconMap = {
  Presentation,
  Users,
  Cpu,
  BrainCircuit,
  TrendingUp,
  Briefcase,
  Lightbulb,
  Wrench,
  GraduationCap,
  BookOpen,
  UsersRound,
  Handshake,
  InfinityIcon,
  Scale,
  ShieldCheck,
  Target,
  Zap,
  MessageSquare, // Original, if used by other layouts
  MessageCircleIcon, // Specific for this new data if needed
  Code2,
  Heart,
  Eye,
  CloudCog,
  Building,
  Network,
  DollarSign,
  Globe,
  CheckCircle,
  HelpCircle,
  User,
  FileText,
  Sparkles,
  Layers,
  Shuffle,
  BarChart3,
  Settings2,
  GitFork,
  Factory,
  Clock,
  AlertTriangle,
  Palette,
  LayoutGrid,
  ListChecks,
  ArrowRight,
  Quote,
  University,
  Award,
  CloudUpload,
  Link,
  SearchCode,
  BrainCog,
  StarIcon,
  Plus,
  BookMarked, // For literature review/sources
  Search, // For web searches
  FileSearch, // For article reviews
  ClipboardCheck, // For synthesis/conclusions
  Route, // For roadmap
  Puzzle, // For challenges
  Tool, // For tools
  Twitter, // For X (Twitter) posts
  BookCopy, // For case studies
  FlaskConical, // For methodology/research process
  Newspaper, // For industry reports
  Transparent, // Added for placeholder icon
  School,
}

// Types from existing layouts (assuming they are still relevant)
export type CardItem = {
  id: string
  icon?: React.ElementType
  iconClass?: string
  title: string
  text: string
  accentColor?: string
}

// Updated PillStatItem to better reflect its potential use as a concluding remark
export type PillStatItem = {
  id: string
  icon?: React.ElementType
  iconClass?: string
  label: string // Main text for the remark
  value?: string // Optional secondary text or symbol (like a checkmark)
  bgColor?: string
  isRemark?: boolean // Flag to indicate it's a concluding remark
}

export type IconListItem = {
  id: string
  icon?: React.ElementType
  iconClass?: string
  title: string
  text: string // Can be used for description or source
  subtext?: string // For additional details like URLs
}

export type SkillIntegrationStep = {
  id: string
  icon: React.ElementType
  text: string
  connector?: "+" | "→"
}

// Main Slide Definition
export type SlideDefinition = {
  id: string
  layout:
    | "TitleLayout"
    | "IntroCardsLayout"
    | "DefinitionListLayout"
    | "KeyConsiderationsLayout"
    | "SkillsHighlightLayout"
    | "QaLayout"
  backgroundQuery: string
  steps?: number
  content: any
}

export const slides: SlideDefinition[] = [
  // Slide 1: Title Slide for the Process Presentation
  {
    id: "proc-s1-title",
    layout: "TitleLayout",
    backgroundQuery: "abstract blueprint design, research methodology, gears turning",
    steps: 4,
    content: {
      mainTitle: "Our Research Journey: Crafting the Agentic AI Paper",
      subTitle: "A Look into the Development Process",
      presenters: "Fahad Rashid & Sameer Abbas",
      date: "June 2025",
    },
  },
  // Slide 2: Introduction to the Process
  {
    id: "proc-s2-intro",
    layout: "KeyConsiderationsLayout",
    backgroundQuery: "pathway unfolding, steps in a process, interconnected nodes",
    steps: 4, // Title, Overview (points), Phases Intro (considerations title), Phases List (considerations)
    content: {
      mainTitle: "Documenting Our Path",
      points: [
        {
          id: "p1",
          icon: IconMap.FlaskConical,
          iconClass: "text-sky-400",
          title: "Research Paper Focus",
          text: '"The Impact of Agentic AI on the Future of Work and Skill Requirements: A Roadmap for Education and Retraining".',
        },
        {
          id: "p2",
          icon: IconMap.FileText,
          iconClass: "text-emerald-400",
          title: "This Presentation",
          text: "Details the comprehensive 7-phase process undertaken to develop the paper.",
        },
        {
          id: "p3",
          icon: IconMap.Transparent, // Using Transparent icon
          iconClass: "text-amber-400",
          title: "Goal: Transparency",
          text: "To provide a clear account of methodology, sources, and reasoning.",
        },
      ],
      considerationsTitle: "Seven Phases of Development",
      considerations: [
        { id: "con1", icon: IconMap.Lightbulb, text: "1. Understanding Agentic AI" },
        { id: "con2", icon: IconMap.BookMarked, text: "2. Literature Review" },
        { id: "con3", icon: IconMap.Wrench, text: "3. Identifying Skills" },
        { id: "con4", icon: IconMap.GraduationCap, text: "4. Exploring Education" },
        { id: "con5", icon: IconMap.Route, text: "5. Formulating Roadmap" },
        { id: "con6", icon: IconMap.BookCopy, text: "6. Incorporating Case Studies" },
        { id: "con7", icon: IconMap.ClipboardCheck, text: "7. Synthesis & Conclusion" },
      ],
    },
  },
  // Slide 3: Phase 1 - Understanding Agentic AI
  {
    id: "proc-s3-phase1-understanding",
    layout: "DefinitionListLayout",
    backgroundQuery: "glowing AI core, decision nodes, abstract intelligence",
    steps: 4, // Title+Subtitle, Section1 (Def), Section2 (Sources)
    content: {
      mainTitle: "Phase 1: Understanding Agentic AI",
      mainSubtitle: "Laying the Foundation",
      sections: [
        {
          id: "def",
          title: "Defining Agentic AI",
          items: [
            {
              id: "def1",
              icon: IconMap.BrainCircuit,
              title: "Core Concept",
              text: "AI systems capable of independent decision-making, planning, and task execution with minimal human oversight.",
            },
            {
              id: "def2",
              icon: IconMap.Shuffle,
              title: "Key Differentiators",
              text: "Leverages LLMs, ML, Reinforcement Learning. Focus on complex functions, not just content generation.",
              subtext: "Distinguished by autonomy and adaptability.",
            },
          ],
        },
        {
          id: "src",
          title: "Key Initial Sources",
          items: [
            {
              id: "src1",
              icon: IconMap.Link,
              title: "Harvard Business Review",
              text: "Insight into how it will change work.",
            },
            {
              id: "src2",
              icon: IconMap.Link,
              title: "IBM & UiPath",
              text: "Clarified autonomy vs. other AI paradigms.",
            },
          ],
        },
      ],
    },
  },
  // Slide 4: Phase 2 - Literature Review
  {
    id: "proc-s4-phase2-litreview",
    layout: "KeyConsiderationsLayout",
    backgroundQuery: "network of interconnected papers, data analysis, knowledge synthesis",
    steps: 4, // Title, Process/Scope (points), Key Findings (considerations)
    content: {
      mainTitle: "Phase 2: Literature Review on Workforce Impact",
      points: [
        {
          id: "p1",
          icon: IconMap.BookMarked,
          iconClass: "text-purple-400",
          title: "Methodology",
          text: "Narrative literature review synthesizing diverse sources.",
        },
        {
          id: "p2",
          icon: IconMap.FileSearch,
          iconClass: "text-sky-400",
          title: "Scope & Sources",
          text: "50 sources (2023-2025): Academic papers, industry reports, expert analyses from arXiv, ScienceDirect, etc.",
        },
        {
          id: "p3",
          icon: IconMap.Target,
          iconClass: "text-emerald-400",
          title: "Focus Areas",
          text: "Agentic AI, workforce transformation, and skill requirements.",
        },
      ],
      considerationsTitle: "Key Findings from Literature",
      considerations: [
        {
          id: "con1",
          icon: IconMap.TrendingUp,
          iconClass: "text-green-400",
          text: "Job Displacement & Creation: 92M displaced, 170M new roles by 2030 (McKinsey).",
        },
        {
          id: "con2",
          icon: IconMap.UsersRound,
          iconClass: "text-amber-400",
          text: "Shift in Roles: Towards creative, strategic roles complementing AI (WEF).",
        },
        {
          id: "con3",
          icon: IconMap.AlertTriangle,
          iconClass: "text-red-400",
          text: "Inclusivity Concerns: Risks for women & low-income regions (ResearchGate).",
        },
        {
          id: "con4",
          icon: IconMap.Sparkles,
          iconClass: "text-rose-400",
          text: "Efficiency & Risks: Insights on gains and biases (UC Berkeley, ScienceDirect).",
        },
      ],
    },
  },
  // Slide 5: Phase 3 - Identifying Required Skills
  {
    id: "proc-s5-phase3-skills",
    layout: "DefinitionListLayout",
    backgroundQuery: "stylized skill icons connecting, human-AI interface",
    steps: 4, // Title+Subtitle, Core Skills Section, Expert Opinions Section
    content: {
      mainTitle: "Phase 3: Identifying Required Skills",
      mainSubtitle: "Core Competencies for Human-AI Collaboration",
      sections: [
        {
          id: "core",
          title: "Five Core Skills Identified",
          items: [
            {
              id: "skill1",
              icon: IconMap.SearchCode,
              title: "Prompt Engineering",
              text: "Crafting precise inputs. Can improve AI performance by up to 85%.",
              subtext: "Sources: Salesforce, Neople",
            },
            {
              id: "skill2",
              icon: IconMap.BrainCog,
              title: "AI Literacy",
              text: "Understanding AI capabilities, limitations, and ethics.",
              subtext: "Source: World Economic Forum",
            },
            {
              id: "skill3",
              icon: IconMap.Code2,
              title: "Technical Skills",
              text: "Proficiency in ML, data science, software engineering.",
              subtext: "Source: ScienceDirect",
            },
            {
              id: "skill4",
              icon: IconMap.Heart,
              title: "Soft Skills",
              text: "Creativity, critical thinking, emotional intelligence.",
              subtext: "Source: World Economic Forum",
            },
            {
              id: "skill5",
              icon: IconMap.Briefcase,
              title: "Domain Expertise",
              text: "Industry-specific knowledge for AI application.",
              subtext: "Source: Taylor & Francis",
            },
          ],
        },
        {
          id: "experts",
          title: "Expert Opinions (from X)",
          items: [
            {
              id: "exp1",
              icon: IconMap.Twitter,
              title: "@ElliotSecOps",
              text: "Emphasized deep learning and NLP skills.",
            },
            {
              id: "exp2",
              icon: IconMap.Twitter,
              title: "@gokulr",
              text: "Predicted white-collar jobs involve data prep & prompt crafting.",
            },
          ],
        },
      ],
    },
  },
  // Slide 6: Phase 4 - Exploring Educational Programs
  {
    id: "proc-s6-phase4-education",
    layout: "KeyConsiderationsLayout",
    backgroundQuery: "educational institutions, online learning platforms, graduation caps",
    steps: 4, // Title, Current Initiatives (points), Gaps Identified (considerations)
    content: {
      mainTitle: "Phase 4: Exploring Educational Programs",
      points: [
        {
          id: "p1",
          icon: IconMap.CloudUpload,
          iconClass: "text-sky-400",
          title: "Online Platforms",
          text: "Coursera, edX offering prompt engineering & AI fundamentals.",
        },
        {
          id: "p2",
          icon: IconMap.University,
          iconClass: "text-purple-400",
          title: "Higher Education",
          text: "MIT providing specialized AI degrees with technical/ethical training.",
        },
        {
          id: "p3",
          icon: IconMap.Building,
          iconClass: "text-emerald-400",
          title: "Corporate Programs",
          text: "PwC, Intel training millions in AI collaboration skills.",
        },
      ],
      considerationsTitle: "Identified Gaps",
      considerations: [
        {
          id: "con1",
          icon: IconMap.Puzzle,
          iconClass: "text-amber-400",
          text: "Lack of cohesive, comprehensive programs tailored to human-AI collaboration.",
        },
        {
          id: "con2",
          icon: IconMap.AlertTriangle,
          iconClass: "text-red-400",
          text: "Prompted the need for a strategic roadmap to address these shortcomings.",
        },
      ],
    },
  },
  // Slide 7: Phase 5 - Formulating the Roadmap
  {
    id: "proc-s7-phase5-roadmap",
    layout: "DefinitionListLayout",
    backgroundQuery: "strategic map, interconnected pathways, future planning",
    steps: 4, // Title+Subtitle, Roadmap Components Section, Supporting Evidence Section
    content: {
      mainTitle: "Phase 5: Formulating the Roadmap",
      mainSubtitle: "A Multi-Tiered Strategy for Skill Development",
      sections: [
        {
          id: "components",
          title: "Roadmap Components",
          items: [
            {
              id: "rc1",
              icon: IconMap.School,
              title: "K-12 Education",
              text: "Integrate AI literacy, project-based learning.",
            },
            {
              id: "rc2",
              icon: IconMap.GraduationCap,
              title: "Higher Education",
              text: "AI degrees, collaboration skills, hands-on experience.",
            },
            {
              id: "rc3",
              icon: IconMap.Wrench,
              title: "Professional Development",
              text: "Training in prompt engineering, data literacy, certifications.",
            },
            {
              id: "rc4",
              icon: IconMap.Handshake,
              title: "Industry Collaboration",
              text: "Partner with tech firms, apprenticeships, advisory boards.",
            },
            {
              id: "rc5",
              icon: IconMap.InfinityIcon,
              title: "Lifelong Learning",
              text: "Promote continuous education via workshops, online courses.",
            },
            {
              id: "rc6",
              icon: IconMap.Globe,
              title: "Inclusive Access",
              text: "Affordability, engage underrepresented groups, mentoring.",
            },
          ],
        },
        {
          id: "support",
          title: "Supporting Evidence",
          items: [
            {
              id: "sup1",
              icon: IconMap.CheckCircle,
              title: "Global Initiatives",
              text: "Referenced Singapore’s SkillsFuture & Canada’s AI Strategy for feasibility.",
            },
          ],
        },
      ],
    },
  },
  // Slide 8: Phase 6 - Incorporating Case Studies
  {
    id: "proc-s8-phase6-casestudies",
    layout: "IntroCardsLayout",
    backgroundQuery: "real-world examples, company logos, success stories",
    steps: 5, // Title, Card1, Card2, Card3, Concluding Remark (formerly stats)
    content: {
      title: "Phase 6: Incorporating Case Studies",
      cards: [
        {
          id: "cs1",
          icon: IconMap.Briefcase,
          iconClass: "text-blue-400",
          title: "PwC",
          text: "Trained over 8.3M employees in AI skills (technical & soft). Source: Virtasant",
        },
        {
          id: "cs2",
          icon: IconMap.Cpu,
          iconClass: "text-teal-400",
          title: "Intel AI Workforce Program",
          text: "Partners with 110 U.S. community colleges for AI certificates. Source: Intel",
        },
        {
          id: "cs3",
          icon: IconMap.CloudCog,
          iconClass: "text-orange-400",
          title: "AWS Skills to Jobs Tech Alliance",
          text: "Collaborates to modernize tech curricula. Source: WEF",
        },
      ],
      statsTitle: "", // No separate title for the remark needed
      stats: [
        // Using 'stats' array for the single concluding remark
        {
          id: "remark1",
          label: "Demonstrated Practical Applications of the Proposed Roadmap",
          value: "✓", // Checkmark as value
          icon: IconMap.CheckCircle,
          iconClass: "text-green-400",
          isRemark: true, // Flag this as a remark
        },
      ],
    },
  },
  // Slide 9: Phase 7 - Discussion and Conclusion (of the paper)
  {
    id: "proc-s9-phase7-discussion",
    layout: "KeyConsiderationsLayout",
    backgroundQuery: "synthesized ideas, thought bubbles, final analysis",
    steps: 4, // Title, Key Discussion Points (points), Conclusion Summary (considerations)
    content: {
      mainTitle: "Phase 7: Discussion & Conclusion (Paper Synthesis)",
      points: [
        {
          id: "p1",
          icon: IconMap.MessageSquare,
          iconClass: "text-sky-400",
          title: "Novel Role of Prompt Engineering",
          text: "Emphasized its significance in effective AI interaction.",
        },
        {
          id: "p2",
          icon: IconMap.ShieldCheck,
          iconClass: "text-emerald-400",
          title: "Ethical Importance of AI Literacy",
          text: "Highlighted for responsible AI use (UC Berkeley).",
        },
        {
          id: "p3",
          icon: IconMap.Users,
          iconClass: "text-amber-400",
          title: "Addressing Educational Gaps",
          text: "Focus on underrepresented groups (ResearchGate) & AI learning tools (Workhuman).",
        },
      ],
      considerationsTitle: "Paper's Conclusion Summary",
      considerations: [
        {
          id: "con1",
          icon: IconMap.AlertTriangle,
          text: "Underscored need for proactive measures to mitigate job displacement.",
        },
        { id: "con2", icon: IconMap.Globe, text: "Promote inclusivity in the AI-augmented workforce." },
      ],
    },
  },
  // Slide 10: Tools and Methods Used
  {
    id: "proc-s10-toolsmethods",
    layout: "DefinitionListLayout",
    backgroundQuery: "collection of tool icons, research process flowchart",
    steps: 2, // Title, Tools Section
    content: {
      mainTitle: "Tools & Methods Leveraged",
      sections: [
        {
          id: "tools",
          title: "Primary Research Instruments",
          items: [
            {
              id: "tm1",
              icon: IconMap.Search,
              title: "Web Searches",
              text: "To identify definitions, articles, and reports on agentic AI and skills.",
            },
            {
              id: "tm2",
              icon: IconMap.FileSearch,
              title: "Specific Article Reviews",
              text: "In-depth analysis of key sources (e.g., McKinsey, Salesforce).",
            },
            {
              id: "tm3",
              icon: IconMap.Twitter,
              title: "X (Twitter) Posts",
              text: "Gathered expert opinions and real-time industry perspectives (e.g., @MarioNawfal).",
            },
            {
              id: "tm4",
              icon: IconMap.BookCopy,
              title: "Sample Paper Review",
              text: "Ensured final paper structure aligned with academic standards.",
            },
          ],
        },
      ],
    },
  },
  // Slide 11: Challenges and Solutions
  {
    id: "proc-s11-challenges",
    layout: "KeyConsiderationsLayout",
    backgroundQuery: "navigating obstacles, problem-solving, overcoming hurdles",
    steps: 4, // Title, Challenges (points), Overall Approach (considerations)
    content: {
      mainTitle: "Challenges Encountered & Solutions",
      points: [
        {
          id: "chal1",
          icon: IconMap.DollarSign,
          iconClass: "text-red-400",
          title: "Paywalled Articles",
          text: "Mitigated by seeking open-access sources or summaries.",
        },
        {
          id: "chal2",
          icon: IconMap.Target,
          iconClass: "text-amber-400",
          title: "Ensuring Relevance",
          text: "Careful source selection focusing on 'agentic AI workforce skills'.",
        },
        {
          id: "chal3",
          icon: IconMap.Scale,
          iconClass: "text-sky-400",
          title: "Balancing Skills",
          text: "Maintained balance between technical & soft skills to address automation vs. augmentation debates.",
        },
      ],
      considerationsTitle: "Overall Approach",
      considerations: [
        {
          id: "con1",
          icon: IconMap.CheckCircle,
          text: "A systematic, multi-phase process ensured a comprehensive and credible exploration.",
        },
      ],
    },
  },
  // Slide 12: Conclusion of the Process Presentation
  {
    id: "proc-s12-conclusion",
    layout: "TitleLayout",
    backgroundQuery: "path completed, successful journey, final thoughts",
    steps: 3,
    content: {
      mainTitle: "Our Research Process: A Systematic Approach",
      subTitle: "Leveraging diverse sources and addressing challenges to provide actionable recommendations.",
      presenters: "Thank you for following our journey!",
      date: "",
    },
  },
  // Slide 13: Q&A
  {
    id: "proc-s13-qa",
    layout: "QaLayout",
    backgroundQuery: "calm, inviting abstract background, soft focus, professional",
    steps: 1,
    content: {
      title: "Questions & Discussion",
      icons: [IconMap.HelpCircle, IconMap.MessageCircleIcon, IconMap.Lightbulb, IconMap.StarIcon, IconMap.Heart],
      presenters: [
        { name: "Fahad Rashid", id: "F2022266416" },
        { name: "Sameer Abbas", id: "F2022266420" },
      ],
      paperTitle:
        'Development Process for: "The Impact of Agentic AI on the Future of Work and Skill Requirements: A Roadmap for Education and Retraining"',
      date: "June 2025",
    },
  },
]