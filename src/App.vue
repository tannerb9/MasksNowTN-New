<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Masks Now TN</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

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
              {{ icon.title }}
            </v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
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

import Nav from "@/components/Nav";

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
