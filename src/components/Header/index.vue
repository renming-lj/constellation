<template>
  <header class="header">
    <img src="../../assets/img/cons.png" />
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.44rem;
  background-color: #db7093;
  color: #fff;
  font-size: 0.18rem;

  img {
    width: 0.23rem;
    margin-right: 0.05rem;
  }
}
</style>