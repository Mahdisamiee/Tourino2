<template>
    <div>
        <v-app-bar inverted-scroll app  class="white--text blue darken-3" height="70" clipped-right>
            <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>داشبورد</v-toolbar-title>

            <v-spacer></v-spacer>
<!-- 
            <v-btn class="white--text" icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn> -->

            <v-badge
                color="green darken-1"
                overlap
                left
                class=""
            >
                <template v-slot:badge>
                    <span v-if="shopCart >= 0"> {{ shopCart }}</span>
                </template>
                <v-btn router to="/shop" text icon transparent>
                    <v-icon color="white" large >mdi-cart</v-icon>
                </v-btn>
            </v-badge>

            <v-menu
                left
                bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn large class="white--text mr-3" icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                        v-for="(n,index) in 5"
                        :key="index"
                        @click="() => {}"
                    >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>


        <v-navigation-drawer
            class="purple"
            dark
            v-model="drawer"
            right
            fixed
        >
            
            <div class="back">
                <v-btn text icon class="grey darken-1 ma-1" @click="drawer = false">
                    <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </div>
            <v-list>
                <v-list-item
                    v-for="item in itemWithoutSub"
                    :key="item.title"
                    link
                    router
                    :to="item.route"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-group
                    v-for="(item, index) in itemWithSub"
                    :key="index"
                    :prepend-icon="icon"
                    no-action
                    >
                    <template v-slot:activator>
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{item.title}}
                            </v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item v-for="(subitem, index) in item.subitems" :key="index" router :to="subitem.route">
                        <v-list-item-icon>
                        <v-icon v-text="subitem.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{subitem.title}}</v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </v-list>

            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block>Logout</v-btn>
                </div>
            </template>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data(){
        return {
            drawer: false,
            items: [
                { icon: 'mdi-home', title: 'خانه', route: '/' },
                { icon: 'mdi-basket', title: 'محصولات', route: '/products' },
                { icon: 'mdi-airplane', title: 'تور ها', route: '/tours' },
                { icon: 'mdi-book-open-page-variant', title: 'بلاگ', route: '/blogs' },
                { icon: 'mdi-magnify', title: 'منو تست', route: '/testing', subitems: [
                                                                                        { icon: 'mdi-home', title: 'خانه', route: '/' },
                                                                                        { icon: 'mdi-chart-line', title: 'something', route: '/data' },
                                                                                        { icon: 'mdi-history', title: 'something else' },
                                                                                        ]},
                
            ],
            shop_cart: 5,
        }
    },
    computed: {
        itemWithSub() {
            let item = this.items.filter(c => c.hasOwnProperty('subitems'))
            return item
        },
        itemWithoutSub() {
            let item = this.items.filter(c => !c.hasOwnProperty('subitems'))
            return item
        },
        shopCart(){
            return this.$store.getters.shop_cart;
        }
    }
}
</script>

<style scoped>
.back{
    display: grid;
    justify-items: end;
    padding: 3px;
}
.v-application .primary--text {
    color: #e7e7e7 !important;
    caret-color: #be1111 !important;
}
</style>