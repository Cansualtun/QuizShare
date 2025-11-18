import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Link } from "react-router";
import type { CardDemoProps } from "./type";

export default function CardDemo({ img, title, description, slug, className }: CardDemoProps) {
    return (
        <Card
            className={[
                "h-full w-full min-h-0",
                "grid grid-rows-[auto_1fr_auto]",
                "p-2 lg:p-3 overflow-hidden",
                className ?? "",
            ].join(" ")}
        >
            <CardHeader className="p-0">
                <div
                    className={[
                        "w-full overflow-hidden rounded-md mx-auto",
                        "aspect-[4/3]",
                        "[max-height:clamp(84px,12vh,120px)]",
                        "lg:[max-height:clamp(96px,13vh,140px)]",
                    ].join(" ")}
                >
                    <img src={img} alt={title} className="h-full w-full object-cover" />
                </div>
            </CardHeader>

            <CardContent className="px-1.5 py-1 min-h-0">
                <CardTitle className="text-[13px] lg:text-sm font-semibold leading-snug line-clamp-1">
                    {title}
                </CardTitle>
                <p className="mt-1 text-[11px] lg:text-xs leading-snug line-clamp-2">
                    {description}
                </p>
            </CardContent>
            <CardFooter className="p-0 pb-1 justify-center">
                <Link
                    to={slug}
                    className="text-[11px] lg:text-xs underline underline-offset-4 hover:opacity-80"
                >
                    Go to Test →
                </Link>
            </CardFooter>
        </Card>
    );
}
