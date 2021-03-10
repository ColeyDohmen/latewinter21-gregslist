<template>
  <div class="jobs-page container">
    <div class="row">
      <div class="col text-center">
        <h1>Houses</h1>
      </div>
    </div>
    <div class="row my-3">
      <form class="form-inline" @submit.prevent="createCar">
        <div class="form-group">
          <input
            type="text"
            name="make"
            id="make"
            class="form-control"
            placeholder="Make"
            aria-describedby="helpId"
            v-model="state.newCar.make"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="model"
            id="model"
            class="form-control"
            placeholder="Model"
            aria-describedby="helpId"
            v-model="state.newCar.model"
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            name="year"
            id="year"
            class="form-control"
            placeholder="Year"
            aria-describedby="helpId"
            v-model="state.newCar.year"
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            name="price"
            id="price"
            class="form-control"
            placeholder="Price"
            aria-describedby="helpId"
            v-model="state.newCar.price"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="description"
            id="description"
            class="form-control"
            placeholder="Description"
            aria-describedby="helpId"
            v-model="state.newCar.description"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="imgUrl"
            id="imgUrl"
            class="form-control"
            placeholder="ImgUrl"
            aria-describedby="helpId"
            v-model="state.newCar.imgUrl"
          />
        </div>
        <button class="btn btn-info" type="submit">Create</button>
      </form>
    </div>
    <div class="row">
      <Car v-for="carData in state.cars" :key="carData._id" :car="carData" />
    </div>
  </div>
</template>

<script>
// import { reactive, computed, onMounted } from 'vue'
// import { AppState } from '../Appstate'
// // import { carsService } from '../services/CarsService'
// // import Car from '../components/Car'
// import { useRouter } from 'vue-router'

export default {
  name: 'HousesPage',
  setup() {
    // const router = useRouter()
    // const state = reactive({
    //   //   cars: computed(() => AppState.cars),
    //   //   newCar: {}
    // })
    // // NOTE this runs when the page/component is first 'mounted' to the dom
    // onMounted(() => {
    //   carsService.getCars()
    // })

    // return {
    //   state,
    //   async createCar() {
    //     const carId = await carsService.createCar(state.newCar)
    //     router.push({ name: 'CarDetails', params: { id: carId } })
    //     state.newCar = {}
    //   }
    // }
    //   },
    //   components: {
    //     Job
  }
}
</script>

<style lang="scss" scoped>
</style>
