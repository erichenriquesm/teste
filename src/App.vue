<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,500;0,600;0,900;1,400&display=swap');#app {
  font-family: "Montserrat", sans-serif;
  input {
    outline: none !important;
    border-radius: 5px;
  }
  .not-found {
    width: 80%;
    padding: 10px;
    margin: 10px auto;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.199);
    p {
      font-weight: 200;
      margin: 0px;
    }
  }
  .loading{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0px;
  }
  .container{
    width: 90%  !important;
    margin-top: 10px;
  }
  .tab-header{
    margin: 20px 0;
  }
  .tab-body{
    padding: 5px;
  }
  .tab-body:nth-child(odd){
    background: rgba(243, 234, 234, 0.37);

  }
}
</style>
