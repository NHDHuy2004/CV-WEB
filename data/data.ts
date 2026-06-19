import {
	BookOpen,
	Brain,
	Github,
	Globe,
	GraduationCap,
	Mail,
	Network,
	Palette,
	PanelsTopLeft,
	RefreshCw,
	Rocket,
	Smartphone,
	Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SkillItem = {
	name: string;
	icon: LucideIcon;
};

export type TraitItem = {
	title: string;
	icon: LucideIcon;
};

export type ContactItem = {
	label: string;
	value: string;
	href: string;
	icon: LucideIcon;
};

export type ProjectItem = {
	title: string;
	description: string;
	role: string;
	tech: string[];
	status: "Hoàn thành" | "Đang phát triển";
	githubUrl: string;
	imagePath?: string;
	demoUrl?: string;
	impact?: string;
	metrics?: {
		accuracy?: string;
		speedup?: string;
		testCases?: number;
		linesOfCode?: number;
		lighthouse?: number;
	};
	lessonsLearned?: string[];
};

export const profile = {
	fullName: "Nguyễn Hồ Đức Huy",
	birthDate: "09/11/2004",
	title: "Thực tập sinh Front-end Developer",
	major: "Công nghệ thông tin",
	englishLevel: "B2",
	gpa: "3.0/4.0",
	avatarPath: "/images/avatar.jpg",
	avatarFallbackPath: "/images/avatar-placeholder.svg",
	aboutText: "Frontend Developer focused on building intuitive & high-performance UIs. Shipped 2 production projects with React/Next.js (500+ hours hands-on). I solve problems end-to-end: from design to deployment. Seeking internship to ship real-world products & learn from senior engineers."
};

export const skills: SkillItem[] = [
	{ name: "React.js", icon: PanelsTopLeft },
	{ name: "Next.js", icon: Rocket },
	{ name: "TailwindCSS", icon: Palette },
	{ name: "TypeScript", icon: Globe },
	{ name: "Chart.js & Data Visualization", icon: Network },
	{ name: "API Integration & State Management", icon: RefreshCw }
];

export const traits: TraitItem[] = [
	{ title: "Problem-solving mindset - Debug & iterate instead of waiting for help", icon: Brain },
	{ title: "Ownership + Execution - Shipped 2 projects end-to-end (idea → deployed)", icon: Users },
	{ title: "Self-learner - Mastered React/Next.js through 500+ hours hands-on practice", icon: BookOpen }
];

export const contacts: ContactItem[] = [
	{
		label: "Email",
		value: "nhdhuy1109@gmail.com",
		href: "mailto:nhdhuy1109@gmail.com",
		icon: Mail
	},
	{
		label: "GitHub",
		value: "github.com/NHDHuy2004",
		href: "https://github.com/NHDHuy2004",
		icon: Github
	}
];

export const education = {
	university: "Trường Đại học Đà Lạt",
	major: "Công nghệ thông tin",
	period: "Niên khóa 2022 - 2026",
	status: "Sinh viên năm cuối",
	gpa: "3.0 / 4.0",
	icon: GraduationCap
};

export const projects: ProjectItem[] = [
	{
		title: "DOANCN - Smart Book Manager",
		description: "Problem: Manual book entry wastes 10+ minutes per book. Solution: Built OCR scanner that auto-extracts book data from photos. Integrated API, implemented validation & error handling. Result: 95% accuracy, 30 seconds per book (95% faster).",
		role: "Lead Developer - Full stack: UI design, API integration, data processing",
		tech: ["React.js", "OCR API", "Tailwind CSS", "TypeScript", "Node.js"],
		status: "Đang phát triển",
		githubUrl: "https://github.com/NHDHuy2004/DOANCN",
		demoUrl: "#",
		impact: "95% speed increase from 10min → 30sec per entry",
		metrics: {
			accuracy: "95%",
			speedup: "95% faster",
			testCases: 200,
			linesOfCode: 3500
		},
		lessonsLearned: [
			"API error handling > assuming happy path",
			"User feedback loops improve UX decisions",
			"Performance testing matters from day 1"
		]
	},
	{
		title: "Expense Tracker - Personal Finance Dashboard",
		description: "Challenge: People need quick expense tracking without cloud sync. Built interactive dashboard with real-time charts, expense filters & budget alerts. Fully responsive with offline Local Storage support. Result: Production-ready, 98+ Lighthouse score.",
		role: "Solo Developer - Designed UI, implemented charts & state management, optimized performance",
		tech: ["Next.js", "React.js", "Tailwind CSS", "Chart.js", "Local Storage"],
		status: "Hoàn thành",
		githubUrl: "https://github.com/NHDHuy2004/expense-tracker",
		demoUrl: "#",
		impact: "Shipped MVP in 2 weeks · 98 Lighthouse score · 100% mobile responsive",
		metrics: {
			lighthouse: 98,
			linesOfCode: 2800,
			testCases: 50
		},
		lessonsLearned: [
			"MVP > perfect - shipped in 2 weeks vs 2 months planning",
			"Chart.js data transformation is 80% of the work",
			"Local Storage caching improved perceived performance"
		]
	}
];
