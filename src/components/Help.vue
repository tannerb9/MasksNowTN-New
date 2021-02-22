<template>
  <h1>Help Bar</h1>
</template>

<script>
import airtableData from '../data/airtableData.js'
export default {
    created() {
    airtableData.getVolunteerTracking();
  },
  name: "Help",
};
</script>
