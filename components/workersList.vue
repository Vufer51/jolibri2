<template>
  <b-list-group>
    <b-list-group-item v-for="(worker, n) in workers" :key="n">
<b-row>
  <b-col class="h5">{{worker.lastName}} {{worker.firstName}} {{worker.middleName}}</b-col>
</b-row>
      <b-row>
        <b-col><a :href="'tel:'+worker.phone">{{worker.phone}}</a> </b-col>
      </b-row>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "workersList",
  props:['workers'],
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
