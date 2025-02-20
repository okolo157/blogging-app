"use client";

import React, { useEffect, useState } from "react";
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
  tag_list: string[];
}

export const BlogSection: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("All Posts");
  const [showMobileFilter, setShowMobileFilter] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); 

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
    setError(null); 
    try {
      const response = await fetch(
        `https://dev.to/api/articles?page=${page}&per_page=6`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }
      const data: Article[] = await response.json();
      setArticles(data);
      setFilteredArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
      setError("Failed to fetch articles. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(page);
  }, [page]);

  useEffect(() => {
    const filtered = articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag =
        selectedTag === "All Posts" || article.tag_list.includes(selectedTag);

      return matchesSearch && matchesTag;
    });

    setFilteredArticles(filtered);
  }, [searchQuery, selectedTag, articles]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const uniqueTags = Array.from(
    new Set(articles.flatMap((article) => article.tag_list))
  );

  return (
    <div
      className="w-full lg:w-[1440px] bg-white p-8 sm:p-[64px_32px] flex flex-col gap-8 sm:gap-[60px]"
      data-testid="blog-section"
    >
      <p className="text-center text-2xl sm:text-[40px] text-[#571244]">
        Stay Updated with the Latest trends in Tobams Group
      </p>

      <div className="w-full max-w-[1312px] mx-auto h-auto sm:h-[40px] gap-4 sm:gap-[28px] flex items-center">
        <div className="relative flex-1">
          <input
            className="border w-full border-t-gray-300 p-2 sm:p-[8px_12px] h-auto pr-10 text-black"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-4 flex items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>

        <div className="sm:hidden relative">
          <button
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="border border-t-gray-300 p-2 flex items-center justify-center w-10 h-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#151515"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          {showMobileFilter && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              <div className="p-2">
                <select
                  className="w-full p-2 border border-gray-300 rounded-md text-black"
                  value={selectedTag}
                  onChange={(e) => {
                    setSelectedTag(e.target.value);
                    setShowMobileFilter(false);
                  }}
                >
                  <option value="All Posts">All Posts</option>
                  {uniqueTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="hidden sm:block relative w-full max-w-[190px]">
          <select
            className="border w-full border-t-gray-300 p-2 sm:p-[8px_12px] h-auto pr-10 appearance-none bg-white text-black"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            <option value="All Posts">All Posts</option>
            {uniqueTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center text-gray-400 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#151515"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {error && (
        <div data-testid="error-message" className="text-red-500 text-center">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[30px] w-full max-w-[1312px] mx-auto">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <article
              key={article.id}
              className="w-full h-auto flex flex-col rounded-t-lg gap-6 sm:gap-[32px]"
              data-testid="blog-post"
            >
              <div className="w-full h-[200px] sm:h-[300px] relative">
                <div className="absolute top-2 left-2 z-10 rounded-md max-w-[250px] flex items-center p-2 text-[#571244] backdrop-blur-[9.09px] bg-white/50 text-sm font-medium">
                  {article.tag_list[0]}
                </div>
                <Image
                  src={article.cover_image || "/images/logo.webp"}
                  alt={article.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>

              <div className="w-full h-auto gap-4 sm:gap-6">
                <h2 className="text-lg sm:text-[20px] my-2 sm:my-[10px] text-[#151515] font-semibold">
                  {article.title}
                </h2>
                <div className="text-[#696969]">
                  <p className="w-full h-auto font-normal text-base sm:text-[18px] my-4 sm:my-[20px]">
                    {article.description}
                  </p>
                  <div className="flex justify-between">
                    <div className="flex h-auto justify-center items-center">
                      <p
                        className="w-[129px] font-normal text-sm sm:text-[15px] self-center"
                        data-cy="article-date" // Add data-cy for article date
                      >
                        {formatDate(article.published_timestamp)}
                      </p>
                      <div className="h-3/4 self-center border-l-2 border-gray-700 mx-3"></div>
                      <p className="self-center">
                        {article.reading_time_minutes} mins read
                      </p>
                    </div>
                    <p
                      onClick={() => router.push(`/articles/${article.id}`)}
                      data-cy="article-card"
                      className="w-[74px] h-auto text-[#571244] cursor-pointer self-center underline underline-offset-2 decoration-1"
                    >
                      View Post
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full text-center text-[#571244] text-lg sm:text-xl">
            No articles found.
          </div>
        )}
      </div>

      <div className="w-full flex justify-center">
        <button
          onClick={handleLoadMore}
          disabled={isLoading}
          className="my-4 sm:my-8 h-[48px] bg-none p-[12px_24px] border font-semibold align-middle text-base sm:text-lg border-[#571244] text-[#571244] rounded-md text-center"
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};
