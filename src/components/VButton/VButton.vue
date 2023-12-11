<template>
    <button @click="click" class="bg-slate-100 p-2 rounded-md shadow-sm hover:bg-slate-200 capitalize" >
        <slot></slot> 
    </button>
</template>
<script lang="ts" setup>
    const click=()=>{
        console.log("I am clicked")
    }
</script>