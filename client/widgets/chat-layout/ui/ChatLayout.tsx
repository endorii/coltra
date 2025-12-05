"use client";

import { Sidebar } from "@/widgets/sidebar/ui";
import { ThemeSwitcher } from "@/widgets/theme/ui";
import React from "react";

export function ChatLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex h-screen">
            <Sidebar />
            <div className="mt-[15px] mr-[15px] mb-[15px] w-full bg-zinc-900 rounded-lg overflow-y-auto">
                {children}
            </div>
            <ThemeSwitcher />
        </div>
    );
}
