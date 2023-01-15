<template>
  <div class="container">
    <BaseHeader title="Dashboard" />

  </div>
</template> 

<script>
import axios from "axios";
import BaseHeader from "@/components/BaseHeader.vue";
export default {
  data() {
    return {
      search: "",
      ceps: [],
      currentPage: 1,
      rows: 1,
      loading: true,
      perPage: 3
    };
  },
  components: {
    BaseHeader,
  },
  methods: {
    fetchCeps(page) {
      var that = this;
      this.loading = true;
      axios
        .get(`http://127.0.0.1:8000/api/cep?page=${page ? page : 1}`)
        .then((resp) => {
          that.ceps = resp.data.data;
          that.currentPage = resp.data.current_page;
          that.rows = resp.data.total;
          that.perPage = resp.data.per_page;
        })
        .catch(() => {
          that.ceps = [];
        })
        .finally(() =>{
          that.loading = false;
        })
    },
    nextPage(e) {
      this.fetchCeps(e);
    },
  },
  mounted() {
    this.fetchCeps();
  },
};
</script>

<style scoped lang="scss">
h4 {
  font-weight: 400;
  font-size: 20px;
  margin-top: 20px;
}
.float {
  animation: float 2s alternate infinite ease-in;
}
.cep-card {
  width: 70%;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  border: 1px solid #0000002e;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.info {
  font-weight: bold;
  margin-bottom: 1em;
}
.paginate {
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
}
@keyframes float {
  to {
    transform: translateY(-5px);
  }
}
</style>