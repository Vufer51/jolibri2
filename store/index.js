import materials from "@/pages/materials";

export const state = () => ({
  materials: [],
  errors: [],
});

export const getters = {
  errorsCount: (state) => state.errors.length,
  errorsGet: (state) => state.errors,
  allMaterials: (state) => state.materials,
};
export const mutations = {
  addError(store, error) {
    store.errors.push(error);
  },
  addMaterial(store, material) {
    store.materials.push(material);
  },
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    // await dispatch("user/loadUserInfo");
  },
  async addMaterial({ commit }, material) {
    console.log("staret");
    await this.$strapi
      .create("materials", material)
      .then((result) => commit("addMaterial", result))
      .catch((error) => commit("addError", JSON.stringify(error)));
  },
};
