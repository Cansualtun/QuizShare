import * as React from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const [theme, setTheme] = React.useState<"light" | "dark">(() => {
        if (typeof window === "undefined") return "light";
        return (localStorage.getItem("theme") as "light" | "dark") || "light";
    });

    React.useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="
                inline-flex items-center justify-center
                w-9 h-9 rounded-lg
                border border-gray-200 dark:border-neutral-700
                bg-white/50 dark:bg-neutral-800/50
                backdrop-blur-sm
                text-gray-600 dark:text-gray-300
                hover:bg-gray-100 dark:hover:bg-neutral-700
                hover:border-gray-300 dark:hover:border-neutral-600
                transition-all duration-200
                shadow-sm hover:shadow
                active:scale-95
            "
            aria-label="Toggle Theme"
        >
            {theme === "light" ? (
                <Moon className="w-4 h-4" />
            ) : (
                <Sun className="w-4 h-4" />
            )}
        </button>
    );
}
