<template>
    <div class="signup">
        <v-toolbar
        color="success"
        dark
        >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        
        <v-toolbar-title></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>add</v-icon>
        </v-btn>
        <v-btn label="share" @click="opendialog = true" >
            Invite
        </v-btn>
        </v-toolbar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            >
            <v-list-item>
                <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                <v-list-item-title></v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title @click="goto(item)">{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-dialog
            v-model="opendialog"
            width="350"
        >
        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
            Invite Team
            </v-card-title>

            <v-card-text>
            <v-text-field
                v-model="inputString"
            ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="opendialog = false"
            >
                close
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
  </div>
</template>
<script>

export default {
    name : 'profile',
    // props:{
    //     personInfo :{
    //         required: true,
    //     }
    // },
    data:()=>({
        opendialog : false,
        inputString : 'your invite link',
        drawer : false,
        items:[
            { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
    }),
    methods : {
        goto(i){
            console.log(i);
        }
    }
}
</script>
