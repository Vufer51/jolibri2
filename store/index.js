//import materials from "@/pages/materials";

export const state = () => ({
  materials: [],
  workers: [],
  errors: [],
});

export const getters = {
  errorsCount: (state) => state.errors.length,
  errorsGet: (state) => state.errors,
  allMaterials: (state) => state.materials,
  allWorkers: (state) => state.workers,
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
  loadAllWorkers(store, workers) {
    store.workers = workers;
  },
  addMaterial(store, material) {
    store.materials.push(material);
  },
  addWorker(store, worker) {
    store.workers.push(worker);
  },
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch("loadAllMaterials");
    await dispatch("loadAllWorkers");
    await dispatch("labors/loadAllLabors");
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
  async loadAllWorkers({ commit }) {
    await this.$strapi
      .find("workers")
      .then((result) => commit("loadAllWorkers", result))
      .catch((error) => commit("addError", JSON.stringify(error)));
  },

  async addWorker({ commit }, worker) {
    await this.$strapi
      .create("workers", worker)
      .then((result) => commit("addWorker", result))
      .catch((error) => commit("addError", JSON.stringify(error)));
  },
};
