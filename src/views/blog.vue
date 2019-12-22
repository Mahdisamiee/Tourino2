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
                        v-model="search"
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

        <!-- Place of Blogs -->
        <v-layout row wrap class="mt-2">
            <v-flex xs12 sm3 md4 v-for="(blog, i) in blogs.post" :key="i">
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
                        {{blog.title}}
                    </v-card-title>

                    <v-card-subtitle>
                        {{blog.subtitle}}
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn text>Share</v-btn>

                        <v-btn
                            color="purple"
                            text
                            @click="goToDetails(blog.id)"
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
            blogs:[
                {id: "1", img_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", title: "Hello World", subtitle: "راهنمای جامع سفر به افغانستان"},
                {id: "2", img_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", title: "here you are", subtitle: "چگونه بتوانیم در جنگل زندگی کنیم"},
                {id: "3", img_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", title: "there is no where", subtitle: "مزایای زندگی تنهایی در کویر و آسایش"},
                {id: "4", img_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", title: "Vazvan", subtitle: "over than 1 million times"},
                {id: "5", img_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", title: "Hello World", subtitle: "جاذبه های گردشگری شهر تاریخی وزوان و راهنمای جامع آن"}
            ]
        }
    },
    computed:{
        searchedblogs(){
            return this.blogs.filter( item => item.title.toLowerCase().match(this.search))
        }
    },
    methods:{
        goToDetails(id){
            this.$router.push(`blog/${id}`);
        },

        fetchBlogs(){
            this.$store.dispatch('getBlogsDetails')
                .then(result => {
                    this.blogs = result;
                    // console.log(this.blogs,"successed");
                })
                .catch(() => {
                    // console.log(err, 'some error has been happend in "FetchData" method');
                })
        },
    },
    created(){
        this.fetchBlogs();
    }
}
</script>

<style scoped>
/* .radius_app_bar{
    borderr
} */
</style>