<template> 
    <div id="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/pedidos">Pedidos</router-link>
    </div>
</template>
    
    <script> 
    export default {
     name: 'Navbar',
     props: ["logo", "alt"]
    }
    </script>
    
    <style>
    #nav{
        background-color: rgb(224, 183, 92);
        height:500px;
        padding: 15px 40px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    
      #nav #logo-url{
        margin: auto;
        margin-left: 0;
      }
    
      #logo{
        width: 100px;
        height: 100px;
      }
    
      #nav a{
        color: #604020;
        font-siza: 160px;
        text-decoration:none;
        margin:12px;
        transition: .5s;
      }
    
      #nav a:hover{
        color:#fff;
      }
    </style>