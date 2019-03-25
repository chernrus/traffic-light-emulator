<template id="light-timer-template">
  <div class="light-timer">
    <span class="light-timer__time">{{ currentTime }}</span>
  </div>
</template>

<script>
  export default {
    name: 'LightTimer',
    data: function() {
      return {
        timer: null,
        currentTime: null
      }
    },
    props: {
      startTime: {
        type: Number,
        default: 20
      },
      onTimeout: {
        type: Function
      }
    },
    created: function() {
      this.currentTime = this.startTime;
      if(this.timer) clearInterval(this.timer);

      this.timer = setInterval(this.setCurrentTime, 1100);
    },
    methods: {
      setCurrentTime: function() {
        if(this.currentTime > 1) {
          this.currentTime--;
        }
        else {
          clearInterval(this.timer);
          this.$emit('onTimeout', this.currentTime);
        }
      }
    }
  }
</script>

<style scoped>
  .light-timer__time {
    font-size: 48px;
    line-height: 100px;
  }
</style>
