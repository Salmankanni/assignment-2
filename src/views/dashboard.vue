<template>
  <div class="about">
    <h1>Dashboard</h1>
    <div class="">


    <form>
      <h1>Welcome!..      {{name}}</h1>
      <p>your Email id is {{email}}</p>
    </form>
</div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default{
  data(){
    return{
      email: this.$store.state.email,
      name: this.$store.state.name
    }
  }
}


</script>
