import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      itemListData: [
        {
          itemName: "cat",
          cost: 0,
          futureCost: 0,
        },
      ],
    };
  },
  mutations: {
    ADD_ITEM(state, payload) {
      state.itemListData.push(payload);
    },
  },
  getters: {
    getItems: (state) => state.itemListData,
  },
  actions: {
    addItem({ commit }, payload) {
      commit("ADD_ITEM", payload);
      console.log(this.state);
    },
  },
});
