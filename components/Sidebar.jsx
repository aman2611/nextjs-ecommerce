import React from "react";

import {action, adventure, cityBuilder, crime, drama, fantasy, horror, mystery, puzzle, roguelike, rpg, scifi, shooter, simulation, strategy, windows, playstation, xbox, android, ios} from "@/utils/logos";

const Sidebar = () => {
  return (
    <div className=" left-0 h-screen min-w-[200px] bg-[#202020] text-white flex flex-col justify-between md:block hidden">
      <div className="p-4">
        <ul className="space-y-2">
          <li>
            <h2 className="text-[20px] font-bold mb-3">
              <a href="/home/search" >
                All Games
              </a>
            </h2>
          </li>
          <li>
            <h2 className="text-[20px] font-bold mb-3">
              <a href="/home/library" >
                Library
              </a>
            </h2>

          </li>
          <li>
            <h2 className="text-[20px] font-bold mb-3">
              <a href="/home/favourites" >
                Favourites
              </a>
            </h2>

          </li>
        </ul>
        <div className='w-full h-[1px] rounded-[12px] bg-[#3f3f3f] outline-none border-none my-2'></div>

        <h2 className="text-[20px] font-bold mb-3">Platforms</h2>
        <ul className="space-y-2">
          <li >
            <a href="home/search?page=1&pt=Windows" className="flex gap-2 items-center">
              <div className='border-2 border-white rounded-[5px] p-[5px]'>{windows}</div>
              <p> Windows </p>
              </a></li>
          <li>
            <a href="home/search?page=1&pt=Playstation" className="flex gap-2 items-center">
              <div className='border-2 border-white rounded-[5px] p-[5px]'> {playstation}</div>
              <p> Playstation </p>
              </a>
              </li>
          <li>
            <a href="home/search?page=1&pt=Xbox" className="flex gap-2 items-center">
            <div className='border-2 border-white rounded-[5px] p-[5px]'> {xbox}</div>
              <p> XBox </p>
            </a>
          </li>
          <li>
            <a href="home/search?page=1&pt=Android" className="flex gap-2 items-center">
            <div className='border-2 border-white rounded-[5px] p-[5px]'> {android}</div>
            <p> Android </p>
            </a>
          </li>
          <li>
            <a href="home/search?page=1&pt=iOS" className="flex gap-2 items-center">
            <div className='border-2 border-white rounded-[5px] p-[5px]'> {ios}</div>
            <p> iOS </p>
            </a>
          </li>
        </ul>

        <div className='w-full  h-[1px] rounded-[12px] bg-[#3f3f3f] outline-none border-none my-2'></div>


        <h2 className="text-[20px] font-bold mb-3" >Genre</h2>
        <ul className="space-y-2">
          <li><a href="/home/search?page=1&g=Action" className="flex gap-2 items-center">
            <div className='border-2 border-white rounded-[5px] p-[5px]'> {action}</div>
            <p> Action </p></a></li>
          <li><a href="/home/search?page=1&g=Adventure" className="flex gap-2 items-center"><div className='border-2 border-white rounded-[5px] p-[5px]'> {adventure}</div>
            <p> Adevnture </p></a></li>
          <li><a href="/home/search?page=1&g=City+Builder"className="flex gap-2 items-center">
            <div className='border-2 border-white rounded-[5px] p-[5px]'> {cityBuilder}</div>
            <p> City Builder </p></a></li>
          <li><a href="/home/search?page=1&g=Crime"className="flex gap-2 items-center">
            <div className='border-2 border-white rounded-[5px] p-[5px]'> {crime}</div>
            <p> Crime </p></a></li>
          <li><a href="/home/search?page=1&g=Drama"className="flex gap-2 items-center">
            <div className='border-2 border-white rounded-[5px] p-[5px]'> {drama}</div>
            <p> Drama </p></a></li>
          <li><a href="/home/search?page=1&g=Fantasy"className="flex gap-2 items-center">
            <div className='border-2 border-white rounded-[5px] p-[5px]'> {fantasy}</div>
            <p> Fantasy </p></a></li>
          <li><a href="/home/search?page=1&g=Horror"className="flex gap-2 items-center">
            <div className='border-2 border-white rounded-[5px] p-[5px]'> {horror}</div>
            <p> Horror </p></a></li>
          <li><a href="/home/search?page=1&g=Mystery"className="flex gap-2 items-center">
            <div className='border-2 border-white rounded-[5px] p-[5px]'> {mystery}</div>
            <p> Mystery </p></a></li>
          <li><a href="/home/search?page=1&g=Puzzle" className="flex gap-2 items-center"><div className='border-2 border-white rounded-[5px] p-[5px]'> {puzzle}</div>
            <p> Puzzle </p></a></li>
          <li><a href="/home/search?page=1&g=Roguelike"className="flex gap-2 items-center">
            <div className='border-2 border-white rounded-[5px] p-[5px]'> {roguelike}</div>
            <p> Roguelike </p></a></li>
          <li><a href="/home/search?page=1&g=RPG" className="flex gap-2 items-center"><div className='border-2 border-white rounded-[5px] p-[5px]'> {rpg}</div>
            <p> RPG </p></a></li>
          <li><a href="/home/search?page=1&g=Sci-Fi"className="flex gap-2 items-center">
            <div className='border-2 border-white rounded-[5px] p-[5px]'> {scifi}</div>
            <p> Sci-Fi </p></a></li>
          <li><a href="/home/search?page=1&g=Shooter" className="flex gap-2 items-center"><div className='border-2 border-white rounded-[5px] p-[5px]'> {shooter}</div>
            <p> Shooter </p></a></li>
          <li><a href="/home/search?page=1&g=Simulation"className="flex gap-2 items-center">
            <div className='border-2 border-white rounded-[5px] p-[5px]'> {simulation}</div>
            <p> Simulation </p></a></li>
          <li><a href="/home/search?page=1&g=Strategy" className="flex gap-2 items-center"><div className='border-2 border-white rounded-[5px] p-[5px]'> {strategy}</div>
            <p> Strategy </p></a></li>
        </ul>

      </div>

    </div>
  );
};

export default Sidebar;
