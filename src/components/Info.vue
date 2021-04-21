<template>
  <v-container>
    <v-row class="row">
      <v-col>
        <h1 class="main-els">MasksNOW TN</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="info-img pr-5">
        <v-img
          :src="logo"
          alt="'We Can Do It'
          inspirational image."
          max-width="450px"
        >
        </v-img>
      </v-col>
      <v-col class="info-text pl-5">
        <p class="main-els text-left">{{ info1 }}</p>
        <p class="main-els text-left">{{ info2 }}</p>
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
.info-text {
  max-width: 450px;
}

.info-img {
  max-width: 450px;
}

.row {
  justify-content: center;
}
</style>
