<template>
  <div id="burger-table" v-if="burgers">

    <div>
      <div id="burger-table-heading">   
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações:</div>
      </div>
    </div>

    <div id="burger-table-rows">
      <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
        <div>{{ burger.nome }}</div>
        <div>{{ burger.pao }}</div>
        <div>{{ burger.carne }}</div>
        
        <div>
          <ul>
            <li v-for="(opcional, index) in burger.opcionais" :key="index">{{ opcional }}</li>
          </ul>
        </div>

        <div>
          
          <select name="status" class="status" v-model="burger.status" @change="updateBurger(burger)">
            <option :value="s.tipo" v-for="s in status" :key="s.id">{{ s.tipo }}</option>
          </select>

          <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Não há pedidos no momento!</h2>
  </div>

</template>



<script>
import { ref, onValue, set, remove } from "firebase/database";

  export default {
    name: "Dashboard",
    data() {
      return {
        burgers: [], // Certifique-se de inicializar conforme necessário
        status: [],
      }
    },

    mounted () {
      this.getPedidos()
      this.getStatus()
    },

    methods: {
    async getPedidos() {
      const burgersRef = ref(this.$db, 'burgers');

      onValue(burgersRef, (snapshot) => {
        const burgersData = snapshot.val();
        this.burgers = Object.keys(burgersData || {}).map(key => ({
          id: key,
          ...burgersData[key],
        }));

        if (this.burgers.length > 0 && this.burgers[0].status) {
          this.status = this.burgers[0].status.tipo;
        }
      });
    },

    async getStatus() {
      const statusRef = ref(this.$db, 'status');

      onValue(statusRef, (snapshot) => {
        this.status = snapshot.val();
      });
    },

    async deleteBurger(id) {
      const burgersRef = ref(this.$db, 'burgers', id);

      try {
        await remove(burgersRef);
        console.log(`Burger com ID ${id} removido com sucesso.`);
        this.getPedidos();
      } catch (error) {
        console.error("Erro ao remover o burger:", error);
      }
    },

    async updateBurger(burger) {
      const optionId = burger.status.id;

      const burgersRef = ref(this.$db, `burgers/${burger.id}/status/id`);

      try {
        await set(burgersRef, optionId);

        console.log(`Status do Burger com ID ${burger.id} atualizado para ${optionId}.`);
      } catch (error) {
        console.error("Erro ao atualizar o status do burger:", error);
      }
    }


  },
};
</script>

<style src="./style.scss"  lang="scss">
 
  
</style>
