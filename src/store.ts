import { createStore, Store as VuexStore } from "vuex";

//State

type ListItem = {
  itemName: string;
  cost: number;
  futureCost: number;
};

export type State = {
  ListItems: ListItem[];
};

const state: State = {
  ListItems: [{ itemName: "dog", cost: 3, futureCost: 43 }],
};

//Mutations

enum MutationType {
  addItem = "ADD_ITEM",
}

type Mutations = {
  [MutationType.addItem](state: State, payload: ListItem): void;
};

const mutations: Mutations = {
  [MutationType.addItem](state, payload) {
    state.ListItems.push(payload);
  },
};

//Actions

//Getters

enum GetterType {
  getList = "GET_LIST",
}

type Getters = {
  [GetterType.getList](state: State);
};

const getters: Getters = {
  [GetterType.getList](state) {
    console.log("getting");
    return state.ListItems;
  },
};

//Store Instance

export const store = createStore<State>({
  state,
  mutations,
  getters,
});

export function useStore() {
  return store as VuexStore<State>;
}
