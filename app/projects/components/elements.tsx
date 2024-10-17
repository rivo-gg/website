import { cn } from "@/lib/utils";
import { Button as ShadcnButton } from "@/components/ui/button";
import Image from "next/image";

interface Container {
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
}

export function Container({ children, orientation = "vertical" }: Container) {
  return (
    <div
      className={cn(
        "flex gap-4",
        orientation === "horizontal" ? "flex-row" : "flex-col"
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
  return <h1 {...props}>{children}</h1>;
}

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  size?: "small" | "medium";
}

export function Title({ children, size, ...props }: TitleProps) {
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
  return (
    <Image
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      className={cn(
        "rounded-xl max-w-md aspect-auto",
        size === "large"
          ? "max-w-xl"
          : size === "small"
          ? "max-w-sm"
          : "max-w-md"
      )}
    />
  );
}
