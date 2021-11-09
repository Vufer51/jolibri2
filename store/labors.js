export const state = () => ({ labors: [] });

export const getters = {
  getAllLabors: (state) => state.labors,
};
export const mutations = {
  loadAll(store, laborss) {
    store.labors = laborss;
  },
  addLabor(store, labor) {
    store.labors.push(labor);
  },
};
export const actions = {
  async loadAllLabors({ commit }) {
    await this.$strapi
      .find("labors")
      .then((result) => commit("loadAll", result))
      .catch((error) => commit("addError", JSON.stringify(error)));
  },
  async addLabor({ commit }, labor) {
    await this.$strapi
      .create("labors", labor)
      .then((result) => commit("addLabor", result))
      .catch((error) => commit("addError", JSON.stringify(error)));
  },
};
