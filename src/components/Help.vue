<template>
  <v-container>
    <h1>How You Can Help</h1>
    <v-row>
      <v-col v-for="section in sections" v-bind:key="section.title">
        <v-card
          class="help-card d-flex flex-column justify-space-between"
          height="18rem"
        >
          <v-card-title class="justify-center">
            {{ section.title }}
          </v-card-title>
          <v-card-text class="pb-1">
            {{ section.textBody }}
          </v-card-text>
          <v-dialog v-if="section.modal" max-width="50rem">
            <template class="p-2" v-slot:activator="{ on, attrs }">
              <v-btn
                color="#153570"
                plain
                :elevation="0"
                v-bind="attrs"
                v-on="on"
                class="justify-center bluetext text-capitalize"
              >
                {{ section.modal.clickToOpenText }}
              </v-btn>
            </template>
            <v-card>
              <v-card-title
                class="headline justify-center text-no-wrap"
              >
                {{ section.modal.modalHeadline }}
              </v-card-title>
              <v-list>
                <v-list-item
                  v-for="(text, index) in section.modal.modalBody"
                  v-bind:class="[
                    index % 2 ? 'white' : 'grey lighten-2',
                  ]"
                  :key="text"
                  class="justify-center"
                >
                  {{ text }}
                </v-list-item>
                <v-divider></v-divider>
              </v-list>
              <v-card-text
                class="text-uppercase black--text font-weight-medium"
              >
                {{ section.modal.modalAction.text }}
                <span
                  ><a
                    :href="`mailto:${section.button.href}`"
                    class="text-lowercase text-body-1 text-no-wrap"
                    >{{ section.modal.modalAction.hyperlinkText }}</a
                  ></span
                ></v-card-text
              >
            </v-card>
          </v-dialog>
          <v-card-actions class="justify-center pt-1">
            <v-btn v-if="section.button.href" class="hyperlink-button"
              ><a
                :href="`mailto:${section.button.href}`"
                class="text-decoration-none white--text"
                >{{ section.button.text }}</a
              >
            </v-btn>
            <v-btn
              v-else
              v-on:click="section.button.function"
              class="hyperlink-button"
              >{{ section.button.text }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-container class="airtable">
      <iframe
        class="airtable-embed mb-8"
        src="https://airtable.com/embed/shrtdAwqaNjZwgVbm?backgroundColor=whi"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="533"
        style="background: transparent; border: 1px solid #ccc;"
      ></iframe>
    </v-container>
  </v-container>
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
            clickToOpenText: "View Needed Materials",
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
            modalAction: {
              text: "Contact: ",
              hyperlinkText: "distribution.make@gmail.com",
            },
          },
          button: {
            text: "Donate Materials",
            href:
              "distribution.make@gmail.com?subject=New Material Donation",
          },
        },
        {
          title: "Help Elsewhere",
          textBody:
            "We are the Tennessee chapter of MasksNow.org. Not from TN? Find your state’s chapter.",
          modal: null,
          button: {
            text: "National Site",
            function: function() {
              window.open("https://masksnow.org", "_blank");
            },
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
#modalBtn {
  background: white;
}

.airtable {
  margin-top: 2rem;
  max-width: 1000px;
}

/* .airtable > div > div {
  border-radius: 0px;
} */

iframe {
  box-shadow: 8px 8px #e6c545;
  border-radius: 0px !important;
}

.v-sheet.v-card {
  border-radius: 0px;
  box-shadow: 6px 6px #e6c545;
}

h1 {
  padding-top: 20px;
  margin-bottom: 0.5rem;
  font-size: 3rem;
  color: white;
  text-shadow: 3px 3px 2px #000;
}

.hyperlink-button {
  background-color: #b03412 !important;
  color: white !important;
}

.theme--light.v-card > .v-card__text,
.theme--light.v-card .v-card__subtitle {
  color: rgba(0, 0, 0, 1);
}
</style>
