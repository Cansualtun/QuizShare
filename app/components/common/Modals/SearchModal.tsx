import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "~/components/ui/dialog";

interface SearchModalProps {
    isSearchOpen: boolean;
    setIsSearchOpen: (open: boolean) => void;
}
const SearchModal = ({ isSearchOpen, setIsSearchOpen }: SearchModalProps) => {
    return (
        <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Quiz Ara</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Quiz adı, kategori veya açıklama ile ara..."
                            className="
                            w-full
                            pl-10 pr-4 py-3
                            rounded-lg
                            border border-gray-200 dark:border-neutral-700
                            bg-white dark:bg-neutral-800
                            text-gray-900 dark:text-gray-100
                            placeholder:text-gray-400 dark:placeholder:text-gray-500
                            focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-neutral-600
                            focus:border-transparent
                            transition-all
                        "
                            autoFocus
                        />
                    </div>
                    <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        <p>Arama sonuçları burada görünecek...</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SearchModal;