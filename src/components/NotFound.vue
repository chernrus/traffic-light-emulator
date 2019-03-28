<template>
  <div class="not-found-page">
    <h1>{{ msg }}</h1>
    <h2>Redirect in {{ time }} sec.</h2>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      msg: 'Page not found!',
      redirectTime: 10,
      time: null,
      timer: null,

    }
  },
  created: function() {
    this.startTimer();
  },
  methods: {
    startTimer: function() {
      this.time = this.redirectTime;
      if(this.timer) clearInterval(this.timer);

      this.timer = setInterval(this.setCurrentTime, 1000);
    },
    setCurrentTime: function() {
      if(this.time > 1) {
        this.time--;
      }
      else {
        clearInterval(this.timer);
        this.redirect();
      }
    },
    redirect: function() {
      this.$router.replace(`/2`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
