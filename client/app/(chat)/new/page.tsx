"use client";

import {
    ArrowUpIcon,
    PlusIcon,
    Settings2Icon,
    TelescopeIcon,
} from "lucide-react";
import { useRef } from "react";

export default function NewChatPage() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = Math.min(textarea.scrollHeight, 500) + "px";
        }
    };

    return (
        <div className="flex flex-col items-center gap-[40px] py-[100px] pt-[250] h-full">
            <div className="font-gloock text-5xl">
                User, let&apos;s explore!
            </div>
            <div className="relative m-[0_auto] max-w-[600px] w-full shadow-xl rounded-xl bg-zinc-950 p-[20px]">
                <textarea
                    ref={textareaRef}
                    placeholder="What's the adventure today?"
                    onInput={handleInput}
                    className="max-w-[600px] w-full outline-0 resize-none overflow-y-auto"
                    style={{ maxHeight: "500px", height: "100px" }}
                />

                <div className="flex justify-between gap-[10px] w-full">
                    <div className="flex gap-[10px]">
                        <button className="p-[7px] border border-zinc-800 hover:bg-white/10 rounded-lg">
                            <PlusIcon className="size-5 stroke stroke-[1.5]" />
                        </button>
                        <button className="p-[7px] border border-zinc-800 hover:bg-white/10 rounded-lg">
                            <Settings2Icon className="size-5 stroke stroke-[1.5]" />
                        </button>
                        <button className="p-[7px] border border-zinc-800 hover:bg-white/10 rounded-lg">
                            <TelescopeIcon className="size-5 stroke stroke-[1.5]" />
                        </button>
                    </div>
                    <div>
                        <button className="p-[7px] border border-zinc-800 hover:bg-white/10 rounded-lg">
                            <ArrowUpIcon className="size-5 stroke-zink-950 stroke-[1.5] stroke-zinc-50" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
