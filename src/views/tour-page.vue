<template>
    <main class="mt-5">
        <div class="topheader grey lighten-4 py-4">
            <div class="back-btn-box">
                <v-btn color="black--text " @click="back" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </div>
            <v-container grid-list-lg>
                <v-layout row wrap class="pa-3">

                    <v-flex xs12 sm6>
                        <v-layout column>
                            <div class="header mb-5">
                                <img :src="tour_details.img" width="500px" height="300px" alt="">
                                <h2 class="title">
                                    {{tour_details.title}}
                                </h2>
                            </div>
                            <div class="condition my-3">
                                وضعیت:
                                <v-chip outlined class="mx-4 white--text font-weight-bold" :color="tour_details.condition.color" >{{tour_details.condition.situation}}</v-chip>
                                <!-- <p >ایجاد شده توسط:<span class="mx-4 primary--text">{{tour_details.creator}}</span></p> -->
                            </div>
                            <div class="offers_count">
                                <span class="display-1 grey--text text--darken-4">5</span>
                                <p>ظرفیت باقی مانده</p>
                            </div>
                        </v-layout>
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-layout column class="pa-5">
                            <div class="btn_box">
                                <v-btn text class="btn1 orange darken-1 mr-2 ml-1" @click="add_Shop_Cart">رزرو</v-btn>
                                <v-btn text class="btn2 orange darken-1">
                                    <v-icon>mdi-dots-horizontal</v-icon>
                                </v-btn>
                            </div>
                            <div class="more pa-2">
                                <input v-model="page_url" type="text" id="copy_clipboard" readonly>
                                <v-tooltip left>
                                    <template v-slot:activator="{ on }">
                                        <v-btn icon small text class="green" @click="copyClipboard" v-on="on">
                                            <v-icon small class="white--text ">mdi-content-copy</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>copy to clipboard</span>
                                </v-tooltip>
                            </div>
                        </v-layout>
                    </v-flex>

                </v-layout>
            </v-container>
        </div>

        <div class="description">
            <v-container grid-list-lg>
                <v-layout row wrap>
                    <v-flex xs12 sm8 py-3 pl-5>
                        <h3 class="title mb-4">توضیحات تور:</h3>
                        <p>{{tour_details.description}}</p>
                    </v-flex>
                    <v-flex xs12 sm4>
                        <div class="budget my-3">
                            <v-chip class="grey darken-3 white--text" ><span class="ml-2">قیمت:</span>{{tour_details.min_cost}} - {{tour_details.max_cost}} تومان</v-chip>
                        </div>
                        <div class="skills_box mt-5">
                            <p>تور های مشابه :</p>
                            <v-chip class="mx-1 light-blue darken-1 grey--text" v-for="(i,index) in tour_details.related_tours" :key="index" outlined>{{i}}</v-chip>
                        </div>
                    </v-flex>


                    <!-- freelnacers list -->
                    <v-flex x12 my-5>
                        <v-layout row wrap>

                            <v-flex xs12>
                                <p class="title">افرادی که در این تور شرکت کرده اند</p>
                            </v-flex>
                            
                            <v-flex xs12 sm4 md3 v-for="offer in tour_details.other_buyers" :key="offer.id">
                                <div class="person_card">
                                    <div class="person_offer">
                                        <div class="offer_pic">
                                            <v-avatar
                                                size="60"
                                                class="info"
                                            >
                                                <v-icon v-if="!offer.img" class="white--text">mdi-account</v-icon>
                                                <img v-if="!!offer.img" :src="offer.img" alt="" srcset="">
                                            </v-avatar>
                                        </div>
                                        <div class="offer_details">
                                            <p class="title">{{offer.name}}</p>
                                            <span>{{offer.execution_time}} روز پیش</span>
                                        </div>
                                    </div>
                                    <div class="person_rate">
                                        <v-rating readonly background-color="orange darken-3" color="orange" hover v-model="offer.rate"></v-rating>
                                    </div>
                                </div>
                            </v-flex>

                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
    </main>
</template>

<script>

export default {
    
    data(){
        return{
            // Snackbar Data
            result: {
                value : false,
                isSuccess : null,
                text: ''
            },
            // project url and clipboard
            page_url: `https://www.tourino.com${this.$route.path}`,
            // project details
            tour_details: {
                title: 'تور ویژه گرجستان',
                img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
                condition: {
                    color: 'green',
                    situation: 'موجود'
                },
                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
                min_cost: 5000,
                max_cost: 9000,
                related_tours: [
                    'گرجستان', 'ارمنستان', 'تاجیکستان', 'وزوان'
                ],
                other_buyers:[
                    {id: '1', img: '', name: 'Mahdi', execution_time: '30', rate: 5},
                    {id: '2', img: '', name: 'Hasan', execution_time: '40', rate: 4},
                    {id: '3', img: '', name: 'Reza', execution_time: '10', rate: 2},
                    {id: '4', img: '', name: 'PGR0101', execution_time: '45', rate: 1},
                    {id: '5', img: '', name: 'Thread', execution_time: '60', rate: 0},
                ]
            }
        }
    },
    methods:{
        back(){
            this.$router.push('/tours')
        },
        copyClipboard(){
            let copyvar = document.querySelector("#copy_clipboard");
            copyvar.select();
            document.execCommand('copy');
        },

        add_Shop_Cart(){
            this.$store.dispatch('addShopCart');
            this.$router.push(`/tours`);
        },

        fetchProjectDetails(){
            const id = this.$route.params.id
            this.$store.dispatch('getTourDetails', id)
                .then(result => {
                    this.tour_details = result.tour_details;//result contains from 4 object + value text isSuccess
                })
                .catch(err => {
                    // this.result.value = true;
                    // this.result.text = "مشکلی در سرور پیش آمده است.";
                    // this.result.isSuccess = "error";
                })
        }
    },
    created(){
        this.fetchProjectDetails();
    }
}
</script>

<style scoped>
.back-btn-box{
    display: grid;
    align-items: end;
    justify-items: left;
    padding: 5px 20px; 
}
.condition{
    display: flex;
    flex-direction: row;
    align-items: baseline;
}

.btn_box{
    width: 42%;
    display: flex;
    flex-direction: row;
    justify-content: baseline;
}
.btn_box .v-btn.btn1{
    border-radius: 0px 3px 3px 0px;
    color: #fff;
    flex: 3;
}
.btn_box .v-btn.btn2{
    border-radius: 3px 0px 0px 3px;
    color: #fff;
    flex: 1;
}

#copy_clipboard{
    border: 1px solid green;
    border-radius: 2px;
    margin-left: 7px;
    padding: 2px 0px;
}

/*  */
.person_card{
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
    border-radius: 4px;
    
    transition-property: all;
    transition-duration: 0.5s;
}
.person_card .person_offer{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 40px;
    transition-property: all;
    transition-duration: 0.5s;
}
.person_card .person_rate{
    text-align: center;
    opacity: 0;
    transform: translateY(-20px);
    transition-property: all;
    transition-duration: .2s;
}
.person_card:hover{
    background-color: rgb(222, 223, 223);
}
.person_card:hover .person_offer{
    transform: translateY(-10px);
}
.person_card:hover .person_rate{
    display: inline-block;
    opacity: 1;
    transform: translateY(0px);
}
</style>
