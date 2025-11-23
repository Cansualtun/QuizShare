import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Search } from "lucide-react";
import { ThemeToggle } from "../ModeToggle";
import SearchModal from "../Modals/SearchModal";
import Pagination from "../Pagination";
import type { Pagination as PaginationType } from "~/store/type";

interface HeaderProps {
    pagination?: PaginationType;
}

const Header = ({ pagination }: HeaderProps) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        navigate(`?${params.toString()}`, { replace: true });
        // Sayfa değiştiğinde scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <header className="w-full rounded-xl border border-gray-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm">
                <div className="max-w-6xl mx-auto h-full w-full px-4 py-4 sm:px-6 sm:py-6 flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex flex-col gap-3 sm:gap-4 lg:max-w-2xl">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <img
                                src="/quizshare_logo.svg"
                                alt="QuizShare Logo"
                                className="h-16 sm:h-20 w-auto select-none"
                            />
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                                personality & fun quizzes
                            </span>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-xl sm:text-[26px] lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 leading-snug">
                                Kendini testlerle keşfet,{" "}
                                <span className="text-gray-500 dark:text-gray-300">
                                    sonucu paylaş.
                                </span>
                            </h1>

                            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                QuizShare ile kişilik testleri, eğlenceli anketleri arkadaşlarınıza gönderebilirsiniz.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[10px] sm:text-[11px] lg:text-xs">
                            <span className="px-2 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-neutral-800 dark:text-gray-200 border border-gray-200 dark:border-neutral-700">
                                🐱 Kişilik, ilişki, hayvan ve daha fazlası
                            </span>
                            <span className="px-2 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-neutral-800 dark:text-gray-200 border border-gray-200 dark:border-neutral-700">
                                🔗 Paylaş, arkadaşların çözsün
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-3 space-y-32">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="
                                    inline-flex items-center gap-2
                                    w-full sm:w-auto
                                    px-3 sm:px-4 py-2
                                    rounded-lg
                                    border border-gray-200 dark:border-neutral-700
                                    bg-white/50 dark:bg-neutral-800/50
                                    backdrop-blur-sm
                                    text-gray-500 dark:text-gray-400
                                    hover:bg-gray-50 dark:hover:bg-neutral-700
                                    hover:border-gray-300 dark:hover:border-neutral-600
                                    transition-all duration-200
                                    shadow-sm hover:shadow
                                    active:scale-[0.98]
                                    text-sm
                                "
                            >
                                <Search className="w-4 h-4" />
                                <span className="hidden sm:inline text-gray-600 dark:text-gray-300">
                                    Ara...
                                </span>
                            </button>
                            <ThemeToggle />
                        </div>
                        {pagination && pagination.totalPages > 1 && (
                            <div className="w-full lg:w-auto">
                                <Pagination
                                    pagination={pagination}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </header>
            <SearchModal isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
        </>
    );
};

export default Header;
