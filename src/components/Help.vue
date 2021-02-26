<template>
  <!-- <v-container>
    <v-row>
      <v-col v-for="section in sections">
        <v-card>
          <v-card-title> {{ section.title}}</v-card-title>
          <v-card-text>{{ section.body }}</v-card-text>
          <v-card-actions><v-btn></v-btn></v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->

  <v-row justify="space-around">
    <v-col cols="auto">
      <v-card>
        <v-card-title> Volunteer </v-card-title>
        <v-card-text>
          There are many ways to help, including sewing, delivering and
          making kits</v-card-text
        >
        <v-card-actions>
          <v-btn outlined rounded text v-on:click="goToSignUpPage">
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
          <v-btn outlined rounded text v-on:click="goToGoFundMePage">
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
        <v-dialog v-model="dialog">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              click here to see materials needed
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">
              MATERIALS NEEDED
            </v-card-title>
            <ul>
              <li v-for="material in materials" :key="material.text">
                {{ material.text }}
              </li>
            </ul>
            <v-card-text>
              Contact:
              <span
                ><a href="mailto:distribution.make@gmail.com"
                  >distribution.make@gmail.com</a
                ></span
              ></v-card-text
            >
          </v-card>
        </v-dialog>
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
        <v-card-title> Help Elsewhere </v-card-title>
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
  data() {
    return {
      sections: [
        {
          title: "Volunteer",
          textBody:
            "There are many ways to help, including sewing, delivering and making kits",
          modal: null,
          button: {
            text: "Sign Up",
            function: function() {
              window.open("https://masksnow.org/volunteer/", "_blank");
            },
          },
        },
        {
          title: "Donate Funds",
          textBody:
            "All monetary donations stay in TN and go towards purchasing mask-making materials and kits (fabric, elastic, rotary blade replacements, cutting mats, ink, paper, etc.) and mailing masks and kits to those who need them!",
          modal: null,
          button: {
            text: "Donate Funds",
            function: function() {
              window.open(
                "https://charity.gofundme.com/o/en/campaign/masksnow-tennessee",
                "_blank"
              );
            },
          },
        },
        {
          title: "Donate Materials",
          textBody:
            "All donations stay in TN and are used to make masks for Tennessean's who need them!",
          modal: {
            clickToOpenText: "Click here to see materials needed",
            modalHeadline: "MATERIALS NEEDED",
            modalBody: [
              "50% or higher cotton fabric (for the actual mask)",
              "Thin elastic (¼-¾” ideally) to hold the mask onto the head",
              "T-shirt or similarly stretchy material (this can be cut into ties and used in place of elastic in a pinch)",
              "Nosepieces or thin pliable wire that won't poke through masks (even paper clips, and )",
              "Interfacing",
              "Bias tape",
              "90mm and 45mm Blades for rotary cutters",
              "Bags with a sealing feature (like Ziploc) in which finished masks are sent out in",
              "Packaging tape",
              "Cutting mats (ours are worn through from cutting so many kits)",
            ],
            modalActionText: "Contact: ",
            modalAction: {
              href: "mailto:distribution.make@gmail.com",
              text: "distribution.make@gmail.com",
            },
          },
          button: {
            title: "Donate Materials",
            href:
              "mailto:distribution.make@gmail.com?subject=New Material Donation",
          },
        },
        {
          title: "Help Elsewhere",
          textBody:
            "We are the Tennessee chapter of MaskNow.org. Not from TN? Find your state’s chapter.",
          modal: null,
          button: {
            title: "National Site",
            function: function() {
              window.open("https://masksnow.org", "_blank");
            },
          },
        },
      ],
    };
  },
  methods: {
    goToNationalSite: function() {
      window.open("https://masksnow.org", "_blank");
    },
    goToSignUpPage: function() {
      window.open("https://masksnow.org/volunteer/", "_blank");
    },
    goToGoFundMePage: function() {
      window.open(
        "https://charity.gofundme.com/o/en/campaign/masksnow-tennessee",
        "_blank"
      );
    },
  },
};
</script>
