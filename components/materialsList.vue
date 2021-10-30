<template>
  <b-list-group>
    <b-list-group-item v-for="(material, n) in materials" :key="n">
     <b-row>
       <b-col class="h5">{{material.title}}</b-col>
     </b-row>
      <b-row>
        <b-col>{{material.description}}</b-col>
        <b-col cols="1" class="text-center">{{material.counterTitle}}</b-col>
      </b-row>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "materialsList",
  props:['materials'],
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
