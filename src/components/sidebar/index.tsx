import { Heart, HomeIcon, Library, Plus, Search } from 'lucide-react';
import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <div className="flex flex-col mt-10 gap-3">
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <div className="flex items-center justify-center bg-zinc-300 w-6 h-6 rounded">
            <Plus size={14} className="text-black" />
          </div>
          Criar Playlist
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <div className="flex items-center justify-center bg-violet-400 w-6 h-6 rounded">
            <Heart size={14} className="text-zinc-300" />
          </div>
          Músicas curtidas
        </a>
      </div>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hits Brasil
        </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          Daily mix 3
        </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          Funks
        </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          Sofrência Maxima
        </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          Dance Fruits Music - dance music...
        </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          Top Brasil
        </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          Trapzera
        </a>
      </nav>
    </aside>
  );
}
