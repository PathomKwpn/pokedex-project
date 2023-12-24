import { Type } from "@/interface/pokemonDetails";

import { Link } from "react-router-dom";

interface PokemonCardProps {
  image: string;
  name: string;
  id: number;
  types: Type[];
  score: number;
  onVote: any;
}
const PokemonCard = ({
  image,
  name,
  id,
  types,
  score,
  onVote,
}: PokemonCardProps) => {
  const getType = types.find(() => {
    return types[0].type.name;
  });
  const checkScore = (score: number) => {
    return score > 1000 ? `${score / 1000} K` : score;
  };
  return (
    <div
      key={id}
      className={`rounded-[20px] overflow-hidden shadow  dark:border-gray-700 bg-type-${getType?.type.name} max-w-[275px] m-[auto] w-full] drop-shadow-lg `}
    >
      <div className="flex justify-between ">
        <h5 className=" capitalize ml-[25px] mt-[15px] text-[28px] font-bold tracking-tight dark:text-white">
          {name}
        </h5>

        <div className="bg-white opacity-70 rounded-bl-[20px] w-[25%] flex justify-center items-center">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 opacity-50  ">
            #{id}
          </h5>
        </div>
      </div>
      <div className="rounded-[20px] w-full bg-center  aspect-square bg-cover">
        <Link to={`/detail/${name}`} className="z-40">
          <img
            className="absolute h-[218px] p-[20px] w-full z-[1]"
            src={image}
            alt={name}
          />
          <img
            className="opacity-40 pl-[-20px]"
            src="./image/BGpokeball-logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="">
        <div className="flex gap-2 justify-center mt-[-10px] mb-[10px] ">
          {types.map((item) => {
            return (
              // badge-type-${item.type.name}
              <div
                className={`flex items-center justify-center badge-type-${item.type.name} p-2 rounded-[30px] min-w-[80px]  pt-1 pb-1 border-solid border-2 border-black-500 opacity-90`}
              >
                <span className="text-white font-bold text-[20px] capitalize">
                  {item.type.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mb-3 gap-4">
        <div className="font-bold text-[18px] items-center">
          {checkScore(score)}
        </div>
        <div className=" cursor-pointer">
          <img
            src="./image/heart.png"
            className="w-[30px]"
            alt=""
            onClick={() => {
              onVote(id);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default PokemonCard;
