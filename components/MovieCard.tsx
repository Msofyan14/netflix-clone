/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/router";
import useInfoModal from "@/hooks/useInfoModal";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  const { openModal } = useInfoModal();
  return (
    <div className=" group relative h-[24vw] bg-zinc-900 md:h-[12vw]">
      <img
        className="duration h-[24vw] w-full cursor-pointer rounded-md object-cover shadow-xl transition delay-200 group-hover:opacity-90 sm:group-hover:opacity-0 md:h-[12vw]"
        src={data.thumbnailUrl}
        alt="thumbnail"
      />
      <div className=" absolute top-0 z-10 w-full scale-0 opacity-0 transition delay-200 duration-100 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:scale-110 group-hover:opacity-100 ">
        <img
          className="duration h-[24vw]  w-full cursor-pointer rounded-t-md object-cover shadow-xl transition md:h-[12vw]"
          src={data.thumbnailUrl}
          alt="thumbnail"
        />
        <div className="absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition lg:p-4">
          <div className="flex flex-row items-center gap-3">
            <div
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white transition hover:bg-neutral-300 lg:h-10 lg:w-10"
              onClick={() => router.push(`/watch/${data?.id}`)}
            >
              <BsFillPlayFill size={30} />
            </div>
            <FavoriteButton movieId={data?.id} />
            <div
              onClick={() => openModal(data?.id)}
              className="group/item ml-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-white transition hover:border-neutral-300 lg:h-10 lg:w-10"
            >
              <BiChevronDown
                size={30}
                className="group/item:text-neutral-300 text-white"
              />
            </div>
          </div>
          <p className="mt-4 font-semibold text-green-400">
            New <span className="text-white">2023</span>
          </p>
          <div className="mt-4 flex flex-row items-center gap-2">
            <p className="text-[10px] text-white lg:text-sm">{data.duration}</p>
          </div>
          <div className="mt-4 flex flex-row items-center gap-2">
            <p className="text-[10px] text-white lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
