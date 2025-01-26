// app/articles/[id]/page.tsx
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { load } from "cheerio";
import { Navbar } from "@/components/Navbar";
import { MoreArticlesSection } from "@/components/MoreArticles";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

// Type definition for Article
interface Article {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  readable_publish_date: string;
  reading_time_minutes: string;
  published_timestamp: string;
  body_html: string;
  tags: string[];
}

type Params = Promise<{ id: string }>;

export default async function BlogDetails({ params }: { params: Params }) {
  const { id } = await params;

  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) {
    notFound();
  }

  const response = await fetch(`https://dev.to/api/articles/${parsedId}`);

  if (!response.ok) {
    notFound();
  }

  const article: Article = await response.json();

  if (!article || parsedId !== article.id) {
    notFound();
  }

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

  //youtube embed issue
  const makeEmbedsResponsive = (html: string) => {
    const $ = load(html);

    $("iframe[src*='youtube.com'], iframe[src*='vimeo.com']").each(
      (_, element) => {
        const $iframe = $(element);

        $iframe.removeAttr("width").removeAttr("height");

        $iframe.wrap(
          '<div class="iframe-container" style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden;"></div>'
        );

        $iframe.css({
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        });
      }
    );

    return $.html();
  };

  return (
    <div className="flex flex-col overflow-clip sm:w-[375px] lg:w-[1440px] bg-white text-black">
      <Navbar />
      <div className="w-full max-w-[1312px] mx-auto flex flex-col gap-12 py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full gap-5">
          <div className="flex justify-start items-center mb-4">
            <div className="rounded-md max-w-[159px] max-h-[33px] bg-[#15151533] p-2 text-[#571244] backdrop-blur-md text-sm font-medium">
              {article.tags[0]}
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-[#6C757D] text-sm sm:text-base font-normal mb-6">
            {formatDate(article.published_timestamp)}
          </p>

          <div className="relative w-full h-[250px] sm:h-[300px] lg:h-80 mb-6">
            <Image
              src={article.cover_image || "/images/logo.webp"}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>

          <div
            className="prose prose-sm sm:prose lg:prose-lg mx-auto overflow-x-auto whitespace-pre-wrap break-words"
            dangerouslySetInnerHTML={{
              __html: makeEmbedsResponsive(article.body_html),
            }}
          />
        </div>
      </div>

      <MoreArticlesSection />
      <Newsletter />
      <div className="text-white">
        <Footer />
      </div>
    </div>
  );
}
