<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Masks Now TN</v-toolbar-title>
    </v-app-bar>

    <v-main class="main">
      <router-view></router-view>
    </v-main>

    <Contact />
  </v-app>
</template>

<script>
import Contact from "@/components/Contact";
export default {
  name: "App",
  components: { Contact },
};
</script>

import Nav from "@/components/Nav";

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
}

.main {
  padding-top: 30px !important;
  background-color: #153570;
}
</style>
