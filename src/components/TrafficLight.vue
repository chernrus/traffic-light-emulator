<template id="traffic-light-template">
  <div class="traffic-light">
    <div class="traffic-light__signal red-signal">
      <div v-if="currentLight !== 1" class="traffic-light__dim-layer">

      </div>
      <LightTimer
        v-if="currentLight === 1"
        v-bind:startTime="startTime"
        v-on:onTimeout="changeLight"
        />
    </div>
    <div class="traffic-light__signal yellow-signal">
      <div v-if="currentLight !== 2" class="traffic-light__dim-layer"></div>
      <LightTimer
        v-if="currentLight === 2"
        v-bind:startTime="startTime"
        v-on:onTimeout="changeLight"
        />
    </div>
    <div class="traffic-light__signal green-signal">
      <div v-if="currentLight !== 3" class="traffic-light__dim-layer"></div>
      <LightTimer
        v-if="currentLight === 3"
        v-bind:startTime="startTime"
        v-on:onTimeout="changeLight"
        />
    </div>
  </div>
</template>

<script>
import LightTimer from '@/components/LightTimer';
export default {
  name: 'TrafficLight',
  components: {
    LightTimer
  },
  data: function() {
    return {
      currentLight: 1,
      prevLight: 1,
      timer: null
    }
  },
  props: {
    lightNumber: {
      type: Number,
      default: 1
    },
    startTime: {
      type: Number,
      default: 10
    }
  },
  created: function() {
    this.currentLight = this.lightNumber;
  },
  watch: {
    '$route': function (page) {
      this.prevLight = this.currentLight;
      this.currentLight = this.lightNumber;
    }
  },
  methods: {
    changeLight: function() {
      if(this.timer) clearTimeout(this.timer);

      if(this.currentLight === 1 || this.currentLight === 3) {
        this.prevLight = this.currentLight;
        this.$router.replace(`/2`);
      }
      else if(this.currentLight === 2 && this.prevLight === 1) {
        this.prevLight = 2;
        this.$router.replace(`/3`);
      }
      else if(this.currentLight === 2 && this.prevLight === 3) {
        this.prevLight = 2;
        this.$router.replace(`/1`);
      }
      else if(this.currentLight === 2 && this.prevLight === 2) {
        this.prevLight = 2;
        this.$router.replace(`/3`);
      }
    },
    someF: function(params) {
      console.log('asdasd' + params);
    }
  }
}
</script>


<style scoped>
  .traffic-light {
    width: 150px;
    height: 450px;
    background-color: #ccc;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .traffic-light__signal {
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 50px;
  }

  .red-signal {
    background-color: #D03526;
  }

  .yellow-signal {
    background-color: #FFB321;
  }

  .green-signal {
    background-color: #A6CE39;
  }

  .traffic-light__dim-layer {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: #000;
    opacity: 0.7;
  }
</style>
