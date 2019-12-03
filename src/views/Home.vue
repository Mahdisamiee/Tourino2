<template>
    <main>
        <div class="pimg1">
            <div class="ptext">
                <span class="border">
                    <span>Tourino</span> <!--maybe we put logo here =| -->
                </span>
            </div>
        </div>

        <div class="section my-3">
            <v-container>
                <v-layout row wrap class="pa-3">
                    <v-flex xs12 sm4 v-for="i in 3" :key="i">
                        <v-card class="mx-3 blue lighten-2 white--text" height="300px" hover>
                            <v-card-title class="justify-center blue lighten-1" primary-title>
                                title
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    
                </v-layout>
            </v-container>
        </div>

        <!-- <div class="pimg2">
            <div class="ptext">
                <span class="border">
                    Products & Goods
                </span>
            </div>
        </div> -->

        <div class="pimg2 py-4">
            <div class="ptext2">
                <span class="border">
                    Products & Goods
                </span>
            </div>
            <div class="px-3 mx-5">
                <v-carousel height="500" hide-delimiters>
                    <v-carousel-item
                        v-for="(slide,i) in products"
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

        <div class="section">
            <v-container grid-list-lg>
                <v-layout row wrap class="pa-3">
                    <v-flex v-for="i in 3" :key="i" xs12 sm4>
                        <v-card shaped class="mx-3" height="300px" hover>
                            <v-card-title class="justify-center" primary-title>
                                <v-avatar
                                    size="70"
                                    color="blue"
                                >
                                    <img src="src" alt="">
                                </v-avatar>
                            </v-card-title>
                            <v-card-text>
                                here we put some text to show comment about our product service
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>

        <div class="pimg3">
            <div class="ptext2">
                <span class="border">
                    Tours
                </span>
            </div>
            <v-container grid-list-xs>
                <v-carousel height="600" :show-arrows="false">
                    <v-carousel-item
                        v-for="(slide,i) in products"
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
                                <v-card class="mx-3 white"  height="500px" width="1200px" hover>
                                    <v-card-title class="justify-center grey--text" primary-title>
                                        {{i}} Tours
                                    </v-card-title>
                                </v-card>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-container>
        </div>

        <div class="section">
            <v-container grid-list-lg>
                <v-layout row wrap class="pa-3">
                    <v-flex v-for="i in 3" :key="i" xs12 sm4>
                        <v-card shaped class="mx-3" height="300px" hover>
                            <v-card-title class="justify-center" primary-title>
                                <v-avatar
                                    size="70"
                                    color="blue"
                                >
                                    <img src="src" alt="">
                                </v-avatar>
                            </v-card-title>
                            <v-card-text>
                                here we put some text to show comment about our Tour services
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>

        <div class="pimg4">
            <div class="ptext2">
                <span class="border">
                    <span>Use Our Blog Services</span> 
                </span>
            </div>
            <v-container grid-list-lg>
                <v-layout row wrap>
                    <v-flex v-for="i in 3" :key="i" xs12 sm4>
                        <v-card shaped class="mx-3" height="300px" hover>
                            <v-card-title class="justify-center" primary-title>
                                <v-avatar
                                    size="70"
                                    color="grey lighten-2"
                                >
                                    <img src="src" alt="">
                                </v-avatar>
                            </v-card-title>
                            <v-card-text>
                                "here we add some text to introduce our blog part"
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <Myfooter/>
    </main>
</template>

<script>
import Myfooter from '../components/footer.vue';
export default {
    components:{
        Myfooter
    },
    data(){
        return {
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
            products: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
            colors:[
                'green',
                'purple lighten-1',
                'yellow darken-3',
                'red lighten-1',
                'orange',
            ]
        }
    }
}
</script>

<style scoped>
main{
    height: 100%;
    margin: 0;
}

.pimg1, .pimg2, .pimg3, .pimg4{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
}

.pimg1{
    background-image: url("../assets/sunrise.jpg");
    min-height: 670px;
}
.pimg2{
    background-image: url("../assets/Large-Triangles.svg");
    /* background-image: url("../assets/pin.jpg"); */
    min-height: 770px;
    display: grid;
    grid-template-rows: 1fr 2fr;
}
.pimg3{
    background-image: url("../assets/Rose-Petals.svg");
    min-height: 770px;
    display: grid;
    grid-template-rows: 1fr 3fr;
}
.pimg4{
    background-image: url("../assets/pimg2.jpg");
    min-height: 770px;
    display: grid;
    grid-template-rows: 1fr 1fr;
}
.ptext{
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 60px;
    letter-spacing: 12px;
    color: #fff;
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
.ptext_caro{
    display: block;
    margin-bottom: 20px;
}
.section{
    background-color: rgb(255, 255, 255);
}
#carousel{
    display: grid;
    justify-items: center;
    margin-top: 20px;

}
</style>