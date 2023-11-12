<script setup>
     import Button from 'primevue/button';
     import InputText from 'primevue/inputtext';
     import Toast from 'primevue/toast';
     import 'primeicons/primeicons.css'
     import { ref } from 'vue';
     import { useToast } from 'primevue/usetoast';

     const name = ref('click');
     const toast = useToast();
     const errorMessage = ref('');

     const handle =(event)=>{
          event.preventDefault();
          if(!value.value){
               errorMessage.value = 'Name - Surname is required.';
          }
          else {
               toast.add({ severity: 'success', summary: 'Form Submitted', detail: value.value, life: 3000 });
          }
     }

</script>
<template>
     <div>
          <div class="card flex justify-content-center">
               <form @submit="handle" class="flex flex-column gap-2">
                    <span class="p-float-label">
                         <InputText id="value" v-model="value" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
                         <label for="value">Name - Surname</label>
                    </span>
                    <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
                    <Button type="submit" label="Submit" />
               </form>
               <Toast />
          </div>
     </div>
</template>
<style scoped>
     :deep(.p-button){
          background-color: red;
     }
</style>


