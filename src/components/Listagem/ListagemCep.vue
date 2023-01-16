<template>
  <div class="container">
    <BaseHeader title="Listagem de CEP" />
    <b-row class="tab-header">
      <b-col cols="4">Estado</b-col>
      <b-col cols="4">Cidade</b-col>
      <b-col cols="4">CEP</b-col>
    </b-row>

    <div v-if="ceps.length && !loading">
      <b-row v-for="(item, index) in ceps" :key="index" class="tab-body">
        <b-col cols="4">{{ item.estado }}</b-col>
        <b-col cols="4">{{ item.cidade }}</b-col>
        <b-col cols="4">{{ item.cep }}</b-col>
      </b-row>
    </div>

    <div class="loading" v-if="loading">
      <b-spinner></b-spinner>
    </div>

    <div v-if="!loading && ceps.length === 0" class="not-found">
      <p>Nenhum CEP foi encontrado</p>
    </div>

    <div v-if="!loading && ceps.length > 0" class="paginate">
      <b-pagination
        @change="nextPage"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
      ></b-pagination>
    </div>
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
      perPage: 3,
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
        .finally(() => {
          that.loading = false;
        });
    },
    nextPage(e) {
      this.fetchCeps(e);
    },
  },
  mounted() {
    this.fetchCeps();
    if (!localStorage.getItem("user")) {
      this.$router.push("/login");
    }
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