<template>
  <div class="header">
    <h4>{{ title }}</h4>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped lang="scss">
.header {
  font-weight: 900;
  position: relative;
  &::after {
    content: "";
    height: 25px;
    width: 25px;
    background: #09e009;
    position: absolute;
    left: -13px;
    top: 10px;
    border-radius: 5px;
    z-index: -1;
  }
}
</style>