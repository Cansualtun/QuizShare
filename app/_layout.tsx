import { slugify } from "~/lib/utils";
import CardDemo from "./components/common/Card";
import Header from "./components/common/Header";
//@ts-ignore
import type { Route } from "~/types/product";
import { useSurvey } from "~/store/useSurveyStore";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const posts = await useSurvey(page);
  return posts;
}

export default function Product({ loaderData }: Route.ComponentProps) {

  const layoutSpan: any = [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1];
  const postsData = loaderData.surveys;
  const pagination = loaderData.pagination;

  // Header'ı ayrı tut, kartları filtrele
  const cards = layoutSpan
    .map((col: any, index: any) => col === 2 ? null : index)
    .filter((index: any) => index !== null);

  return (
    <div className='h-full w-full overflow-y-auto'>
      {/* Mobile ve Tablet: Header üstte, kartlar altında */}
      <div className='flex flex-col gap-4 p-4 md:p-6 lg:hidden'>
        <Header pagination={pagination} />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
          {cards.map((index: any) => (
            <CardDemo
              key={index}
              img={postsData[index]?.headerImageUrl}
              title={postsData[index]?.title}
              description={postsData[index]?.description}
              slug={postsData[index]?.slug}
              className={"shadow-lg"}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Mevcut grid yapısı */}
      <div className='hidden lg:grid h-screen w-full grid-cols-4 grid-rows-3 gap-3'>
        {layoutSpan.map((col: any, index: any) => {
          return (
            <div
              key={index}
              className={`min-w-0 min-h-0 flex items-stretch justify-stretch p-2 ${col === 2 ? "col-span-2" : "col-span-1"
                }`}
            >
              {col === 2 ? (
                <Header pagination={pagination} />
              ) : (
                <CardDemo
                  img={postsData[index]?.headerImageUrl}
                  title={postsData[index]?.title}
                  description={postsData[index]?.description}
                  slug={postsData[index]?.slug}
                  className={"shadow-md"}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
