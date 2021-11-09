<template>
  <div>

    <b-form-row>
      <b-col>
        <b-form-group label="Название">
          <b-form-input v-model="title"/>
        </b-form-group>
      </b-col>
      <b-col cols="12" md="3">
        <b-form-group label="Измерение">
          <b-form-input placeholder="кв.м, шт, м, и т.п." v-model="counterType"/>
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-row>
      <b-col>
        <b-form-group :label="'Стоимость за '+ counterType">
          <b-form-input v-model="price"/>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Трудозатраты (в минутах)">
          <b-form-input v-model="time"/>
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-row align-h="end">
      <b-col cols="auto">
        <b-btn @click="add">Сохранить</b-btn>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "newLabor",
  data() {
    return {
      title:'',
      counterType:'',
      price:'',
      time:'',

    }
  },
  methods:{
    ...mapActions({'addLabor':'labors/addLabor'}),
    async  add(){
      await this.addLabor({title:this.title, counterType:this.counterType, price:this.price, time:this.time})
      this.title=this.counterType=this.price=this.time=''
    }
  }
}
</script>

<style scoped>

</style>
