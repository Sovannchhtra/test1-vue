<script setup>
import Button from 'primevue/button';
import 'primeicons/primeicons.css'
import { ref } from 'vue';
     const name = ref('click');
     const handleClick=()=>{
          name.value = 'Hello kaka';
     }
</script>
<template>
     <div>
          <!-- <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i> -->
          <Button icon="pi pi-spin pi-spinner" 
                  :label="name"  
                  @click="handleClick" 
                  rounded
               />
          
               <div class="flex align-items-center justify-content-start mt-5">
                    <div class="hidden w-4rem h-4rem bg-primary font-bold p-4 border-round mr-3">1</div>
                    <div class="w-4rem h-4rem bg-primary font-bold flex align-items-center justify-content-center p-4 border-round mr-3">2</div>
                    <div class="w-4rem h-4rem bg-primary font-bold flex align-items-center justify-content-center p-4 border-round">3</div>
               </div>
     </div>
     
</template>
<style scoped>
     :deep(.p-button){
          background-color: red;
     }
</style>


