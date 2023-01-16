<template>
  <div class="container">
    <BaseHeader title="Pesquisando CEP no banco de dados" />

    <b-form-input
      v-mask="'#####-###'"
      type="text"
      name="search"
      id="search"
      v-model="search"
    />

    <div v-if="!loading">
      <div v-if="!loading && cep.id && search.length == 9" class="cep-card">
        <div class="header">
          <p>{{ cep.cidade }}</p>
          <span class="info">{{ cep.cep }}</span>
        </div>
        <div class="footer">
          <p>
            Estado: <span class="info">{{ cep.estado }}</span>
          </p>
        </div>
      </div>

      <div v-if="!cep.id && search.length === 9" class="not-found">
        <p>Nenhum CEP foi achado com a pesquisa {{ this.search }}</p>
      </div>
    </div>
    <div class="loading" v-if="loading && search.length === 9">
      <b-spinner></b-spinner>
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
      cep: {},
      loading: true,
    };
  },
  components: {
    BaseHeader,
  },
  mounted() {
    if (!localStorage.getItem("user")) {
      this.$router.push("/login");
    }
  },
  methods: {
    fetchCep(cep) {
      var that = this;
      this.loading = true;
      axios
        .get(`http://127.0.0.1:8000/api/cep/${cep}`)
        .then((resp) => {
          that.cep = resp.data;
        })
        .catch(() => {
          that.cep = {};
        })
        .finally(() => {
          that.loading = false;
        });
    },
  },
  watch: {
    search(e) {
      if (e.length === 9) {
        e = e.replace(/-/g, "");
        this.fetchCep(e);
      }
    },
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
  width: 40%;
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
@keyframes float {
  to {
    transform: translateY(-5px);
  }
}
</style>