<template>
    <main>
        <div class="pimg1 py-5">
            <div class="ptext2">
                <span class="border">
                    <span>Tourino</span> <!--maybe we put logo here =| -->
                </span>
            </div>
            <div class="px-3 mx-5 mt-5">
                <v-carousel height="500" hide-delimiters>
                    <v-carousel-item
                        v-for="(slide,i) in tours"
                        :key="i"
                        
                    >
                        <v-sheet
                            height="100%"
                            tile
                            color="transparent"
                        >
                            <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                            >
                                <v-card v-for="i in 4" :key="i" class="mx-3 white" height="300px" width="300px" hover>
                                    <v-card-title class="justify-center grey--text" primary-title>
                                        "here we put some product"
                                    </v-card-title>
                                </v-card>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </div>
        </div>
        <!-- Specials Offers -->
        <v-container grid-list-md class="my-3">
            <v-layout row wrap>
                <v-flex xs12 class="justify-center">
                    <h1>پیشنهادات امروز</h1>
                </v-flex>
                <v-flex xs12 sm2 md4 v-for="(offer, index) in special_offers" :key="index">
                    <v-card
                        :loading="loading"
                        class="mx-auto my-12"
                        max-width="374"
                    >
                        <v-img
                        height="250"
                        src= "https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>

                        <v-card-title>{{offer.name}}</v-card-title>

                        <v-card-text>
                            <v-row
                                align="center"
                                class="mx-0"
                            >
                                <v-rating
                                :value="offer.rate"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                ></v-rating>

                                <div class="grey--text ml-4">{{offer.rate}} (413)</div>
                            </v-row>

                            <!-- <div class="my-4 subtitle-1 black--text">
                                شرکت ایران تور
                            </div> -->
                            <p class="my-4 title"> قیمت:</p>
                            <div>
                                {{offer.price}} تومان
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-title>وضعیت :</v-card-title>

                        <!-- <v-card-text>
                            <v-chip-group
                                v-model="selection"
                                active-class="deep-purple accent-4 white--text"
                                column
                            >
                                <v-chip>1 نفر</v-chip>

                                <v-chip>2 نفر</v-chip>

                                <v-chip>3 نفر</v-chip>

                                <v-chip>4 نفر</v-chip>
                            </v-chip-group>
                        </v-card-text> -->
                        <v-chip outlined class="mx-4 grey--text font-weight-bold" :class="{exist: offer.online }" >موجود</v-chip>

                        <v-card-actions>
                            <v-btn
                                color="deep-purple accent-4"
                                text
                                @click="reserve(offer.id)"
                            >
                                Reserve
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

        <!--  -->
        <div class="pimg2">
            <div class="ptext">
                <span class="border">
                    <span>We Want The Best For You</span>
                </span>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data(){
        return{
            tours: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
            special_offers: [
                {image_url: 'https://cdn.vuetifyjs.com/images/cards/cooking.png', name: 'تور ویژه گرجستان', rate: 3.5, price: '12', id: 1, online: true},
                {image_url: 'https://cdn.vuetifyjs.com/images/cards/cooking.png', name: 'تور ویژه تاجیکستان', rate: 4.5, price: '12', id: 2, online: true},
                {image_url: 'https://cdn.vuetifyjs.com/images/cards/cooking.png', name: 'تور ویژه ارمنستان', rate: 5, price: '12', id: 3, online: true}
            ],
            selection: 0,
            loading: false,
        }
    },
    methods : {
        reserve(id){
            this.$router.push(`tour/${id}`);
        },
        
        fetchTours(){
            this.$store.dispatch('getToursDetails')
                .then((result) => {
                    this.special_offers = result;
                    alert(result);
                })
                .catch((err) => {
                    alert(err)
                })
        }
    },
    created(){
        this.fetchTours();
    }
}
</script>

<style scoped>
main{
    height: 100%;
    margin: 0;
}
.pimg1,.pimg2{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
}
.pimg1{
    background-image: url("../assets/sunrise.jpg");
    min-height: 670px;
    display: grid;
    grid-template-rows: 1fr 2fr;
}
.pimg2{
    background-image: url("../assets/plane.jpg");
    min-height: 670px;
}

.ptext{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    font-weight: 500;
    letter-spacing: 5px;
    color: rgb(255, 255, 255)
}
.ptext2{
    display: grid;
    justify-content: center;
    align-content: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 60px;
    letter-spacing: 12px;
    color: #fff;
}


/* ---------------------------------- */
.exist {
    color: green;
}
.not-exist {
    color: red;
}
</style>