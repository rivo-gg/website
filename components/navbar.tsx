"use client";

import { MobileMenu } from "@/components/mobile-menu";
import RivoLogo from "@/components/rivo-logo";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/nav-items";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export function Navbar() {
	const { setTheme, theme } = useTheme();
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY > 150 ? setIsScrolled(true) : setIsScrolled(false);
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const [open, setOpen] = useState(false);

	return (
		<nav
			className={cn(
				"fixed left-0 top-0 z-20 flex h-auto w-screen items-center justify-center bg-background transition-all duration-300",
				isScrolled ? "px-6 py-3" : "p-6",
			)}
		>
			<div className="flex w-full max-w-7xl items-center justify-between gap-4">
				<RivoLogo />
				<div className="hidden items-center gap-6 md:flex">
					{navItems.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className={cn("nav-link relative text-base", pathname === item.href && "active", poppins.className)}
						>
							{item.label}
						</Link>
					))}
				</div>
				<div className="hidden h-auto min-w-fit items-center justify-end gap-2 md:flex md:basis-1/5">
					<button
						type="button"
						aria-label="Theme Switcher Button"
						className="hover:bg-hover-light flex h-12 w-12 items-center justify-center rounded-xl text-foreground/70 transition hover:text-primary"
						onClick={() => setTheme(theme === "light" ? "dark" : "light")}
					>
						{theme === "light" ? <Moon className="h-6 w-6 sm:h-8 sm:w-8" /> : <Sun className="h-6 w-6 sm:h-8 sm:w-8" />}
					</button>
					<Button>Contact Us</Button>
				</div>
				<MobileMenu open={open} setOpen={setOpen} className="flex md:hidden">
					{navItems.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className={cn(
								"relative text-base hover:text-primary",
								pathname === item.href && "text-primary",
								poppins.className,
							)}
							onClick={() => setOpen(false)}
						>
							{item.label}
						</Link>
					))}
					<button
						type="button"
						aria-label="Theme Switcher Button"
						className="hover:bg-hover-light flex w-fit items-center justify-center rounded-xl text-foreground/70 transition hover:text-primary"
						onClick={() => setTheme(theme === "light" ? "dark" : "light")}
					>
						{theme === "light" ? <Moon className="w-6" /> : <Sun className="w-6" />}
					</button>
				</MobileMenu>
			</div>
		</nav>
	);
}
