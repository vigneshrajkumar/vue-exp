<template>
  <div>
    <h1>Dogs for Adoption</h1>

    <PetTable :pets="dogs" :species="dog" />
  </div>
</template>

<script>

import { mapState } from 'vuex'
import PetTable from '@/components/Table.vue'

export default {
  components: {
    PetTable
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
