<template>
  <div class="containerCar">
    <div class="container-image">
      <button class="btn btn-sm btn-info mb-2 buttonBack" @click="goBackToCars">Back</button>
      <img class="img-car" :src="getSrc" />
    </div>
    <br />
    <input
      class="pointColorClass"
      type="radio"
      v-for="(point,index) in getPoint"
      :key="index"
      :value="point"
      v-model="selected"
      @click="setColorState(point)"
    />
    <div class="line-d16">
      <div class="d16">
        <span class="d-16-text">{{getName}}</span>
      </div>
    </div>

    <button class="btn btn-info mt-4" @click="updateCounter">Full info</button>
    <car-full v-if="getDataStateFull" :id="id"></car-full>
    <router-view></router-view>
  </div>
</template>
<script>
import CarFull from "./CarFull";

export default {
  components: {
    carFull: CarFull
  },
  data() {
    return {
      id: this.$route.params["id"] - 1,
      colorState: 0,
      selected: 1
    };
  },
  beforeDestroy: function() {
    this.$store.state.carFull.stateFull = false;
  },

  watch: {
    $route(toR) {
      this.id = toR.params["id"];
    }
  },
  methods: {
    goBackToCars() {
      this.$router.push("/cars");
    },
    setColorState(point) {
      this.colorState = point - 1;
    },
    updateCounter() {
      this.$store.dispatch("asyncChangeCounter", 500);
    }
  },
  computed: {
    getDataInStore() {
      return this.$store.state.cars.cars;
    },
    getPoint() {
      return this.getDataInStore[this.id].massSrc.length;
    },
    getSrc() {
      return this.getDataInStore[this.id].massSrc[this.colorState];
    },
    getName() {
      return this.getDataInStore[this.id].name.toUpperCase();
    },
    getDataStateFull() {
      return this.$store.state.carFull.stateFull;
    }
  }
};
</script>
<style >
.containerCar {
  margin-bottom: 80px;
}
.pointColorClass {
  margin: 10px;
}
.buttonBack {
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translate(-50% + 100px);
  width: 100px;
}
.textHeader {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 10px;
}
.container-image {
  position: relative;
  overflow: hidden;
}
.img-car {
  width: auto;
  margin-top: 50px;
  transition: 3s;
}
.line-d16 {
  width: 100%;
  height: 10px;
  background-color: #17a2b8;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.d16 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0;
  width: 40px;
  height: 155px;
  background: #17a2b8;
  position: absolute;
  transform: rotate(90deg);
  margin-left: 100px;
}
.d16:before,
.d16:after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
.d16:before {
  top: -25px;
  border-bottom: 25px solid #17a2b8;
}
.d16:after {
  bottom: -25px;
  border-top: 25px solid #17a2b8;
}
.d-16-text {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-90deg);
  color: white;
  font-size: 16pt;
}
</style>