<template>
  <div>
    <b-form-row>
      <b-col>
        <b-form-group>
          <label>Название</label>
          <b-form-input v-model="title" placeholder="Введите название"/>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group>
          <label>Измерение</label>
          <b-form-input v-model="counterTitle" placeholder="Шт, л, уп, и т.п."/>
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-row>
      <b-col>
        <b-form-group>
          <label>Описание</label>
          <b-form-textarea v-model="description"/>
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-row  align-h="end">
      <b-col cols="auto" >
        <b-btn @click="add">Сохранить</b-btn>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {mapActions,} from "vuex";
export default {
  name: "newMaterial",
  data() {
    return {
      title:'',
      description:'',
      counterTitle:''
    }
  },
  methods:{
    ...mapActions(['addMaterial']),
    add() {
      this.addMaterial({title:this.title, description:this.description, counterTitle:this.counterTitle})
    }

  }
}
</script>

<style scoped>

</style>
