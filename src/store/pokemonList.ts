import { create } from "zustand";
import { IPokemonDetailResponse } from "@/interface/pokemonDetails";

const initStore = {
  pokemon: {
    data: [],
    loading: false,
    error: null,
  },
  fetchPokemon: {
    data: [],
    loading: false,
    error: null,
  },
};

type pokemonType = {
  data: IPokemonDetailResponse[];

  loading: boolean;
  error: null | any;
};

type UsePokemonListStoreType = {
  pokemon: pokemonType;
  fetchPokemon: pokemonType;
  setPokemonList: (value: pokemonType) => void;
  setFetchPokemonList: (value: pokemonType) => void;
  clearPokemon: () => void;
};

//สร้าง state เก็บข้อมูล pokemon
export const usePokemonListStore = create<UsePokemonListStoreType>((set) => ({
  ...initStore,
  setPokemonList: (value: pokemonType) => set({ pokemon: value }), // set ข้อมูลไปที่ setPokemonList
  setFetchPokemonList: (value: pokemonType) => set({ fetchPokemon: value }), // set ข้อมูลไปที่ setFetchPokemonList
  clearPokemon: () => set({ ...initStore }), //ล้างข้อมูล
}));
