import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="relative pt-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Dive Deep into
              <span className="text-sky-800">AI</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              DeepDaiv is a platform for exploring the depths of AI.
            </p>
            <div className="flex justify-center space-x-6">
              <button className="px-8 py-4 rounded-lg bg-sky-900 text-white text-lg font-semibold">
                Try for free
              </button>
              <button className="px-8 py-4 rounded-lg border border-gray-600 text-white text-lg font-semibold">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="ml-2 text-xl font-bold text-white">
                DeepDaiv
              </span>
            </div>
            <p className="text-gray-400">
              © 2024 DeepDaiv. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
