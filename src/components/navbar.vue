<template>
    <div>
        <v-app-bar flat class="white--text primary" height="70" clipped-right>
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
                    <span v-if="shop_cart > 0"> {{ shop_cart }}</span>
                </template>
                <v-btn router to="/shop" flat icon transparent>
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
                        v-for="n in 5"
                        :key="n"
                        @click="() => {}"
                    >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>


        <v-navigation-drawer
            class="deep-purple accent-4"
            dark
            absolute
            v-model="drawer"
            temporary
            right
            clipped
        >
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
                    v-for="item in itemWithSub"
                    :key="item"
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

                    <v-list-item v-for="subitem in item.subitems" :key="subitem" router :to="subitem.route">
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
                { icon: 'mdi-chart-line', title: 'داده ها', route: '/data' },
                { icon: 'mdi-email', title: 'پیام ها', route: '/message' },
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
        }
    }
}
</script>

<style>

</style>