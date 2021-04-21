<template>
  <v-container>
    <h1>News</h1>
    <v-sheet>
      <v-slide-group class="pa-4 pt-0" show-arrows>
        <v-slide-item v-for="news in newsPieces" :key="news.title">
          <v-card class="ma-4" width="23vw" height="60vh">
            <v-card-title class="justify-center title">{{
              news.title
            }}</v-card-title>
            <v-img
              v-if="news.image"
              :src="news.image"
              width="95%"
              class="mx-auto"
            ></v-img>
            <v-card-text v-if="news.textBody">{{
              news.textBody
            }}</v-card-text>
            <v-dialog max-width="50vw">
              <template
                v-slot:activator="{ on, attrs }"
                v-if="news.action"
              >
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  class="mt-2"
                >
                  Learn More
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline justify-center">
                  {{ news.title }}
                </v-card-title>
                <v-card-text>{{ news.modalTextBody }}</v-card-text>
              </v-card>
            </v-dialog>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newsPieces: [
        {
          title: "Ben Beard Donates 10,000 Masks",
          image: require("@/img/BenBeard.png"),
          textBody: null,
          action: function() {},
          modalTextBody:
            "It's always wonderful when donors can involve the community and spread the word about masks. Ben Beard organized a neighborhood fundraiser that purchased 10,000 disposable masks and 100 sewn masks (pictured above). The disposable masks went to Vanderbilt University Medical Center, fulfilling their entire request, and the sewn masks were distributed to organizations from Memphis to Chattanooga. Three cheers for Ben and his neighbors! ",
        },
        {
          title: "Chef's Market Donation",
          image: null,
          textBody:
            "Chef's Market of Goodlettsville donated three full garbage bags of fabric. These were going to be used at a quilting program for incarcerated individuals, but that program was postponed.",
          action: null,
        },
        {
          title: "Thomas Brent and Evelyn Graham",
          image: null,
          textBody:
            "Thomas Brent and Evelyn Graham of Nashville ordered 107 masks for his medical practice. They took so long to arrive that he had to purchase others. He donated the original order to Masks NOW.",
          action: null,
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  word-break: normal;
}
</style>
