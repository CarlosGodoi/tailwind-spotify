import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Search,
  User,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-black/40 p-1">
            <ChevronLeft />
          </button>
          <button className="rounded-full bg-black/40 p-1">
            <ChevronRight />
          </button>
          <div className="w-60 flex items-center bg-zinc-100 rounded-full p-2 gap-2">
            <Search className="text-black" />
            <span className="font-semibold text-black text-sm">Kendrick</span>
          </div>
        </div>
        <div className="flex items-center rounded-full bg-black/40 p-1 gap-2">
          <div className="w-7 h-7 flex items-center justify-center rounded-full bg-zinc-500">
            <User />
          </div>
          edu85godoi
          <ChevronDown />
        </div>
      </div>
      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center overflow-hidden hover:bg-white/10 transition-colors gap-4"
        >
          <Image
            src={'/album1.jpg'}
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>Trap Friday</strong>
          <button className="w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play size={16} />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center overflow-hidden hover:bg-white/10 transition-colors gap-4"
        >
          <Image
            src={'/capa2.jpg'}
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>The Best Funk</strong>
          <button className="w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play size={16} />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center overflow-hidden hover:bg-white/10 transition-colors gap-4"
        >
          <Image
            src={'/capa7.jfif'}
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>Eminem</strong>
          <button className="w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play size={16} />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center overflow-hidden hover:bg-white/10 transition-colors gap-4"
        >
          <Image
            src={'/capa4.jfif'}
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>Emanon</strong>
          <button className="w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play size={16} />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center overflow-hidden hover:bg-white/10 transition-colors gap-4"
        >
          <Image
            src={'/capa5.jfif'}
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>Rap Trap</strong>
          <button className="w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play size={16} />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center overflow-hidden hover:bg-white/10 transition-colors gap-4"
        >
          <Image
            src={'/capa6.jfif'}
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>Kendrick Lamar</strong>
          <button className="w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play size={16} />
          </button>
        </a>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl mt-10">Made for Eduardo</h2>
        <span className="font-semibold text-1xl text-zinc-300 mt-10">
          Show All
        </span>
      </div>

      <div className="grid grid-cols-6 gap-4 mt-4">
        <a
          href="#"
          className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10"
        >
          <Image
            src={'/album1.jpg'}
            className="w-full"
            width={120}
            height={120}
            alt="Capa do album"
          />
          <strong className="font-semibold">Trap Friday</strong>
          <span className="text-sm text-zinc-400">By NKFB</span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10"
        >
          <Image
            src={'/capa6.jfif'}
            className="w-full"
            width={120}
            height={120}
            alt="Capa do album"
          />
          <strong className="font-semibold">Kendrick Lamar</strong>
          <span className="text-sm text-zinc-400">DANM.</span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10"
        >
          <Image
            src={'/capa5.jfif'}
            className="w-full"
            width={120}
            height={120}
            alt="Capa do album"
          />
          <strong className="font-semibold">Deryaba Presents</strong>
          <span className="text-sm text-zinc-400">postermywall</span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10"
        >
          <Image
            src={'/capa7.jfif'}
            className="w-full"
            width={120}
            height={120}
            alt="Capa do album"
          />
          <strong className="font-semibold">Eminem</strong>
          <span className="text-sm text-zinc-400">The Eminem Show</span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10"
        >
          <Image
            src={'/capa2.jpg'}
            className="w-full"
            width={120}
            height={120}
            alt="Capa do album"
          />
          <strong className="font-semibold">The Best Funk</strong>
          <span className="text-sm text-zinc-400">Funk</span>
        </a>
      </div>
    </main>
  );
}
