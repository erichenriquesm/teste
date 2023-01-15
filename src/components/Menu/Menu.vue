<template>
  <div class="menu">
    <div @click="redirect('')" class="header-icon">
      <img class="logo" src="@/assets/logo.png" alt="git" />
    </div>
    <div
      @click="redirect('')"
      class="items"
      :class="{ selected: $route.name === 'Dashboard' }"
    >
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
        class="feather feather-home"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
      <p class="info">Dashboard</p>
    </div>
    <div
      @click="redirect('search')"
      class="items"
      :class="{ selected: $route.name === 'CepSearch' }"
    >
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
      <p class="info">Pesquisar CEP</p>
    </div>
    <div
      @click="redirect('listagem')"
      class="items"
      :class="{ selected: $route.name === 'ListagemCep' }"
    >
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
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
    transition: 0.3s;
  }
  .info {
    display: block;
    font-size: 12px;
    font-weight: 400;
  }
  .selected {
    position: relative;
    &::after {
      content: "";
      width: 8px;
      height: 8px;
      position: absolute;
      border-radius: 50%;
      left: 0px;
      top: 8px;
      background-color: #45BF86;
    }
  }
}
.header-icon {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
}
.items {
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  svg {
    transition: 0.3s;
  }
}
.items:hover {
  svg,
  p {
    color: #45BF86;
  }
}
.info {
  display: none;
  font-size: 14px;
  margin: 0;
}
.selected {
  svg,
  p {
    color: #45BF86;
  }
}
</style>
