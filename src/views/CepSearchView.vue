<template>
  <BaseView>
    <CepSearch />
  </BaseView>
</template>

<script>
import CepSearch from "@/components/CepSearch/CepSearch.vue";
import BaseView from "@/components/BaseView.vue";

export default {
  components: {
    CepSearch,
    BaseView,
  },
};
</script>

<style scoped lang="scss">
</style>