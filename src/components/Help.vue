<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-card>
        <v-card-title> Volunteer </v-card-title>
        <v-card-text>
          There are many ways to help, including sewing, delivering and
          making kits</v-card-text
        >
        <v-card-actions>
          <v-btn outlined rounded text>
            Sign Up
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="auto">
      <v-card>
        <v-card-title> Donate Funds </v-card-title>
        <v-card-text>
          All monetary donations stay in TN and go towards purchasing
          mask-making materials and kits (fabric, elastic, rotary blade
          replacements, cutting mats, ink, paper, etc.) and mailing
          masks and kits to those who need them!
        </v-card-text>
        <v-card-actions>
          <v-btn outlined rounded text>
            Donate Funds
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="auto">
      <v-card>
        <v-card-title> Donate Materials </v-card-title>
        <v-card-text>
          All donations stay in TN and are used to make masks for
          Tennessean's who need them!</v-card-text
        >
        <v-card-actions>
          <v-btn outlined rounded text>
            <a
              href="mailto:distribution.make@gmail.com?subject=New Material Donation"
              >Donate Materials</a
            >
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="auto">
      <v-card>
        <v-card-title> National </v-card-title>
        <v-card-text>
          We are the Tennessee chapter of MaskNow.org. Not from TN? Find
          your state’s chapter.</v-card-text
        >
        <v-card-actions>
          <v-btn outlined rounded text v-on:click="goToNationalSite">
            National
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Help",
  methods: {
    goToNationalSite: function() {
      window.open("https://masksnow.org/volunteer/", "_blank");
    },
  },
};
</script>
