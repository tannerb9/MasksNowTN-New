<template>
    <div>
        <v-app-bar dense color="#153570" >
            <template v-slot:extension>
                <v-tabs>
                    <v-tab><a href="https://masksnow.org/">National Website</a></v-tab>
                    <v-tab><a href="https://charity.gofundme.com/o/en/campaign/masksnow-tennessee">Donate Funds</a></v-tab>
                    <v-tab><a href = "mailto: distribution.make@gmail.com">Donate Materials</a></v-tab>
                    <v-tab><a href="https://masksnow.org/volunteer/">Volunteer</a></v-tab>
                    <v-tab><a href="https://airtable.com/embed/shrG3kgFmeLYyoxxn" target="airtable">Get Masks</a></v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
    </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style>
.v-app-bar {
    width: 100%;
}
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

.v-tab:hover:before, nav li:hover:after
{
    transform: scale(1);
}
.v-app-bar a {
    text-decoration: none;
    overflow: hidden;
    white-space: nowrap;
    min-width: 1.8em;
    max-width: 100%;
}
.v-app-bar a:hover {
    transform: scale(1.07);
}
/* .airtable-embed {
    width:"100%";
    height:"533"; 
    background: transparent; 
    border: 1px solid #ccc;
} */
</style>