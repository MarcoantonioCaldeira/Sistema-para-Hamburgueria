<template>
    <div id="footer">
      <p>Make Your Burger &copy; 2021</p>
      <div id="Footer-info">
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

    p{
      position:absolute;
      margin-left: 43%;
      margin-top: 10%;
      display: inline;
    }

    a{
      position: absolute;
      margin-top: 10%;
      margin: 0 10px;
    }

    #Footer-info{
      height: 40px;
      margin-left: -53%;
    }

    #footer {
      height: 200px;
      background-color: rgb(224, 183, 92);
      color: #ffffff;
      bottom: 0;
      width: 100%;
    }
  </style>