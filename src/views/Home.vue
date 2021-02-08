import { fragment } from "vue-fragment"; Vue.use(Plugin);

<template>
  <v-container>
    <!-- <fragment> -->
    <Nav></Nav>
    <Info></Info>
    <News></News>
    <Help></Help>
    <Contact></Contact>
    <!-- </fragment> -->
  </v-container>
</template>

<script>
import Nav from "@/components/Nav";
import Info from "@/components/Info";
import News from "@/components/News";
import Help from "@/components/Help";
import Contact from "@/components/Contact";
export default {
  name: "Home",
  components: {
    Nav: Nav,
    Info: Info,
    News: News,
    Help: Help,
    Contact: Contact,
  },
};
</script>
