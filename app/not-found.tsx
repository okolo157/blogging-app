import Link from "next/link";
export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      data-testid="404-page"
    >
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-[#571244] text-white rounded-lg hover:bg-[#571244]-600 transition-colors"
      >
        Go Back to Tobams Home
      </Link>
    </div>
  );
}
