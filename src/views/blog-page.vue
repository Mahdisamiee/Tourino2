<template>
    <div>
        <div class="pimg1">
            <div class="ptext">
                <span class="border">
                    <span>{{blog_detail.title}}</span> <!--maybe we put logo here =| -->
                </span>
            </div>
        </div>
        <v-container grid-list-md>
            <v-layout row wrap>
                <!-- content -->
                <v-flex xs12>
                    <div class="title-box">
                        <h1>{{blog_detail.title}}</h1>
                    </div>
                    <div class="content-box">
                        <p>
                            {{blog_detail.part1}}
                        </p>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis ipsa qui deserunt error rerum aut, commodi ut, 
                            officia quam accusamus sequi necessitatibus eaque maiores debitis placeat nemo perspiciatis voluptatem.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis ipsa qui deserunt error rerum aut, commodi ut, 
                            officia quam accusamus sequi necessitatibus eaque maiores debitis placeat nemo perspiciatis voluptatem.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis ipsa qui deserunt error rerum aut, commodi ut, 
                            officia quam accusamus sequi necessitatibus eaque maiores debitis placeat nemo perspiciatis voluptatem.
                        </p>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis ipsa qui deserunt error rerum aut, commodi ut, 
                            officia quam accusamus sequi necessitatibus eaque maiores debitis placeat nemo perspiciatis voluptatem.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis ipsa qui deserunt error rerum aut, commodi ut, 
                            officia quam accusamus sequi necessitatibus eaque maiores debitis placeat nemo perspiciatis voluptatem.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis ipsa qui deserunt error rerum aut, commodi ut, 
                            officia quam accusamus sequi necessitatibus eaque maiores debitis placeat nemo perspiciatis voluptatem.
                        </p>
                    </div>
                </v-flex>
                <!-- footer -->
                <v-flex xs12>
                    <div class="writer-box">
                        <p class="subheader">writing by : {{blog_detail.writer}}</p>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            blog_detail:{
                title: 'a way to survive',
                part1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis ipsa qui deserunt error rerum aut, commodi ut, officia quam accusamus sequi necessitatibus eaque maiores debitis placeat nemo perspiciatis voluptatem.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis ipsa qui deserunt error rerum aut, commodi ut, officia quam accusamus sequi necessitatibus eaque maiores debitis placeat nemo perspiciatis voluptatem.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis ipsa qui deserunt error rerum aut, commodi ut, officia quam accusamus sequi necessitatibus eaque maiores debitis placeat nemo perspiciatis voluptatem.',
                part2: '',
                part3: '',
                writer: 'Amir Jahan Bin && Mohammad Moradi'
            }
        }
    },
    methods: {
        fetchBlogDetails(){
            const id = this.$route.params.id
            this.$store.dispatch('getBlogDetails', id)
                .then(result => {
                    this.blog_detail = result;
                    // console.log("blog get successed");
                })
                .catch(() => {
                    // console.log("blog not ----")
                })
        }
    },
    created(){
        this.fetchBlogDetails();
    }
}
</script>

<style scoped>
.pimg1, .pimg2, .pimg3, .pimg4{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
}

.pimg1{
    background-image: url("../assets/Large-Triangles.svg");
    min-height: 670px;
}

.ptext{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    letter-spacing: 12px;
    color: #fff;
}
.title-box{
    display: grid;
    justify-content: center;
    margin: 20px 0px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.content-box{
    margin: 20px 0px;
    line-height: 35px;
}
.writer-box{
    display: grid;
    justify-items: center;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 4px;
    margin: 50px 0px;
}
</style>