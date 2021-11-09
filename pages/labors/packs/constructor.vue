<template>
  <div>
    <h4>Конструктор пакетов</h4>
    <b-row>
      <b-col>
        <b-card no-body>
          <b-card-title>
            <b-row>
              <b-col>
                <b-form-input v-model="title" placeholder="Название пакета"/>
              </b-col>
            </b-row>

          </b-card-title>
          <b-card-body>
            <b-row>
              <b-col>
                <b-form-checkbox v-model="withPrice">Использовать объемы</b-form-checkbox>
              </b-col>
            </b-row>
            <b-row><b-col>
              <vue-typeahead-bootstrap show-on-focus  :serializer="s=>s.title"  :data="laborsWithoutSelected" @hit="addLaborToList"/>
            </b-col></b-row>
            <b-list-group>
              <b-list-group-item v-for="labor in labors" :key="labor.id" to="#">
                <b-row>
                  <b-col>{{ labor.title }}</b-col>
                  <b-col v-if="withPrice" cols="12" md="2">
                    <b-form-input v-model="labor.counter" size="sm" type="number"/>
                  </b-col>
                </b-row>
              </b-list-group-item>
            </b-list-group>
            {{ labors }}
          </b-card-body>
          <b-card-footer>
            <b-row class="p-0">
              <b-col>
                <label for="discount">Скидка на пакет</label>
              </b-col>
              <b-col>
                <b-form-input id="discount" v-model="discount" type="number"/>
              </b-col>
            </b-row>
          </b-card-footer>
        </b-card>
      </b-col>
      <b-col>
      <b-row>
        <b-col>
          <b-form-select v-model="selectedLabor" :options="laborsWithoutSelected" text-field="title"
                         value-field="id" @change="addLaborToList">
            <b-form-select-option value="null">Выберите</b-form-select-option>
          </b-form-select>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <vue-typeahead-bootstrap show-on-focus  :serializer="s=>s.title"  :data="laborsWithoutSelected" @hit="addLaborToList"/>
        </b-col>
      </b-row>
      </b-col>
    </b-row>

    <b-row>

    </b-row>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';

export default {
  name: "constructor",
  components: {
    VueTypeaheadBootstrap
  },
  data() {
    return {
      temp: '',
      title: '',
      discount: 0,
      selectedLabor: '',
      labors: [],
      withPrice: false,
    }
  },
  computed: {
    ...mapGetters({'allLabors': 'labors/getAllLabors'}),
    laborsWithoutSelected() {
      return this.allLabors.filter(x => !(this.labors.find(i => x.id === i.id)));
    }
  },
  methods: {
    addLaborToList(e) {
      //console.log(e.id);
      //this.selectedLabor=
        this.labors.push(this.allLabors.find(item=>+item.id===+e.id))
     // console.log(this.selectedLabor);
     // this.labors.push(this.allLabors.find(item=>item.id===this.selectedLabor))
      //this.labors.push(JSON.parse(JSON.stringify(this.allLabors.find(item => +item.id === +this.selectedLabor))))
    },
    removeLabor(id) {
      this.labors.splice(this.labors.findIndex(x => x.id === id), 1)
    }
  }
}
</script>

<style scoped>

</style>
