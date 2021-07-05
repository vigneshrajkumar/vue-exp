<template>
  <div>
    <h1>Cats for Adoption!!!</h1>

    <PetTable :pets="cats" :species="cat" />

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
      'cats'
    ])
  }
}
</script>
