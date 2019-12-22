<template>
    <v-app-bar app class="white--text teal darken-2" elevate-on-scroll hide-on-scroll>
        <v-toolbar-title class="display-1 mx-5">Tourino</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <div width="50px" height="50px">
            <img id="img" src="../assets/a.png" alt="">
        </div> -->
        <v-spacer></v-spacer>

        <v-layout
            align-center
            style="max-width: 350px"
        >
            <v-text-field
                placeholder="Search..."
                single-line
                rounded
                color="grey darken-2"
                background-color="white"
                hide-details
            ></v-text-field>
            <v-btn id="search-btn" large text icon class="ml-4">
                <v-icon  class="white--text" medium>mdi-magnify</v-icon>
            </v-btn>
        </v-layout>

        <v-spacer></v-spacer>
        <!-- Singin and Signup -->
        <registering/>

    </v-app-bar>
</template>

<script>
import registering from './registering.vue';

export default {
    components:{
        registering
    },
    
}
</script>

<style scoped>
#img{
    width: 250px;
    height: 60px;
}
#search-btn:active{
    color: yellow;
}
</style>