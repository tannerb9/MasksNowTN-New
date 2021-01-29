import { fragment } from "vue-fragment"; Vue.use(Plugin);

<template>
  <v-container>
    <!-- <fragment> -->
    <Info></Info>
    <News></News>
    <Help></Help>
    <Contact></Contact>
    <!-- </fragment> -->
  </v-container>
</template>

<script>
import Info from "@/components/Info";
import News from "@/components/News";
import Help from "@/components/Help";
import Contact from "@/components/Contact";
export default {
  name: "Home",
  components: {
    Info: Info,
    News: News,
    Help: Help,
    Contact: Contact,
  },
};
</script>
