<template>
  <v-footer padless>
    <v-card class="flex" flat tile>
      <v-card-text class="py-0 black--text text-center">
        <strong>Masks Now TN</strong>
      </v-card-text>
      <v-card-title>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 black"
          dark
          icon
          v-on:click="clickHandler(icon)"
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    icons: ["mdi-email", "mdi-facebook", "mdi-instagram"],
  }),
  methods: {
    clickHandler: (str) => {
      {
        str == "mdi-email"
          ? (window.location = "mailto:distribution.make@gmail.com")
          : null;
      }
      {
        str == "mdi-facebook"
          ? window.open(
              "https://www.facebook.com/groups/masksnowtn/",
              "_blank"
            )
          : null;
      }
      {
        str == "mdi-instagram"
          ? window.open(
              "https://www.instagram.com/masksnowtn/",
              "_blank"
            )
          : null;
      }
    },
  },
};
</script>
