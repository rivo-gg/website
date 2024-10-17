"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface PageWrapperProps {
  children: React.ReactNode;
  goBack?: boolean;
}

export function PageWrapper({ children, goBack = false }: PageWrapperProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-full max-w-7xl flex flex-col gap-4">
      <div
        className={cn("flex gap-4", goBack ? "justify-between" : "justify-end")}
      >
        {goBack && (
          <Button
            className="flex w-fit gap-2 items-center rounded-md px-4 py-2 font-normal max-w-[200px]"
            variant="ghost"
            onClick={router.back}
          >
            <MoveLeft className="w-5 h-5" />
            <span className="text-lg">Go back</span>
          </Button>
        )}
        {!pathname.toString().match(/\/privacy/) && (
          <Link href={pathname + "/privacy"}>
            <Button
              className="flex w-fit gap-2 items-center rounded-md px-4 py-2 font-normal max-w-[200px]"
              variant="ghost"
            >
              <span className="text-lg">Privacy</span>
              <MoveRight className="w-5 h-5" />
            </Button>
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}
