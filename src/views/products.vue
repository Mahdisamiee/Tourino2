<template>
    <v-container class="pt-5" grid-list-md>
        <!-- App Bar -->
        <v-app-bar
            class="primary px-2"
            style="borderRadius: 15px 5px 15px 5px;"
            flat

        >
            <!-- Serach box -->
            <div id="seachbox">
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
                    <v-btn id="search-btn" large flat icon class="ml-4">
                        <v-icon  class="white--text" medium>mdi-magnify</v-icon>
                    </v-btn>
                </v-layout>
            </div>
            <v-spacer></v-spacer>
            <!-- menu button -->
            <v-btn class="white--text" icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <!-- Place of products -->
        <v-layout row wrap class="mt-2">
            <v-flex xs12 sm3 md4 v-for="(product, i) in products" :key="i">
                <v-card
                    class="mx-auto"
                    max-width="344"
                    route
                >
                    <v-img
                    :src="product.img"
                    height="200px"
                    ></v-img>

                    <v-card-title>
                        {{product.title}}
                    </v-card-title>

                    <v-card-subtitle>
                        {{product.subtitle}}
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn text>Share</v-btn>

                        <v-btn
                            color="purple"
                            text
                            @click="goToDetails(product.id)"
                        >
                            Explore
                        </v-btn>
                        <!-- <v-spacer></v-spacer>

                        <v-btn
                            icon
                            @click="show = !show"
                        >
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn> -->
                    </v-card-actions>

                    <!-- <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text>
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition> -->
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            search : "",
            show: false,
            products:[
                {name: "nothing", id: "1", img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", title: "Hello World", subtitle: "over than 1 million times"},
                {name: "here you are", id: "2", img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", title: "here you are", subtitle: "over than 1 million times"},
                {name: "never give uo", id: "3", img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", title: "there is no where", subtitle: "over than 1 million times"},
                {name: "hello", id: "4", img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", title: "Vazvan", subtitle: "over than 1 million times"},
                {name: "hi every one", id: "5", img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", title: "Hello World", subtitle: "over than 1 million times"}
            ]
        }
    },
    methods:{
        goToDetails(id){
            this.$router.push(`product/${id}`);
        }
    },
    created(){
        // we fetch data here using axios
    }
}
</script>

<style scoped>
/* .radius_app_bar{
    borderr
} */
</style>