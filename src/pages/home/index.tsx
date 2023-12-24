import PokemonCard from "@/components/PokemonCard";
import SearchForm from "@/components/SearchForm";
import { usePokemonListStore } from "@/store/pokemonList";
import { POKEMON_USER_URL } from "@/utils/constant";
import axios from "axios";
import Reactloading from "react-loading";
import { useToken } from "@/utils/token";
import { useState } from "react";
const HomePage = ({ clearToken, user }: any) => {
  const tokens = useToken();

  const onVote = async (id: any) => {
    let data = {
      item: [{ id: id }],
    };
    console.log(tokens.token);
    const response = await axios.post(`${POKEMON_USER_URL}pokemon/vote`, data, {
      headers: {
        Authorization: `bearer ${tokens.token}`,
      },
    });
    console.log(tokens.token);

    if (response.data.success) {
      console.log(response.data.success);
      console.log(tokens.token);
    }
  };
  const { pokemon, fetchPokemon } = usePokemonListStore();
  const [logout, setLogout] = useState<true | false>(false);
  return (
    <div className="duration-100">
      <div className="w-[100%] px-[10px] pb-[30px] md:pb-[10px] min-h-[100px] bg-[#b32b2b]  m-0 p-0 fixed z-50">
        <div className="flex flex-col md:flex-row  items-center justify-between ">
          <img
            src="/image/Pokedex_logo.png"
            className="max-h-[100px] mt-[5px] ml-3 "
            alt=""
          />
          <div className="flex flex-col items-end justify-center">
            <div
              className="flex justify-center items-center bg-[#FFCE31] hover:bg-[#dbae4d] p-3 rounded-[30px] border-solid border-[4px] border-[#010065] w-[150px] cursor-pointer"
              onClick={() => {
                setLogout(!logout);
              }}
            >
              <div className="font-bold  mt-[0px] capitalize text-ellipsis overflow-hidden">
                {user.firstName}
              </div>
            </div>
            {logout == true && (
              <div
                onClick={clearToken}
                className="cursor-pointer text-black bg-white p-2 px-4 rounded-lg hover:text-[#525252] font-bold fixed md:top-20 md:right-[5.3rem] border-[1px] border-black top-40 translate-x-[50%] right-[50%] shadow-lg"
              >
                LOGOUT
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-[90%] m-[auto] max-w-[1100px] pt-[200px]">
        <SearchForm />
        {fetchPokemon.loading && (
          <div className="h-[600px] flex justify-center items-center">
            <Reactloading type="spin" color="black" />
          </div>
        )}
        {!fetchPokemon.loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-[20px] mt-[40px]">
            {pokemon.data?.map((item) => {
              return (
                <PokemonCard
                  key={item.id}
                  image={item.image || ""}
                  name={item.name}
                  id={item.id}
                  types={item.types}
                  score={item.score}
                  onVote={onVote}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
