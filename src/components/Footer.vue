<template>
    <div id="footer">
      <p>Make Your Burger &copy; 2021</p>
      <div>
        <a>Quem somos</a>
        <a>Nossos Termos</a>
        <a>Entre em contato conosco</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Footer"
  }
  </script>
  
  <style scoped>
    #footer {
      height: 200px;
      background-color: rgb(224, 183, 92);
      color: #ffffff;
      display: flex;
      bottom: 0;
      width: 100%;
    }
  </style>