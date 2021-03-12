import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import store from "./store.js";

declare module "@vue/runtime-core" {
  interface State {
    [propName: string]: itemListData;
  }
  interface itemListData {
    itemName: string;
    cost: number;
    futureCost: number;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
