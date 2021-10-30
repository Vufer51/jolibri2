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
  removeError(store, errorPosition) {
    store.errors.splice(errorPosition, store.errors.length - errorPosition);
  },
  loadAllMaterials(store, materials) {
    store.materials = materials;
  },
  addMaterial(store, material) {
    store.materials.push(material);
  },
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    // await dispatch("user/loadUserInfo");
    await dispatch("loadAllMaterials");
  },
  async loadAllMaterials({ commit }) {
    await this.$strapi
      .find("materials")
      .then((result) => commit("loadAllMaterials", result))
      .catch((error) => commit("addError", JSON.stringify(error)));
  },
  async addMaterial({ commit }, material) {
    await this.$strapi
      .create("materials", material)
      .then((result) => commit("addMaterial", result))
      .catch((error) => commit("addError", JSON.stringify(error)));
  },
};
