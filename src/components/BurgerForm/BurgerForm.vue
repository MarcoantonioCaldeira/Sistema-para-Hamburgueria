<template>

    <Message :msg="msg" v-show="msg" />

    <div id="ContentBurgerForm">

      <h1>Vamos começar!!!</h1>

      <form id="burger-form" method="POST" @submit.prevent="createBurger">
        <div class="input-container">
          <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome" required>
        </div>

        <div class="input-container">
          <label for="pao">Escolha o pão:</label>
          <select name="pao" id="pao" v-model="pao">
            <option value="">Selecione o seu pão</option>
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
          </select>
        </div>

        <div class="input-container">
          <label for="carne">Escolha a carne do seu Burger:</label>
          <select name="carne" id="carne" v-model="carne">
            <option value="">Selecione o tipo de carne</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
          </select>
        </div>

        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
          <div class="checkbox-container" v-for="opcional in opcionalData" :key="opcional.id">
            <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
            <span>{{ opcional.tipo }}</span>
          </div>
        </div>

        <div class="input-container">
          <input class="submit-btn" type="submit" value="Criar meu Burger">
        </div>
      </form>


    </div>
  </template>
  
  <script>
  import { ref, onValue } from "firebase/database";
  import Message from '../Message/Message';
  
  export default {
    name: "BurgerForm",
    data() {
      return {
        nome: null,
        pao: null,
        carne: null,
        opcionalData: null,
        opcionais: [],
        paes: [],
        carnes: [], 
        status: "Solicitado",
        msg: null
      }
    },

    mounted () {
      this.getIngredientes()
    },
    
    components: {
      Message
    },

    methods: {
      // async getIngredientes() {
      //   const req = await fetch('http://localhost:3000/ingredientes');
      //   const data = await req.json();

      //   this.paes = data.paes;
      //   this.carnes = data.carnes;
      //   this.opcionaisdata = data.opcionais;
      // },

      getIngredientes() {
        const paesRef = ref(this.$db, 'ingredientes/paes');
        const carnesRef = ref(this.$db, 'ingredientes/carnes');
        const opcionaisRef = ref(this.$db, 'ingredientes/opcionais');

        // Observa alterações nos dados do Firebase
        onValue(paesRef, (snapshot) => {
          this.paes = snapshot.val();
        });

        onValue(carnesRef, (snapshot) => {
          this.carnes = snapshot.val();
        });

        onValue(opcionaisRef, (snapshot) => {
          this.opcionalData = snapshot.val();
        });
      },

      
      async createBurger(e) {

        e.preventDefault();

        const data = {
          nome: this.nome,
          carne: this.carne,
          pao: this.pao,
          opcionais: Array.from(this.opcionais),
          status: "Solicitado"
        }

        const dataJson = JSON.stringify(data);

        const req = await fetch('http://localhost:3000/burgers', {
          method: "POST",
          headers: { "Content-Type" : "application/json" },
          body: dataJson
        });
        const res = await req.json()
        console.log(res)
        this.msg = "Pedido realizado com sucesso!"
        // clear message
        setTimeout(() => this.msg = "", 3000)
        // limpar campos
        this.nome = ""
        this.carne = ""
        this.pao = ""
        this.opcionais = []
        
      }
    },

  }
  </script>
  
<style  src="./style.scss" lang="scss">
  
</style>