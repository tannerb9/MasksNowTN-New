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
          <!-- <strong class="subheading"
            >Get connected with us on social networks!</strong
          >

          <v-spacer></v-spacer> -->

          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 black"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon }}
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
    socialMediaLinks: [
      "https://www.facebook.com/groups/masksnowtn/",
      "https://www.instagram.com/masksnowtn/",
    ],
  }),
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
