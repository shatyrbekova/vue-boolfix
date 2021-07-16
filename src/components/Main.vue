<template>
    <main>
        <div v-for="element in results" :key="element.it">
         {{element.original_title}}
        </div>
    </main>
</template>

<script>
export default {
    name:'Main',
    props:{
        results: Array,
    }
}
</script>

<style lang="scss" scoped>

</style>
