<template>
  <v-container>
    <Nav></Nav>
    <Info></Info>
    <News></News>
    <Help></Help>
  </v-container>
</template>

<script>
import Nav from "@/components/Nav";
import Info from "@/components/Info";
import News from "@/components/News";
import Help from "@/components/Help";
export default {
  name: "Home",
  components: {
    Nav: Nav,
    Info: Info,
    News: News,
    Help: Help,
  },
};
</script>
