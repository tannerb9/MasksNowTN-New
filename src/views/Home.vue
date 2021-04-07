<template>
  <v-container>
    <Info></Info>
    <News></News>
    <Help></Help>
  </v-container>
</template>

<script>
import Info from "@/components/Info";
import News from "@/components/News";
import Help from "@/components/Help";
export default {
  name: "Home",
  components: {
    Info: Info,
    News: News,
    Help: Help,
  },
};
</script>
