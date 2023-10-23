<template>
    <button class="border-[1px] border-white rounded-md border-solid bg-transparent p-2.5 max-w-[170px]">{{content}}</button>
</template>

<script>
export default {
    props:{
        content: String
    }
}
</script>