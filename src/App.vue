<template>
  <div id="app">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Content,
    Footer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: rgba(0, 0, 0, 0.2);
}
#app {
  position: absolute;
  left: 50%;
  top: 5%;
  transform: translate(-50%);
}
</style>
