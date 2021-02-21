<template>
  <v-carousel v-model="model">
    <v-carousel-item v-for="(piece, i) in newsPieces" :key="colors[i]">
      <v-sheet :color="colors[i]" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">{{ newsPieces[i].title }}</div>
          <v-img v-if="newsPieces[i].image" :src="newsPieces[i].image">
          </v-img>
          <div class="display-3" v-if="newsPieces[i].textBody">
            {{ newsPieces[i].textBody }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
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
    };
  },
};
</script>
