import { LogoIcon } from "@/shared/icons/LogoIcon";

export default function LoginPage() {
    return (
        <div>
            <header className="flex items-center justify-between px-4 py-3 relative">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <LogoIcon />
                    <div>Coltra</div>
                </div>

                {/* Navigation */}
                <nav className="flex ">
                    <div className="relative group w-fit">
                        <div className="cursor-pointer py-2 px-3 rounded-md">
                            Pratform
                        </div>

                        <div
                            className="
                    absolute left-0 top-full mt-2
                     border rounded-xl shadow-lg p-4 z-50

                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    hover:opacity-100 hover:visible

                    transition-all duration-150
                "
                        >
                            <div className="flex flex-col gap-2">
                                <p>Підменю 1</p>
                                <p>Підменю 2</p>
                                <p>Підменю 3</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group w-fit">
                        <div className="cursor-pointer py-2 px-3 rounded-md">
                            Pricing
                        </div>

                        <div
                            className="
                    absolute left-0 top-full mt-2
                     border rounded-xl shadow-lg p-4 z-50

                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    hover:opacity-100 hover:visible

                    transition-all duration-150
                "
                        >
                            <div className="flex flex-col gap-2">
                                <p>Підменю 1</p>
                                <p>Підменю 2</p>
                                <p>Підменю 3</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group w-fit">
                        <div className="cursor-pointer py-2 px-3 rounded-md">
                            Learn
                        </div>

                        <div
                            className="
                    absolute left-0 top-full mt-2
                     border rounded-xl shadow-lg p-4 z-50

                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    hover:opacity-100 hover:visible

                    transition-all duration-150
                "
                        >
                            <div className="flex flex-col gap-2">
                                <p>Підменю 1</p>
                                <p>Підменю 2</p>
                                <p>Підменю 3</p>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Button */}
                <div>
                    <button>Try Coltra</button>
                </div>
            </header>

            <main>
                <div>
                    <div></div>
                    <div>{/* <video src="/video.mp4"></video> */}</div>
                </div>
            </main>

            <footer></footer>
        </div>
    );
}
