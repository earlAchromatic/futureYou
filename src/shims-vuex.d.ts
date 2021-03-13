/* eslint-disable */

import { Store } from "vuex"; // path to store file
import { State } from "@/store";
import { ComponentCustomProperties } from "vue";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
