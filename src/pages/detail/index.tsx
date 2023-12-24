import { IPokemonDetailResponse } from "@/interface/pokemonDetails";
import { pokemonDetailServices } from "@/services";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

type pokemonType = {
  data: IPokemonDetailResponse | undefined;
  loading: boolean;
  error: null | any;
};
const DetailPage = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState<pokemonType>({
    data: undefined,
    loading: true,
    error: null,
  });

  const callData = async (name: string) => {
    const response = await pokemonDetailServices.getPokemonDetail(name);
    if (response.status === 200) {
      if (response.data)
        setPokemon({
          data: {
            ...response.data,
            image:
              response.data.sprites.other.dream_world.front_default ||
              response.data.sprites.other["official-artwork"].front_default,
          },
          loading: false,
          error: null,
        });
    } else {
      setPokemon({
        data: undefined,
        loading: false,
        error: response.error,
      });
    }
  };
  useEffect(() => {
    if (name) callData(name);
  }, [name]);
  return (
    <div className="w-[100%] h-[150px] bg-[#b32b2b]  m-0 p-0 fixed z-50">
      <div className="flex justify-center">
        <img
          src="/image/Pokedex_logo.png"
          className="max-h-[140px] mt-[30px] "
          alt=""
        />
      </div>

      <div className="w-[90%] max-w-[1100px]  m-[auto] mt-5">
        <Link
          to={"/"}
          className="bg-[black] text-white px-[16px] py-[10px] rounded-[16px] font-semibold w-[50px] h-[50px]"
        >
          Back
        </Link>
        {pokemon.data && (
          <div
            className={`rounded-[30px]  shadow max-h-[400px] bg-type-${pokemon.data.types[0].type.name}  m-[auto] mt-[10px]`}
          >
            <div className="rounded-[20px] w-full bg-center bg-red bg-cover relative h-[300px] flex flex-col items-end">
              <h5 className="text-[70px] font-bold tracking-tight pr-[30px] m-0 text-white opacity-60">
                #{pokemon.data.id}
              </h5>
              {/* <div className="max-h-[400px] absolute w-[400px] h-[400px] bg-slate-500"></div> */}
              <img
                className="absolute h-[auto] max-h-[400px] aspect-square sm:translate-x-[50%] translate-y-[-50%] top-[70%] left-[10%] sm:left-[-15%] opacity-60 "
                src="/image/BGpokeball-logo.png"
                alt=""
              />
              <img
                className="absolute rounded-t-lg h-[90%]  w-full  translate-y-[-30%] top-[50%]"
                src={pokemon.data.image}
                alt={pokemon.data.name}
              />
            </div>
            <div className={`pt-7 rounded-[50px] p-[30px] bg-white`}>
              <div className="flex justify-between">
                <h2 className=" capitalize mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-black">
                  {pokemon.data.name}
                </h2>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
                  {/* #{pokemon.data.id} */}
                </h5>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] gap-y-[30px]">
                <div className="border-b-2 border-black pb-3">
                  <div className="flex gap-x-[10px]">
                    <div className="text-[#4CAFEB] font-semibold">Height</div>
                    <div className="text-black">
                      {(pokemon.data.height / 10).toFixed(2)} m.
                    </div>
                  </div>
                  <div className="flex gap-x-[10px]">
                    <div className="text-[#4CAFEB] font-semibold">Weight</div>
                    <div className="text-black">
                      {(pokemon.data.weight / 10).toFixed(2)} g.
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 justify-start sm:justify-end mt-[10px] border-b-2 border-black pb-3">
                  {pokemon.data.types.map((item) => {
                    return (
                      <span
                        className={`badge-type-${item.type.name} px-[14px] capitalize py-1 rounded-[12px] flex justify-center items-center font-bold`}
                      >
                        {item.type.name}
                      </span>
                    );
                  })}
                </div>
                <div className="">
                  <h5 className="text-black font-bold text-[20px] capitalize border-b-2 border-black pb-3">
                    ablilities
                  </h5>
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-[16px] mt-[16px]">
                    {pokemon.data.abilities.map((item) => {
                      return (
                        <div
                          className={`bg-type-${pokemon.data?.types[0].type.name} px-[14px] capitalize py-1 rounded-[12px] text-white font-semibold`}
                        >
                          {item.ability.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h5 className="text-black font-bold text-[20px] capitalize border-b-2 border-black pb-3">
                    stat
                  </h5>
                  <div className="grid grid-cols-1 gap-[10px] mt-[16px]">
                    {pokemon.data.stats.map((item) => {
                      return (
                        <div className="grid grid-cols-[30%,20%,50%] gap-x-[30px] gap-y-[10px] ">
                          <div className="text-[black] capitalize font-semibold">
                            {item.stat.name}
                          </div>
                          <div className="">{item.base_stat}</div>
                          <div className="relative pt-1 w-[120px] sm:w-[100px]">
                            <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-[40px] ">
                              <div
                                style={{ width: `${item.base_stat}%` }}
                                className={`shadow-none flex flex-col text-center whitespace-nowrap text-black justify-center bg-type-${pokemon.data?.types[0].type.name} font-bold rounded-[40px]`}
                              ></div>
                            </div>
                          </div>
                          {/* <div className="text-black">{item.base_stat}</div> */}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* {pokemon.data && (
          <PokemonCard
            image={pokemon.data?.image || ""}
            name={pokemon.data?.name}
            id={pokemon.data.id}
            types={pokemon.data.types}
          />
        )} */}
      </div>
    </div>
  );
};

export default DetailPage;
