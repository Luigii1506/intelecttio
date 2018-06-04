<template>

<v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
        <div class="text-xs-center">
            <vuetify-logo/>
            <h1>Intelecttio</h1>
        </div>

    </v-flex>
</v-layout>

</template>

<script>

import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
    components: {
        Logo,
        VuetifyLogo
    }
}

</script>

<style scoped>

h1 {
    color: white;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 50px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 1;
    text-align: center;
    background-color: #286b88;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 12px;
}

</style>
