import { GENRES } from "@/constants/game";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-14 md:p-24 text-black bg-shift-pink-blue">
      <h1 className="text-7xl font-semibold text-center">Song jeopardy</h1>
      <div className="flex flex-wrap justify-center gap-10 mt-10 md:mt-20">
        {GENRES.map((genre) => (
          <div
            key={genre.id}
            className="flex w-full md:w-auto min-w-60 justify-center items-center p-14 rounded-lg shadow-lg bg-slate-50 text-center hover:bg-red-200 hover:text-white hover:shadow-inner cursor-pointer"
          >
            <p className="text-3xl font-medium">{genre.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
