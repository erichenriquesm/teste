<template>
  <div class="grid-2">
    <img
      src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg"
      alt="img"
    />
    <b-form-group v-if="!loading" class="form">
      <h4>Login</h4>
      <label for="email">E-mail</label>
      <b-form-input
        id="email"
        v-model="email"
        placeholder="Digite seu E-mail"
      ></b-form-input>
      <p v-if="!validEmail" class="danger">Digite um e-mail válido</p>
      <label for="senha">Senha</label>
      <b-form-input
        id="senha"
        v-model="senha"
        placeholder="Digite sua senha"
      ></b-form-input>
      <p v-if="!validSenha" class="danger">Digite sua senha</p>
      <p v-if="warn" class="danger">E-mail ou senha incorretos</p>
      <div class="forgot">
        <router-link class="forgot" to="">Esqueceu a senha?</router-link>
      </div>
      <div class="btn-right">
        <BaseButton variant="primary">Cadastre-se</BaseButton>
        <div @click="onSubmit">
          <BaseButton variant="info">Login</BaseButton>
        </div>
      </div>
    </b-form-group>
        <div class="loading" v-if="loading">
      <b-spinner></b-spinner>
    </div>
  </div>
</template> 

<script>
import axios from "axios";
import BaseButton from "@/components/BaseButton.vue";
export default {
  data() {
    return {
      email: "",
      senha: "",
      validEmail: true,
      validSenha: true,
      warn:false,
      loading:false
    };
  },
  components: {
    BaseButton,
  },
  methods: {
    onSubmit() {
      var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!this.email.match(emailRegex)) {
        this.validEmail = false;
        return;
      }
      if (!this.senha.length) {
        this.validSenha = false;
        return;
      }
      this.validSenha = true;
      this.validEmail = true;
      let data = {
        email: this.email,
        password: this.senha,
      };
      var that = this;
      this.loading = true;
      axios.post("http://127.0.0.1:8000/api/user/login", data)
      .then((resp) => {
        if (resp.data.token) {
          localStorage.setItem("user", JSON.stringify(resp.data));
          this.$router.push('/dashboard');
          that.warn = false;
        }
      })
      .catch(() =>{
        that.warn = true;
      })
      .finally(() =>{
        that.loading = false;
      })
    },
  },
  mounted(){
    if(localStorage.getItem('user')){
      this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped lang="scss">
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.form {
  padding: 10px;
  width: 90%;
  height: fit-content;
  margin: 0 auto;
}
label {
  margin: 10px 0;
  font-weight: 600;
}
.forgot {
  text-decoration: none;
  margin: 10px 0 !important;
  display: flex;
  justify-content: flex-end;
}
.danger {
  color: red;
}
</style>