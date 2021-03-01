<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Masks Now TN</v-toolbar-title>
    </v-app-bar>

    <v-main>
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
