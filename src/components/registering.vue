<template>
    <v-dialog max-width="550px" v-model="dialog" persistent >
        <template v-slot:activator="{ on }">
            <v-btn
                medium
                class="white teal--text lighten-1"
                dark
                v-on="on"
                
            >
                <span class="mx-2">ورود به حساب کاربری</span>
                <v-icon>mdi-login</v-icon>
            </v-btn>
        </template>
        <div grid-list-xs>
            <v-toolbar text class="white">
                <v-toolbar-items>
                    <v-btn depressed class="primary--text white" @click="signin = true ,signup = false">ورود</v-btn>
                    <v-btn depressed class="primary--text white" @click="signin = false , signup = true">ثبت نام</v-btn>
                </v-toolbar-items>
                <v-spacer></v-spacer>

                <v-btn small icon text @click.prevent="dialog = false">
                    <v-icon color="grey darken-1" small>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <!-- Login Form -->
            <v-card text v-show="signin">
                <v-layout column justify-center align-center>
                    <v-flex xs12>
                        <v-card-title primary-title>
                            <h3>ورود</h3>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-card-text>
                    <v-form class="pa-4">
                        <v-text-field
                            label=" ایمیل "
                            v-model="login_email"
                            
                            prepend-icon="mdi-email"
                        ></v-text-field>
                        <v-text-field
                            v-model="login_password"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            
                            :type="show ? 'text' : 'password'"
                            label="رمز عبور"
                            hint="At least 8 characters"
                            counter
                            @click:append="show = !show"
                            prepend-icon="mdi-lock-question"
                        ></v-text-field>
                        <v-spacer></v-spacer>
                        <v-btn depressed small class="orange darken-1 white--text mt-3 mb-0 ml-0" @click="login()" >تائید</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
            <!-- Sign up form -->
            <v-card text v-show="signup">
                <v-layout column justify-center align-center>
                    <v-flex xs12>
                        <v-card-title primary-title>
                            <h3>ثبت نام</h3>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-card-text>
                    <v-form class="pa-4">
                        <v-text-field  v-model="user_name" label="نام کاربری" prepend-icon="mdi-account"></v-text-field>
                        <v-text-field
                            v-model="signup_password"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            
                            :type="show ? 'text' : 'password'"
                            label="رمز عبور"
                            hint="At least 8 characters"
                            counter
                            @click:append="show = !show"
                            prepend-icon="mdi-lock-question"
                        ></v-text-field>
                        <v-text-field
                            label="ایمیل"
                            v-model="signup_email"
                            
                            prepend-icon="mdi-email"
                        ></v-text-field>
                        <v-checkbox label="مایل به دریافت اخبارم" v-model="news"></v-checkbox>
                        <v-spacer></v-spacer>
                        <v-btn depressed small class="orange darken-1 white--text mt-3 mb-0 ml-0" @click="register()" >تائید</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </div>
    </v-dialog>
</template>

<script>
export default {
    data(){
        return{
            //dialog show or not
            dialog: false,
            //for change situation login/signup
            signin: true,
            signup : false,
            
            //rules for login and signup
            rules: {
                required: value => !!value || 'Required',
                counter: value => value.length <= 20 || 'Max 20 characters',
                min: v => v.length >= 8 || 'Min 8 characters',
                login_email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
                signup_email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            },

            //change situation between show password or not
            show:false,
            //snackbar 
            server_error: false,


            //*******Dynamic Information and Data */
            //for login
            login_email:'',
            login_password:'',
            
            //for sign up
            user_name:'',
            signup_password:'',
            signup_email:'',
            login_type: null,
            news: false,
            

        }
    },
    methods:{
        login(){
            const userInfo = {
                email: this.login_email,
                password: this.login_password
            }
            this.$store.dispatch('Login', userInfo)
                .then(() => {
                    // console.log(result)
                    //this.$router.push('/dashboard')
                })
                .catch(() => {
                    
                })
        },
        register(){
            const userInfo = {
                username : this.user_name,
                email : this.signup_email,
                password :this.signup_password,
                phone: "+98" ,
                news:this.news // its should be add;
                //signup_type: this.signup_type
            }
            this.$store.dispatch('Register', userInfo)
                .then(() => {
                    // console.log(result) // for debugging
                   // this.$router.push(`/dashboard/${this.signup_type}/step1`)
                })
                .catch(() => {
                    // console.log(err)
                })
        }
    }
}
</script>

<style>

</style>