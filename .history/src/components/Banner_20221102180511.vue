<template>
   <div id="main-banner">
    <h1>"Um Hamburguer feito <br> do seu jeito</h1>
   </div>
</template>
<script>

export default{
    name: 'Banner'
}

</script>
<style>

#main-banner{
    background-image: url('/public/img/burger.jpg');
    background-position: 0 -250px;
    background-size: cover;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

#main-banner h1{
    color: #fff;
    text-align: center;
    font-size: 60px;
    padding: 20px 40px;
}
</style>