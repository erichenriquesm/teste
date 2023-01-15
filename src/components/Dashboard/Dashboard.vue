<template>
  <div class="container">
    <BaseHeader title="Dashboard" />
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        :controls="slides.length > 1 ? true : false"
        indicators
        label-next=""
        label-prev=""
        background="#ababab"
        img-width="750"
        img-height="200"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide v-for="(slide, index) in slides" :key="index">
          <template #img>
            <img
              class="d-block img-fluid w-100 carousel-img"
              width="1024"
              height="480"
              :src="slide"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template> 

<script>
import axios from "axios";
import BaseHeader from "@/components/BaseHeader.vue";
export default {
  data() {
    return {
      slide: 0,
      sliding: true,
      slides:[
        "https://img.freepik.com/fotos-gratis/figura-triangular-geometrica-legal-em-uma-luz-de-laser-neon-otima-para-fundos-e-papeis-de-parede_181624-9331.jpg?w=2000",
        "https://img.freepik.com/fotos-gratis/ilustracao-de-formas-geometricas-com-luzes-de-laser-de-neon-otimo-para-fundos-e-papeis-de-parede_181624-32746.jpg?w=2000",
        "https://i.pinimg.com/originals/dd/e1/61/dde1613a0a52ac572733ffa1d810d6fe.jpg"

      ]
    };
  },
  components: {
    BaseHeader,
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
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
.carousel-img {
  height: 200px !important;
  object-fit: cover !important;
}
@keyframes float {
  to {
    transform: translateY(-5px);
  }
}
</style>