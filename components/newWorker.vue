<template>
  <div>
    <b-form-row>
      <b-col>
        <b-form-group label="Имя">
          <b-form-input v-model="firstName"/>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Отчество">
          <b-form-input v-model="middleName"/>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Фамилия">
          <b-form-input v-model="lastName"/>
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-row>
      <b-col>
        <b-form-group label="Адрес">
          <b-form-input v-model="address"/>
        </b-form-group>
      </b-col>
      <b-col  cols="12" md="3">
        <b-form-group label="Телефон">
          <b-form-input v-model="phone"/>
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
  name: "newWorker",
  data() {
    return {
      firstName:'',
      lastName:'',
      middleName:'',
      address:'',
      phone:'',
    }
  },
  methods:{
    ...mapActions(['addWorker']),
   async  add(){
      await this.addWorker({firstName:this.firstName, middleName:this.middleName, lastName:this.lastName, phone:this.phone, address:this.address})
     this.firstName=this.lastName=this.middleName=this.address=this.phone=''
    }
  }
}
</script>

<style scoped>

</style>
