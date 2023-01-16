<template>
  <button :class="variant"><slot></slot></button>
</template>

<script>
export default {
    props:['variant']
}
</script>

<style scoped lang="scss">
button{
    border: none;
    height: 45px;
    border-radius: 5px;
    padding: 10px 25px;
    transition: .3s;
    &:hover{
        transform: scale(1.2);
    }
}
.primary{
    background-color: rgb(12, 182, 12);
    color: white;
}
.info{
    background-color: rgb(34, 34, 247);
    color: white;
}
</style>