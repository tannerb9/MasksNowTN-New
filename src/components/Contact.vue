<template>
  <v-footer padless>
    <v-card class="flex" flat tile>
      <v-card-text
        class="pt-1 pb-0 text-h6 text-center footer brand-name"
      >
        MasksNOW TN
      </v-card-text>
      <v-card-text class="d-flex py-0 justify-center footer">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
          v-on:click="clickHandler(icon)"
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
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

<style scoped>
.footer {
  background-color: #b03412;
}

.brand-name {
  color: #fff !important;
}

.v-icon {
  background-color: #b03412;
}
</style>
