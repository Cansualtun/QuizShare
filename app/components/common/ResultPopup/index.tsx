import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "~/components/ui/dialog";
import type { ResultPopupInterface } from "./props";

export function ResultPopup({ open, onOpenChange, result }: ResultPopupInterface) {
    const title = result?.data.title ?? "";
    const description = result?.data.description ?? "";
    const message = result?.message ?? "";
    const imageUrl = result?.data.imageUrl;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                {imageUrl && (
                    <div className="mt-4">
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-full rounded-lg object-cover"
                        />
                    </div>
                )}
                {message && (
                    <p className="mt-4 text-sm text-slate-700">
                        {message}
                    </p>
                )}

                {result?.data.totalWeight != null && (
                    <p className="mt-2 text-xs text-slate-500">
                        Toplam skor: <span className="font-semibold">{result.data.totalWeight}</span>
                    </p>
                )}
            </DialogContent>
        </Dialog>
    );
}
