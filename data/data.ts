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

export const profile = {
	fullName: "Nguyễn Hồ Đức Huy",
	title: "Sinh viên Đại học Đà Lạt",
	major: "Công nghệ thông tin",
	englishLevel: "B2",
	gpa: "3.0/4.0",
	avatarPath: "/images/avatar.jpg",
	avatarFallbackPath: "/images/avatar-placeholder.svg"
};

export const skills: SkillItem[] = [
	{ name: "React.js", icon: PanelsTopLeft },
	{ name: "Next.js", icon: Rocket },
	{ name: "Firebase", icon: RefreshCw },
	{ name: "TailwindCSS", icon: Palette },
	{ name: "Git & GitHub", icon: Github },
	{ name: "Responsive Web Design", icon: Smartphone },
	{ name: "RESTful API Integration", icon: Network }
];

export const traits: TraitItem[] = [
	{ title: "Tinh thần cầu tiến, ham học hỏi", icon: Brain },
	{ title: "Làm việc nhóm tốt", icon: Users },
	{ title: "Có khả năng tự học công nghệ mới", icon: BookOpen }
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
	},
	{
		label: "Portfolio",
		value: "your-portfolio.example",
		href: "https://your-portfolio.example",
		icon: Globe
	}
];

export const education = {
	university: "Đại học Đà Lạt",
	major: "Công nghệ thông tin",
	status: "Sinh viên",
	icon: GraduationCap
};
