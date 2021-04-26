<template>
  <v-container class="container">
    <v-row>
      <v-col class="info-text pl-5">
        <p class="main-els text-left pt-10">
          <v-img
            :src="logo"
            alt="'We Can Do It'
          inspirational image."
            class="info-img ml-5"
          >
          </v-img
          >{{ info1 }}
        </p>
        <p class="main-els text-left pb-10">{{ info2 }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      info1:
        "MasksNOW TN is the Tennessee chapter of the national organization, MasksNOW Coalition. We have partnered with Make Nashville as our physical headquarters to serve the entire state of Tennessee. ",
      info2:
        "Our mission is to enable everyone to wear a mask to save lives, improve our economy and restore our nation to caring greatness. Through our core values of service, collaboration, community, integrity, and empathy, we have organized to match volunteer sewists to ongoing needs in our Tennessee communities, and we are working towards normalizing mask wearing in public through our public relations and social media outreach. We have brought together a diverse group of experts in healthcare, manufacturing, nonprofit organizations, volunteer coordination, politics, public relations, social media and technology to enable us to solve these unique challenges.",
      logo: require("@/img/MasksNowTNLogo.png"),
    };
  },
};
</script>

<style scoped>
.container {
  background-color: white;
  box-shadow: 10px 10px #e6c545;
}

p:last-of-type {
  padding-bottom: 20px !important;
}

.info-text {
  max-width: 1000px;
  font-size: 1.2rem;
  hyphens: auto;
}

.info-img {
  width: 40vw;
  max-width: 500px;
  float: right;
}

.row {
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  .info-img {
    width: 90vw;
  }
}
</style>
