<template>
  <div>
    <h4>Известные рабочие материалы</h4>
    <b-row align-h="end">
      <b-col cols="auto">новый</b-col>
    </b-row>
    <b-row>
      <b-col>
    <new-material/>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
            <materials-list :materials="allMaterials"/>
      </b-col>
    </b-row>
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
