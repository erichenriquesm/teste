<template>
  <div class="menu">
    <div class="header-icon">
      <img class="logo" src="@/assets/logo.png" alt="git" />
    </div>
    <div @click="redirect('search')" class="items">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-search"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <p class="info">Pesquidar CEP</p>
    </div>
    <div @click="redirect('listagem')" class="items">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-list"
      >
        <line x1="8" y1="6" x2="21" y2="6"></line>
        <line x1="8" y1="12" x2="21" y2="12"></line>
        <line x1="8" y1="18" x2="21" y2="18"></line>
        <line x1="3" y1="6" x2="3.01" y2="6"></line>
        <line x1="3" y1="12" x2="3.01" y2="12"></line>
        <line x1="3" y1="18" x2="3.01" y2="18"></line>
      </svg>
      <p class="info">Listagem de CEP</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    redirect(link) {
      this.$router.push(`/${link}`);
    },
  },
};
</script>

<style scoped lang="scss">
.menu {
  width: 100px;
  border: 1px solid rgb(209, 208, 208);
  height: 100vh;
  padding: 10px;
}
.logo {
  width: 45px;
  height: 45px;
}
.menu:hover {
  width: 200px;
  .header-icon {
    justify-content: flex-start;
  }
  .items {
    justify-content: flex-start;
    padding: 0 14px;
  }
  .info {
    display: block;
    font-size: 12px;
    font-weight: 400;
  }
}
.header-icon {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.items {
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: 0.3s;
  svg {
    transition: 0.3s;
  }
}
.items:hover {
  svg,
  p {
    color: rgb(44, 204, 44);
  }
}
.info {
  display: none;
  font-size: 14px;
  margin: 0;
}
</style>
