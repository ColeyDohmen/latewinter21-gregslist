<template>
  <div class="col-4">
    <!-- NOTE the route contains both the name and an object to provide needed params -->
    <router-link :to="{ name: 'CarDetails', params: { id: car._id } }">
      <div class="card car">
        <img class="card-img-top" :src="house.imgUrl" alt="house" />
        <div class="card-body">
          <h4 class="card-title">
            {{ house.bedrooms }} | {{ house.bathrooms }}
          </h4>
          <p class="card-text">{{ house.year }} | {{ house.price }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'house',
  props: {
    car: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style scoped>
.house:hover {
  transform: translateY(-5px);
  box-shadow: 1px 3px 5px rgb(94, 94, 94);
  cursor: pointer;
}

.house {
  transition: all 0.2s;
  color: black;
}
</style>
