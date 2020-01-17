<template>
  <div class="container-cars">
    <h1>Cars page</h1>
    <label class="search" for="search">Search</label>
    <input
      class="form-control"
      id="search"
      type="text"
      v-model="searchName"
      placeholder="Write name car..."
    />
    <ul class="list-car">
      <router-link
        class="list-car-item"
        tag="li"
        v-for="(car,index) in filterNames"
        :to="'/cars/'+ car.index"
        :key="index"
      >
        <a>{{car.name}}</a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchName: ""
    };
  },
  computed: {
    filterNames() {
      return this.getDataInStore.filter(item => {
        return (
          item.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
        );
      });
    },
    getDataInStore() {
      return this.$store.state.cars.cars;
    }
  }
};
</script>
<style>
.list-car,
.list-car-item {
  display: block;
}
.container-cars {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-control {
  width: 90%;
  margin: 0px 10px 10px 10px;
}
.search {
  width: 90%;
  text-align: left;
}
</style>