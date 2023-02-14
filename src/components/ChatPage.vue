<template>
    <v-container>
        <div id="example-1">
            <button v-on:click="counter += 1">+1</button>
            <p>button was pushed {{ counter }} times</p>
        </div>
    </v-container>
</template>

<script>
export default {
    data: () => {
        return {
            counter: 0,
            username: '',
            message: '',
            messages: [],
            intervalCtx: null,
            lastMsgID: 0,
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
