<template>
  <div>
    <div class="main-container-2">
      <h1 class="h1-component-pedido">Gerenciar pedidos:</h1>
      <Dashboard />
    </div>
  </div>
</template>

<script>

import Dashboard from '../components/Dashboard.vue';

export default{
  name: 'Pedidos',
  components: {
    Dashboard
  }
}

</script>
<style>

.h1-component-pedido{
  margin-left: 12%;
  margin-top: 7%;
}

.main-container-2{
  height: 500px;
}

</style>