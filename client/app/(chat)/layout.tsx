import { ChatLayout } from "@/widgets/chat-layout/ui";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-zinc-950 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-950">
            <ChatLayout>{children}</ChatLayout>
        </div>
    );
}
