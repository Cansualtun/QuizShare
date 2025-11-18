import { slugify } from "~/lib/utils";
import CardDemo from "./components/common/Card";
import Header from "./components/common/Header";
//@ts-ignore
import type { Route } from "~/types/product";
import { useSurvey } from "~/store/useSurveyStore";

export async function loader({ params }: Route.LoaderArgs) {
  console.log(params, "params");
  const posts = await useSurvey();
  console.log(posts, "asdasd");
  return posts;
}

export default function Product({ loaderData }: Route.ComponentProps) {

  const layoutSpan: any = [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1];
  const postsData = loaderData.surveys;

  return (
    <div className='h-full w-full overflow-hidden'>
      <div className='grid h-screen w-full grid-cols-4 grid-rows-3 gap-2 lg:gap-3'>
        {layoutSpan.map((col: any, index: any) => {
          return (
            <div
              key={index}
              className={`min-w-0 min-h-0 flex items-stretch justify-stretch p-1 lg:p-2 ${col === 2 ? "col-span-2" : "col-span-1"
                }`}
            >
              {col === 2 ? (
                <Header />
              ) : (
                <CardDemo
                  img={postsData[index]?.headerImageUrl}
                  title={postsData[index]?.title}
                  description={postsData[index]?.description}
                  slug={postsData[index]?.slug}
                  className={"shadow-lg lg:shadow-md"}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
