<template>
  <div class="house-details">
    <h1>Welcome to the details page</h1>
    {{ state.house }}
    <button type="button" class="btn btn-outline-danger" @click="deleteHouse">
      Delete House
    </button>

    <form
      class="form-inline"
      onsubmit="app.housesController.createHouse(event)"
    >
      <div class="form-group">
        <input
          type="number"
          name="bedrooms"
          id="bedrooms"
          class="form-control"
          placeholder="Bedrooms"
          aria-describedby="helpId"
          v-model="state.house.bedrooms"
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          name="bathrooms"
          id="bathrooms"
          class="form-control"
          placeholder="Bathrooms"
          aria-describedby="helpId"
          v-model="state.house.bathrooms"
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
          v-model="state.house.year"
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
          v-model="state.house.price"
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
          v-model="state.house.description"
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
          v-model="state.house.imgUrl"
        />
      </div>
      <button class="btn btn-info" type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { housesService } from '../services/HousesService'
import { AppState } from '../Appstate'

export default {
  name: 'HouseDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      house: computed(() => AppState.activeHouse)
    })

    onMounted(() => {
      housesService.getHouse(route.params.id)
    })

    // onBeforeRouteLeave((to, from, next) => {
    //   if (window.confirm('You sure bro?')) {
    //     AppState.activeCar = {}
    //     next()
    //   }
    // })

    return {
      route,
      state
      //   async deleteCar() {
      //     await carsService.deleteCar(state.car._id)
      //     router.push({ name: 'Cars' })
      //   }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
