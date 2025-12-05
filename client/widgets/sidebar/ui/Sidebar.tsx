"use client";

import {
    CircleArrowUpIcon,
    MessagesSquareIcon,
    PanelLeftIcon,
    PlusIcon,
} from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`w-ful bg-zinc-200 dark:bg-zinc-950 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                isOpen ? "w-[270px]" : "w-[48px]"
            }`}
        >
            <div
                className={`flex flex-col justify-between gap-2 p-2 pt-[20px]`}
            >
                <div className="flex justify-between items-center h-[32px]">
                    <div
                        className={`font-gloock text-2xl px-[5px] ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        Coltra
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="hover:bg-white/10 p-[5px] rounded-lg transition-all"
                    >
                        <PanelLeftIcon
                            className={`${
                                isOpen ? "" : ""
                            } size-5 stroke-[1.5]`}
                        />
                    </button>
                </div>

                <div className="flex flex-col gap-2 mt-[10px]">
                    <button className="flex gap-[10px] hover:bg-white/10 p-[6px] py-[7px] rounded-lg transition-all w-ful">
                        <PlusIcon className="flex-shrink-0 size-5 stroke-[1.5]" />
                        <div
                            className={`truncate text-sm ${
                                isOpen ? "block" : "hidden"
                            }`}
                        >
                            New chat
                        </div>
                    </button>
                    <button className="flex gap-[10px] hover:bg-white/10 p-[6px] py-[7px] rounded-lg transition-all w-ful">
                        <MessagesSquareIcon className="flex-shrink-0 size-5 stroke-[1.5]" />
                        <div
                            className={`truncate text-sm ${
                                isOpen ? "block" : "hidden"
                            }`}
                        >
                            Chats
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-2 p-2 pb-[20px]">
                {!isOpen && (
                    <button className="flex gap-[10px] hover:bg-white/10 p-[6px] py-[7px] rounded-lg transition-all w-ful">
                        <CircleArrowUpIcon className="size-5 stroke-[1.5]" />
                    </button>
                )}
                <button
                    className={`flex items-center gap-[15px] hover:bg-white/10 ${
                        isOpen ? "px-[10px]" : "p-[2px]"
                    } py-[7px] rounded-lg transition-all h-[54px]`}
                >
                    <div className="flex-shrink-0 size-7 rounded-full bg-zinc-500"></div>
                    <div
                        className={`truncate text-left text-sm ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        <div className="font-bold">tenshi</div>
                        <div className="text-zinc-400 text-xs">free plan</div>
                    </div>
                </button>
            </div>
        </div>
    );
};
