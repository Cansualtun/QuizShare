import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Pagination as PaginationType } from "~/store/type";

interface PaginationProps {
    pagination: PaginationType;
    onPageChange: (page: number) => void;
}

const Pagination = ({ pagination, onPageChange }: PaginationProps) => {
    const { currentPage, totalPages, hasNextPage, hasPreviousPage } = pagination;

    // Sayfa numaralarını oluştur
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            // Tüm sayfaları göster
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // İlk sayfa
            pages.push(1);

            if (currentPage <= 3) {
                // Başta
                for (let i = 2; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push("...");
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                // Sonda
                pages.push("...");
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                // Ortada
                pages.push("...");
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push("...");
                pages.push(totalPages);
            }
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="flex items-center justify-center gap-1 sm:gap-2">
            {/* Önceki Sayfa Butonu */}
            <button
                onClick={() => hasPreviousPage && onPageChange(currentPage - 1)}
                disabled={!hasPreviousPage}
                className="
                    inline-flex items-center justify-center
                    w-8 h-8 sm:w-9 sm:h-9
                    rounded-lg
                    border border-gray-200 dark:border-neutral-700
                    bg-white dark:bg-neutral-800
                    text-gray-600 dark:text-gray-300
                    hover:bg-gray-50 dark:hover:bg-neutral-700
                    hover:border-gray-300 dark:hover:border-neutral-600
                    disabled:opacity-50 disabled:cursor-not-allowed
                    disabled:hover:bg-white dark:disabled:hover:bg-neutral-800
                    transition-all duration-200
                    shadow-sm hover:shadow
                    active:scale-95
                "
                aria-label="Önceki sayfa"
            >
                <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Sayfa Numaraları */}
            {pageNumbers.map((page, index) => {
                if (page === "...") {
                    return (
                        <span
                            key={`ellipsis-${index}`}
                            className="px-2 text-gray-400 dark:text-gray-500"
                        >
                            ...
                        </span>
                    );
                }

                const pageNum = page as number;
                const isActive = pageNum === currentPage;

                return (
                    <button
                        key={pageNum}
                        onClick={() => onPageChange(pageNum)}
                        className={`
                            inline-flex items-center justify-center
                            min-w-[32px] h-8 sm:min-w-[36px] sm:h-9
                            px-2 sm:px-3
                            rounded-lg
                            border transition-all duration-200
                            text-sm font-medium
                            ${
                                isActive
                                    ? "bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 border-gray-900 dark:border-gray-50 shadow-md"
                                    : "border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700 hover:border-gray-300 dark:hover:border-neutral-600 shadow-sm hover:shadow"
                            }
                            active:scale-95
                        `}
                        aria-label={`Sayfa ${pageNum}`}
                        aria-current={isActive ? "page" : undefined}
                    >
                        {pageNum}
                    </button>
                );
            })}

            {/* Sonraki Sayfa Butonu */}
            <button
                onClick={() => hasNextPage && onPageChange(currentPage + 1)}
                disabled={!hasNextPage}
                className="
                    inline-flex items-center justify-center
                    w-8 h-8 sm:w-9 sm:h-9
                    rounded-lg
                    border border-gray-200 dark:border-neutral-700
                    bg-white dark:bg-neutral-800
                    text-gray-600 dark:text-gray-300
                    hover:bg-gray-50 dark:hover:bg-neutral-700
                    hover:border-gray-300 dark:hover:border-neutral-600
                    disabled:opacity-50 disabled:cursor-not-allowed
                    disabled:hover:bg-white dark:disabled:hover:bg-neutral-800
                    transition-all duration-200
                    shadow-sm hover:shadow
                    active:scale-95
                "
                aria-label="Sonraki sayfa"
            >
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
    );
};

export default Pagination;

