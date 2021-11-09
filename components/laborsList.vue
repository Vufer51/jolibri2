<template>
  <div>
    <b-row>
      <b-col>
        <b-form-input placeholder="поиск..." v-model="filter"/>
      </b-col>
    </b-row>
    <b-table :items="allLabors" :fields="fields" :filter="filter"></b-table>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "laborsList",
  props: ['labors'],
  data() {
    return {
      filter: '',
      fields: [
        {key: "title", label: "Название"},
        {key: 'counterType', label: "Единицы"},
        {key: 'time', label: "Трудозатраты (минут)"},
        {key: 'price', label: "Стоимость"},
      ],
      items: this.labors
    }
  },
  computed: {
    ...mapGetters({'allLabors': 'labors/getAllLabors'})
  }
}
</script>

<style scoped>

</style>
