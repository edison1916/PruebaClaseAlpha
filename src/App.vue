<script >
import { onMounted } from "vue";
import { auth } from "./utils/firebase";

export default {
  name: "App",
  setup() {
    onMounted(() => {
     auth.onAuthStateChange((user) => {
      console.log(user)
     })
    })
  }
}
</script>

<template>
  <h1>Header</h1>
  <RouterView />
</template>


