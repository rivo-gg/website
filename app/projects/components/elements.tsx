"use client";

import { cn } from "@/lib/utils";
import { Button as ShadcnButton } from "@/components/ui/button";
import Image from "next/image";
import { createContext, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

interface PageWrapperProps {
  children: React.ReactNode;
  goBack?: boolean;
}

const PageWrapperContext = createContext(false);

export function PageWrapper({ children, goBack = false }: PageWrapperProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <PageWrapperContext.Provider value={true}>
      <div className="w-full max-w-7xl flex flex-col gap-4">
        <div
          className={cn(
            "flex gap-4 relative",
            goBack ? "justify-between" : "justify-end"
          )}
        >
          {goBack && (
            <Button
              className="flex w-fit bg-background gap-2 items-center rounded-md px-4 py-2 font-normal max-w-[200px] group"
              variant="ghost"
              onClick={router.back}
            >
              <MoveLeft className="absolute top-1/2 -translate-y-1/2 left-4 -translate-x-full w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:-left-0.5 sm:group-hover:-left-2 transition-all -z-10" />
              <span className="text-lg">Go back</span>
            </Button>
          )}
          {!pathname.toString().match(/\/privacy/) && (
            <Link href={pathname + "/privacy"}>
              <Button
                className="flex w-fit bg-background gap-2 items-center rounded-md px-4 py-2 font-normal max-w-[200px] group"
                variant="ghost"
              >
                <span className="text-lg">Privacy</span>
                <MoveRight className="absolute top-1/2 -translate-y-1/2 right-4 translate-x-full w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:-right-0.5 sm:group-hover:-right-2 transition-all -z-10" />
              </Button>
            </Link>
          )}
        </div>
        {children}
      </div>
    </PageWrapperContext.Provider>
  );
}

interface Container {
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
}

export function Container({ children, orientation = "vertical" }: Container) {
  const isWithinPageWrapper = useContext(PageWrapperContext);

  if (!isWithinPageWrapper) {
    throw new Error("Container must be used within a PageWrapper");
  }

  return (
    <div
      className={cn(
        "flex gap-4",
        orientation === "horizontal" ? "flex-row flex-wrap" : "flex-col"
      )}
    >
      {children}
    </div>
  );
}

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function Heading({ children, ...props }: HeadingProps) {
  const isWithinPageWrapper = useContext(PageWrapperContext);

  if (!isWithinPageWrapper) {
    throw new Error("Heading must be used within a PageWrapper");
  }

  return <h1 {...props}>{children}</h1>;
}

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  size?: "small" | "medium";
}

export function Title({ children, size, ...props }: TitleProps) {
  const isWithinPageWrapper = useContext(PageWrapperContext);

  if (!isWithinPageWrapper) {
    throw new Error("Title must be used within a PageWrapper");
  }

  switch (size) {
    case "small":
      return <h4 {...props}>{children}</h4>;
    default:
      return <h3 {...props}>{children}</h3>;
  }
}

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

export function Text({ children, className, ...props }: TextProps) {
  const isWithinPageWrapper = useContext(PageWrapperContext);

  if (!isWithinPageWrapper) {
    throw new Error("Text must be used within a PageWrapper");
  }

  return (
    <span className={cn(className)} {...props}>
      {children}
    </span>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    | null
    | undefined;
}

export function Button({
  children,
  variant = "default",
  ...props
}: ButtonProps) {
  const isWithinPageWrapper = useContext(PageWrapperContext);

  if (!isWithinPageWrapper) {
    throw new Error("Button must be used within a PageWrapper");
  }

  return (
    <ShadcnButton
      className="w-fit py-3 px-5 rounded-md"
      variant={variant}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
}

interface ImageWrapperProps {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
}

export function ImageWrapper({ src, alt, size = "medium" }: ImageWrapperProps) {
  const isWithinPageWrapper = useContext(PageWrapperContext);

  if (!isWithinPageWrapper) {
    throw new Error("ImageWrapper must be used within a PageWrapper");
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      className={cn(
        "rounded-xl aspect-auto",
        size === "large"
          ? "sm:max-w-xl"
          : size === "small"
          ? "sm:max-w-sm"
          : "sm:max-w-md"
      )}
    />
  );
}
