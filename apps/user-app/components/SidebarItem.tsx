"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SidebarItem = ({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();
    const selected = pathname === href;

    return (
        <div
            className={`flex items-center p-2 pl-8 cursor-pointer transition-colors duration-200 ${
                selected ? "bg-purple-100 text-purple-600" : "text-slate-500 hover:text-purple-600 hover:bg-purple-50"
            }`}
            onClick={() => {
                router.push(href);
            }}
        >
            <div className="pr-2">{icon}</div>
            <div className={`font-bold ${selected ? "text-purple-600" : "text-slate-500"}`}>
                {title}
            </div>
        </div>
    );
};
