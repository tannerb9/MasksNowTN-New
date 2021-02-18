<template>
  <div>
    <v-container class="">
      <v-row>
        <v-col>
          <h1 class="main-els">Masks Now TN</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="main-els">{{ info1 }}</p>
          <p class="main-els">{{ info2 }}</p>
        </v-col>
        <v-col>
          <v-img
            :src="require('@/img/MasksNowTNLogo.png')"
            alt="'We Can Do It'
          inspirational image."
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
    };
  },
};
</script>
