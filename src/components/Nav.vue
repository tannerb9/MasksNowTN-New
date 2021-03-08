<template>
    <div id="app">
        <v-app-bar app dense color="#153570" >
              <v-btn color="#DEC328" @click="drawer = !drawer" class="hidden-md-and-up">
                <v-icon>mdi-format-align-justify</v-icon>
              </v-btn>
            <template v-slot:extension>
                <v-tabs class="hidden-sm-and-down">
                    <v-tab><a href="https://masksnow.org/">National Website</a></v-tab>
                    <v-tab><a href="https://charity.gofundme.com/o/en/campaign/masksnow-tennessee">Donate Funds</a></v-tab>
                    <v-tab><a href="mailto: distribution.make@gmail.com">Donate Materials</a></v-tab>
                    <v-tab><a href="https://masksnow.org/volunteer/">Volunteer</a></v-tab>
                    <v-tab><a href="https://airtable.com/embed/shrG3kgFmeLYyoxxn" target="airtable">Get Masks</a></v-tab>
                </v-tabs>
            </template>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="hidden-md-and-up" >
            <v-list nav dense>
                <v-list-item-group v-model="group">
                    <v-list-item>
                        <v-list-item-title><a href="https://masksnow.org/">National Website</a></v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title><a href="https://charity.gofundme.com/o/en/campaign/masksnow-tennessee">Donate Funds</a></v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title><a href="mailto: distribution.make@gmail.com">Donate Materials</a></v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title><a href="https://masksnow.org/volunteer/">Volunteer</a></v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title><a href="https://airtable.com/embed/shrG3kgFmeLYyoxxn" target="airtable">Get Masks</a></v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  name: "Nav",

  data() {
    return {
        drawer: false
    }
}

};



</script>

<style>
.v-tabs {
    display: flex;
    justify-content: space-evenly;
    padding: 0 0 12vh 0;
}

.v-tab {
    background: #DEC328;
    border-radius: 50px;
    transition: inherit;
    letter-spacing: 0.3em;
    font-family: lulo-clean-w01-one-bold,sans-serif;
    font-weight: bold;
    font-size: 19px;
    margin: 0.25rem;
}

.v-tab:hover:before, nav li:hover:after {
    transform: scale(1);
}

a {
    text-decoration: none;
    overflow: hidden;
    white-space: nowrap;
    min-width: 1.8em;
    max-width: 100%;
}

.v-app-bar a:hover {
    transform: scale(1.07);
}

</style>