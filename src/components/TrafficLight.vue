<template id="traffic-light-template">
  <div class="traffic-light">
    <div class="traffic-light__signal red-signal">
      <div class="traffic-light__dim-layer">

      </div>
    </div>
    <div class="traffic-light__signal yellow-signal">
      <div class="traffic-light__dim-layer">

      </div>
    </div>
    <div class="traffic-light__signal green-signal">
      <div class="traffic-light__dim-layer">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrafficLight'
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
