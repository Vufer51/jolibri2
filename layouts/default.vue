<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">Жолибри</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/materials">Материалы</b-nav-item>
          <b-nav-item to="/workers">Работники</b-nav-item>
          <b-nav-item-dropdown text="Работы">
            <b-dropdown-item to="/labors">Единицы работ</b-dropdown-item>
            <b-dropdown-item href="#" disabled>Пакеты работ</b-dropdown-item>
            <b-dropdown-item href="#" disabled>Комплексы</b-dropdown-item>
          </b-nav-item-dropdown>


        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div v-if="errorsCount>0">
      <b-alert v-for="(error, n) in errorsGet"
               :key="n"
               show
               dismissible
               variant="warning"
               @dismissed="removeError(n)"
      >
        {{ error }}
      </b-alert>
    </div>
    <b-container fluid>
      <nuxt/>
    </b-container>
  </div>

</template>

<script>

import {mapGetters, mapMutations} from "vuex";

export default {
  name: "default",
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['errorsCount', "errorsGet"])
  },
  methods: {
    ...mapMutations(['removeError'])
  }
}
</script>

<style scoped>

</style>
