<template>
  <Banner />
  <div class="main-container">
    <BurgerForm />
  </div>
</template>

<script>
import Banner from "../components/Banner/Banner.vue"
import BurgerForm from "../components/BurgerForm/BurgerForm.vue"

export default{
  name: "Home",
  components: {
    Banner,
    BurgerForm
  }
}
</script>
