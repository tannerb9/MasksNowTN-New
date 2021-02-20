<template>
  <v-carousel v-model="model">
    <v-carousel-item v-for="(color, i) in newsPieces" :key="color">
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">Slide {{ i + 1 }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "News",
  data: () => ({
    model: 0,
    newsPieces: [
      {
        title: "Ben Beard Donates 10,000 Masks",
        image: require("@/img/MasksNowTNLogo.png"),
        textBody: null,
        action: function() {},
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
    colors: [
      "primary",
      "secondary",
      "yellow darken-2",
      "red",
      "orange",
    ],
  }),
};
</script>
