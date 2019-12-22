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
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                    ></v-img>

                    <v-card-title>
                        {{product.ptype}}
                    </v-card-title>

                    <v-card-subtitle>
                        {{product.price}}
                        <br/>
                        {{product.count}}
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
                    </v-card-actions>
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
                {name: "nothing", id: "1", img_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", ptype: "agri", price: "100",count:"12"},
                {name: "nothing", id: "2", img_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", ptype: "agri", price: "100",count:"12"},
                {name: "nothing", id: "3", img_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", ptype: "agri", price: "100",count:"12"},
                {name: "nothing", id: "4", img_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", ptype: "agri", price: "100",count:"12"},
                {name: "nothing", id: "5", img_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", ptype: "agri", price: "100",count:"12"},
            ]
        }
    },
    methods:{
        goToDetails(id){
            this.$router.push(`product/${id}`);
        },
        fetchProducts(){
            this.$store.dispatch('getProductsDetails')
                .then(result => {
                    this.products = result.products;
                    // console.log(this.products);
                })
                .catch(() => {
                })
        }
    },
    created(){
        this.fetchProducts();
    }
}
</script>

<style scoped>
/* .radius_app_bar{
    borderr
} */
</style>