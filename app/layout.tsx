import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next"

export const metadata: Metadata = {
	title: {
		default: "Jackie Zhang",
		template: "%s | bilguun.com",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<body
				className="bg-black"
			>
				{children}
			</body>
		</html>
	);
}
