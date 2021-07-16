<template>
    <div class="signup">
        <v-toolbar
        color="success"
        dark
        >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        
        <v-toolbar-title></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="openUploadDialog = true">
            <v-icon >add</v-icon>
        </v-btn>
        <v-btn label="share" @click="opendialog = true" >
            Invite
        </v-btn>
        </v-toolbar>

        <v-container v-if="posts.length >0" fluid>
            <v-row dense>
                <v-col
                v-for="post,idx in posts"
                :key="idx"
                >
                <v-card width='500px'
                >
                    <v-img
                    contain
                    :src="'uploads/' + post.filename"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    >
                    <v-card-title v-text="post.text"></v-card-title>
                    </v-img>

                    <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>mdi-bookmark</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
    <div style="display:flex; justify-content:center;" v-else-if="posts.length == 0">
        <h1>No Post Yet</h1>
    </div>
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

         <v-dialog
            v-model="openUploadDialog"
            width="350"
        >
        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
            Post Photo
            </v-card-title>

            <v-card-text>
                <input type="file" @change="onfileSelected">
                <input type="text" placeholder="Write caption" style="background-color:bisque" v-model="text">
                <v-btn small :disabled="fileSelected == null" outlined color="primary" @click="fileUpload">upload   
                    <v-icon
                        right
                        dark
                    >
                        mdi-cloud-upload
                    </v-icon>
                </v-btn>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="openUploadDialog = false"
            >
                close
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
  </div>
</template>
<script>
import axios from 'axios';
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
        openUploadDialog : false ,
        fileSelected : null,
        posts :[],
        text : '',
    }),
    Commputed :{
        
    },
    mounted(){
        this.getimages();
    },
    methods : {
        
        goto(i){
            console.log(i);
        },
        onfileSelected(event){
            this.fileSelected = event.target.files[0]
            console.log(event.target);
        },
        async fileUpload(){
            const fd = new FormData();
            fd.append('text', this.text);
            fd.append('Image', this.fileSelected,this.fileSelected.name);
            var res = await axios.post('/uploadPost', fd);
            if(res.data){
                console.log(res.data);
            }
            this.openUploadDialog = false
        },

        async getimages(){
            var res = await axios.get('/uploads');
            if(res.data.data){
                this.posts = res.data.data;
            }
        },
    }
}
</script>
