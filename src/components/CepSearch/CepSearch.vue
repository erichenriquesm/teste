<template>
  <div class="container">
    <div>
      <h4 class="">Pesquisando CEP no banco de dados</h4>
    </div>

    <b-form-input
      v-mask="'#####-###'"
      type="text"
      name="search"
      id="search"
      v-model="search"
    />

    <div v-if="!loading">
      <div v-if="cep.length" class="cep-card">
        <div class="header">
          <p>Rondon</p>
          <span class="info">87800-000</span>
        </div>
        <div class="footer">
          <p>Estado: <span class="info">PR</span></p>
        </div>
      </div>

      <div v-if="!cep.lenth" class="not-found">
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
export default {
  data() {
    return {
      search: "",
      cep: [],
      loading: true,
    };
  },
  methods: {
    fetchCep() {
      var that = this;
      this.loading = true;
      axios
        .post()
        .then((resp) => {
          that.cep = resp;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  watch: {
    serach(e) {
      if (e.length === 9) {
        e = e.replace(/-/g, "");
        console.log(e);
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
@keyframes float {
  to {
    transform: translateY(-5px);
  }
}
</style>