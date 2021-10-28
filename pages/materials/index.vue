<template>
  <div>
    <h4>Известные рабочие материалы</h4>
    <b-row align-h="end">
      <b-col cols="auto">новый</b-col>
    </b-row>
    <new-material/>
    {{allMaterials}}
  </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  name: "materials",
  data() {
    return {}
  },
  computed:{
    ...mapGetters(['allMaterials'])
  }
}
</script>

<style scoped>

</style>
