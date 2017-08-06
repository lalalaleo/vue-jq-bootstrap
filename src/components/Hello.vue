<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br />
    <h3>已经引入了jQuery和BootStrap</h3>
    <br />
    <div>
      <img src="../assets/icon_jquery.png" />
      <img src="../assets/icon_bootstrap.png" />
    </div>
    <h2>开始构建你的Web吧</h2>
    <br />
    <div>
      <div id="alert" class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>Success!</strong> 成功引入BootStrap Alert组件.
      </div>
    </div>
    <TestChart />
  </div>
</template>

<script>
  import TestChart from './TestChart'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      TestChart: TestChart
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

img {
  width: 160px;
}

#alert {
  margin: 0 auto;
  width: 500px;
}


</style>
