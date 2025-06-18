import type React from "react"
import {
  Map,
  GitFork,
  Factory,
  Building2,
  Clock,
  Brain,
  Lightbulb,
  Target,
  Goal,
  RefreshCw,
  Shuffle,
  MonitorSmartphone,
  Laptop,
  Cog,
  Settings2,
  BarChartBig,
  LineChart,
  Users,
  Handshake,
  AlertTriangle,
  GraduationCap,
  UsersRound,
  Code,
  MessageSquare,
  Star,
  Heart,
  Scale,
  Focus,
  MousePointerIcon as MousePointerSquare,
  School,
  Building,
  Briefcase,
  Cloud,
  FileText,
  ClipboardList,
  Group,
  BookOpen,
  Search,
  Infinity,
  DollarSign,
  Megaphone,
  FileIcon as FileUser,
  Contact,
  Move,
  Route,
  Trophy,
  HelpCircle,
  User,
  CheckCircle,
  Zap,
} from "lucide-react"

export interface Fragment {
  id: string // Unique ID for GSAP targeting & React key
  type:
    | "title"
    | "subtitle"
    | "presenters"
    | "heading"
    | "subheading"
    | "paragraph"
    | "card"
    | "icon-list-item"
    | "pill-stat"
    | "image-placeholder"
    | "spacer"
    | "highlight-box"
    | "quote"
  content: string | string[]
  icon?: React.ElementType
  iconClass?: string
  accentColor?: string // e.g., 'text-sky-400'
  subContent?: string | { label: string; value: string }[] // For cards or complex elements
  imageQuery?: string
  columns?: number // For card grids or multi-column layouts
  fullWidth?: boolean
  textAlign?: "left" | "center" | "right"
}

export interface SlideContent {
  id: number
  fragments: Fragment[]
  presenter?: "Fahad" | "Sameer"
  durationEstimate?: string
  backgroundAccent: string // For the 3D canvas, e.g., 'sky-400' (maps to CSS var --color-sky-400)
  layout?: "default" | "title-slide" | "two-column" | "centered-content"
}

// Icon mapping for convenience
export const IconMap = {
  Map,
  GitFork,
  Factory,
  Building2,
  Clock,
  Brain,
  Lightbulb,
  Target,
  Goal,
  RefreshCw,
  Shuffle,
  MonitorSmartphone,
  Laptop,
  Cog,
  Settings2,
  BarChartBig,
  LineChart,
  Users,
  Handshake,
  AlertTriangle,
  GraduationCap,
  UsersRound,
  Code,
  MessageSquare,
  Star,
  Heart,
  Scale,
  Focus,
  MousePointerSquare,
  School,
  Building,
  Briefcase,
  Cloud,
  FileText,
  ClipboardList,
  Group,
  BookOpen,
  Search,
  Infinity,
  DollarSign,
  Megaphone,
  FileUser,
  Contact,
  Move,
  Route,
  Trophy,
  HelpCircle,
  User,
  CheckCircle,
  Zap,
}

export const slides: SlideContent[] = [
  // Slide 1: Title Slide (Based on first screenshot)
  {
    id: 1,
    backgroundAccent: "sky-500",
    layout: "title-slide",
    fragments: [
      {
        id: "s1f1",
        type: "heading",
        content: "The Impact of Agentic AI",
        textAlign: "center",
        accentColor: "text-sky-300",
      },
      { id: "s1f2", type: "subheading", content: "on the Future of Work and Skill Requirements", textAlign: "center" },
      { id: "s1f3", type: "spacer", content: "" },
      {
        id: "s1f4",
        type: "heading",
        content: "A Roadmap for Education and Retraining",
        textAlign: "center",
        accentColor: "text-sky-400",
      },
      { id: "s1f5", type: "spacer", content: "" },
      { id: "s1f6", type: "presenters", content: "Presented by:", textAlign: "center" },
      {
        id: "s1f7",
        type: "presenters",
        content: "Fahad Rashid & Sameer Abbas",
        textAlign: "center",
        accentColor: "text-slate-300",
      },
      { id: "s1f8", type: "presenters", content: "June 2025", textAlign: "center", accentColor: "text-slate-400" },
    ],
    presenter: "Fahad",
    durationEstimate: "30s",
  },
  // Slide 2: What is Agentic AI? (Based on second screenshot, first part)
  {
    id: 2,
    backgroundAccent: "purple-500",
    layout: "default",
    fragments: [
      { id: "s2f1", type: "heading", content: "What is Agentic AI?", accentColor: "text-purple-300" },
      {
        id: "s2f2",
        type: "card",
        icon: GitFork,
        iconClass: "text-purple-400",
        content: "Autonomous Decision-Making",
        subContent: "AI systems capable of independent task execution with minimal human oversight",
        columns: 2,
      },
      {
        id: "s2f3",
        type: "card",
        icon: Factory,
        iconClass: "text-purple-400",
        content: "Industry Transformation",
        subContent: "Redefining job roles across healthcare, finance, and logistics",
        columns: 2,
      },
      {
        id: "s2f4",
        type: "heading",
        content: "The Urgency",
        accentColor: "text-amber-400",
        fullWidth: true,
        textAlign: "center",
      },
      {
        id: "s2f5",
        type: "pill-stat",
        content: "Jobs Displaced",
        subContent: [{ label: "Est.", value: "92M" }],
        icon: Users,
        iconClass: "text-red-400",
        columns: 3,
      },
      {
        id: "s2f6",
        type: "pill-stat",
        content: "New Roles",
        subContent: [{ label: "Est.", value: "170M" }],
        icon: UsersRound,
        iconClass: "text-green-400",
        columns: 3,
      },
      {
        id: "s2f7",
        type: "pill-stat",
        content: "Target Year",
        subContent: [{ label: "By", value: "2030" }],
        icon: Clock,
        iconClass: "text-sky-400",
        columns: 3,
      },
    ],
    presenter: "Sameer",
    durationEstimate: "1m",
  },
  // Slide 3: Evolution of AI (Based on second screenshot, second part)
  {
    id: 3,
    backgroundAccent: "emerald-500",
    layout: "default",
    fragments: [
      {
        id: "s3f1",
        type: "heading",
        content: "Evolution of AI",
        subContent: "From rule-based systems to autonomous decision-makers",
        accentColor: "text-emerald-300",
      },
      {
        id: "s3f2",
        type: "icon-list-item",
        icon: Brain,
        iconClass: "text-emerald-400",
        content: "Autonomy",
        subContent: "Independent decision-making with minimal human oversight",
      },
      {
        id: "s3f3",
        type: "icon-list-item",
        icon: Target,
        iconClass: "text-emerald-400",
        content: "Goal-Driven Behavior",
        subContent: "Focused on achieving specific objectives and outcomes",
      },
      {
        id: "s3f4",
        type: "icon-list-item",
        icon: RefreshCw,
        iconClass: "text-emerald-400",
        content: "Adaptability",
        subContent: "Dynamic response to changing environments and conditions",
      },
      {
        id: "s3f5",
        type: "heading",
        content: "Real-World Applications",
        accentColor: "text-teal-300",
        fullWidth: true,
        textAlign: "center",
      },
      {
        id: "s3f6",
        type: "card",
        icon: MonitorSmartphone,
        iconClass: "text-teal-400",
        content: "Virtual Assistants",
        subContent: "Autonomous customer service",
        columns: 3,
      },
      {
        id: "s3f7",
        type: "card",
        icon: Cog,
        iconClass: "text-teal-400",
        content: "Process Automation",
        subContent: "Intelligent workflow management",
        columns: 3,
      },
      {
        id: "s3f8",
        type: "card",
        icon: BarChartBig,
        iconClass: "text-teal-400",
        content: "Data Analysis",
        subContent: "Complex pattern recognition",
        columns: 3,
      },
    ],
    presenter: "Fahad",
    durationEstimate: "1.5m",
  },
  // Slide 4: Essential Skills (Prompt Engineering, AI Literacy, Technical Skills)
  {
    id: 4,
    backgroundAccent: "rose-500",
    layout: "default",
    fragments: [
      {
        id: "s4f1",
        type: "heading",
        content: "Essential Skills for Human-AI Collaboration",
        accentColor: "text-rose-300",
      },
      {
        id: "s4f2",
        type: "card",
        icon: Zap,
        iconClass: "text-rose-400",
        content: "Prompt Engineering",
        subContent: "Crafting precise inputs to guide AI outputs effectively.",
        columns: 1,
        fullWidth: true,
      },
      {
        id: "s4f3",
        type: "highlight-box",
        content: "85% improvement",
        subContent: "in AI performance with effective prompts",
        accentColor: "bg-rose-500/30",
      },
      {
        id: "s4f4",
        type: "card",
        icon: Brain,
        iconClass: "text-rose-400",
        content: "AI Literacy",
        subContent: "Understanding AI capabilities, limitations, and ethical implications.",
        columns: 1,
        fullWidth: true,
      },
      {
        id: "s4f5",
        type: "highlight-box",
        content: "Critical for",
        subContent: "responsible AI deployment",
        accentColor: "bg-rose-500/30",
      },
      {
        id: "s4f6",
        type: "card",
        icon: Code,
        iconClass: "text-rose-400",
        content: "Technical Skills",
        subContent: "Proficiency in machine learning, data science, and software engineering.",
        columns: 1,
        fullWidth: true,
      },
      {
        id: "s4f7",
        type: "highlight-box",
        content: "Foundation for",
        subContent: "AI system development",
        accentColor: "bg-rose-500/30",
      },
    ],
    presenter: "Sameer",
    durationEstimate: "1.5m",
  },
  // Add more slides based on other screenshots and your paper...
  // Slide X: Thank You / Q&A
  {
    id: 99, // Example last slide
    backgroundAccent: "slate-500",
    layout: "title-slide",
    fragments: [
      {
        id: "s99f1",
        type: "icon-list-item",
        icon: HelpCircle,
        content: "",
        iconClass: "text-slate-300 w-24 h-24 mx-auto",
      },
      {
        id: "s99f2",
        type: "heading",
        content: "Questions & Discussion",
        textAlign: "center",
        accentColor: "text-slate-300",
      },
      { id: "s99f3", type: "spacer", content: "" },
      { id: "s99f4", type: "presenters", content: "Presented by:", textAlign: "center" },
      {
        id: "s99f5",
        type: "icon-list-item",
        icon: User,
        content: "Fahad Rashid (F2022266416)",
        textAlign: "center",
        iconClass: "text-slate-400",
      },
      {
        id: "s99f6",
        type: "icon-list-item",
        icon: User,
        content: "Sameer Abbas (F2022266420)",
        textAlign: "center",
        iconClass: "text-slate-400",
      },
      { id: "s99f7", type: "spacer", content: "" },
      {
        id: "s99f8",
        type: "paragraph",
        content:
          'Research Paper: "The Impact of Agentic AI on the Future of Work and Skill Requirements: A Roadmap for Education and Retraining" - June 2025',
        textAlign: "center",
        accentColor: "text-xs text-slate-500",
      },
    ],
    presenter: "Both",
    durationEstimate: "Open",
  },
]
