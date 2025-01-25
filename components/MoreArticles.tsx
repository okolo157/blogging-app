"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Article {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  readable_publish_date: string;
  reading_time_minutes: string;
  published_timestamp: string;
}

export const MoreArticlesSection: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayedIds, setDisplayedIds] = useState<Set<number>>(new Set());

  const router = useRouter();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getUTCFullYear();

    const ordinalSuffix = (day: number): string => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${ordinalSuffix(day)} ${month} ${year}`;
  };

  const fetchArticles = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://dev.to/api/articles?page=${page}&per_page=3`
      );
      const data: Article[] = await response.json();

      const filteredArticles = data.filter(
        (article) => !displayedIds.has(article.id)
      );

      setArticles(filteredArticles);

      setDisplayedIds((prevIds) => {
        const newIds = new Set(prevIds);
        filteredArticles.forEach((article) => newIds.add(article.id));
        return newIds;
      });
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(page);
  }, [page]);

  const handleExploreMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-full max-w-[1312px] mx-auto py-10 px-6">
      <h2 className="text-2xl sm:text-[32px] text-center text-[#571244] font-semibold mb-8">
        More Articles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[30px]">
        {articles.map((article) => (
          <article
            key={article.id}
            className="w-full h-auto flex flex-col rounded-t-lg gap-6 sm:gap-[32px]"
          >
            <div className="w-full h-[200px] sm:h-[300px] relative">
              
              <Image
                src={article.cover_image || "/images/bg.png"}
                alt={article.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>

            <div className="w-full h-auto gap-4 sm:gap-6">
              <h3 className="text-lg sm:text-[20px] my-2 sm:my-[10px] text-[#151515] font-semibold">
                {article.title}
              </h3>
              <div className="text-[#696969]">
                <p className="w-full h-auto font-normal text-base sm:text-[18px] my-4 sm:my-[20px]">
                  {article.description}
                </p>
                <div className="flex justify-between">
                  <div className="flex h-auto justify-center items-center">
                    <p className="w-[129px] font-normal text-sm sm:text-[15px] self-center">
                      {formatDate(article.published_timestamp)}
                    </p>
                    <div className="h-3/4 self-center border-l-2 border-gray-700 mx-3"></div>
                    <p className="self-center">
                      {article.reading_time_minutes} mins read
                    </p>
                  </div>
                  <p
                    onClick={() => router.push(`/articles/${article.id}`)}
                    className="w-[74px] h-auto text-[#571244] self-center underline underline-offset-2 decoration-1 cursor-pointer"
                  >
                    View Post
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="w-full flex justify-center mt-8">
        <button
          onClick={handleExploreMore}
          disabled={isLoading}
          className="h-[48px] bg-none p-[12px_24px] border font-semibold align-middle text-base sm:text-lg border-[#571244] text-[#571244] rounded-md text-center"
        >
          {isLoading ? "Loading..." : "Explore More"}
        </button>
      </div>
    </div>
  );
};
