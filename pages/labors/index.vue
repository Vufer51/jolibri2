<template>
  <div>
    <h4>Известные работы</h4>
    <b-row>
      <b-col>
    <new-labor/>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
<labors-list :labors="allLabors"/>
     </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  name: "labors",
  data() {
    return {}
  },
  computed:{
    ...mapGetters({'allLabors':'labors/getAllLabors'})
  }
}
</script>

<style scoped>

</style>
