<template>
  <div>
    <h4>Работники</h4>
<new-worker/>
    <workers-list :workers="allWorkers"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "index",
  data() {
    return {}
  },
  computed:{
    ...mapGetters(['allWorkers'])
  }
}
</script>

<style scoped>

</style>
