import QuestionCard from "~/components/common/QuestionCard";
import { useSurveyById } from "~/store/useSurveyStore";
//@ts-ignore
import type { Route } from "~/types/product";

export async function loader({ params }: Route.LoaderArgs) {
    const posts = await useSurveyById(params.slug as any);
    return posts;
}

export default function TestPage({ loaderData }: Route.ComponentProps) {
    const postsData = loaderData.data;
    console.log(postsData, "bu ne")
    return (
        <main className="w-full max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
            <QuestionCard survey={postsData.survey} questions={postsData.questions} />
        </main>
    );
}
