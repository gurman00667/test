<template>
  <div ref="login" class="Login">
      <v-container fluid fill-height>
         <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
               <v-card class="elevation-12">
                  <v-toolbar dark color="primary">
                     <v-toolbar-title>Login</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                     <v-form ref="loginForm">
                        <v-text-field
                           v-model="username"
                           prepend-icon="person"
                           name="login"
                           :rules="loginEmailRules"
                           label="Login"
                           type="text"
                        ></v-text-field>
                        <v-text-field
                           v-model="pswrd"
                           id="password"
                           prepend-icon="lock"
                           name="password"
                           label="Password"
                           type="password"
                        ></v-text-field>
                     </v-form>
                  </v-card-text>
                  <v-card-actions>
                     <v-spacer></v-spacer>
                     <v-btn color="primary" type="submit" @click="dialog= true">Sign up</v-btn>
                     <v-btn color="primary" type="submit" @click="checkuserexist">Login</v-btn>
                  </v-card-actions>
               </v-card>
            </v-flex>
         </v-layout>
      </v-container>
      <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
            <div>
               <v-card class="px-4">
                  <v-card-text>
                     <v-form ref="registerForm" v-model="valid" lazy-validation>
                        <v-row>
                           <v-col cols="12" sm="6" md="6">
                              <v-text-field v-model="firstName" :rules="[rules.required]" label="First Name" maxlength="20" required></v-text-field>
                           </v-col>
                           <v-col cols="12" sm="6" md="6">
                              <v-text-field v-model="lastName" :rules="[rules.required]" label="Last Name" maxlength="20" required></v-text-field>
                           </v-col>
                           <v-col cols="12">
                              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                           </v-col>
                           <v-col cols="12">
                              <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                           </v-col>
                           <v-col cols="12">
                              <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirm Password" counter @click:append="show1 = !show1"></v-text-field>
                           </v-col>
                           <v-spacer></v-spacer>
                           <v-col cols="12" sm="6" md="6" >
                              <v-btn x-large block :disabled="!valid" color="success" @click="submitInfo">Register</v-btn>
                           </v-col>
                           <v-col cols="12" sm="6" md="6" >
                              <v-btn x-large block color="error" @click="dialog = false">Cancel</v-btn>
                           </v-col>
                        </v-row>
                     </v-form>
                  </v-card-text>
               </v-card>
            </div>
        </v-dialog>
      <v-dialog
         v-model="errordialog"
         width="350"
      >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Error
        </v-card-title>

        <v-card-text>
          {{error.message}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="errordialog = false"
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
import funcs from '../Actions/commonFunc';
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data:()=>({
   dialog:false,
   person:{
      name: '',
      company:''
   },
   firstName: "",
   lastName: "",
   email: "",
   password: "",
   verify: "",
   valid: false,
   show1: false,
   rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
   },
   emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
   ],

   errordialog:false,
   error:{
      message : ''
   },
   username : '',
   pswrd:'',
   loginEmailRules: [
   v => !!v || "Required",
   v => /.+@.+\..+/.test(v) || "E-mail must be valid"
   ],
  }),
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
      async checkuserexist(){
         console.log(window.location)
        if(this.username.indexOf('@localhost.com',this.username.length -"@localhost.com".length)!== -1){
           var res = await axios.get('/login', {params:{username:this.username}});
           var data = res.data.data;
            if(data)
            {  
               if(data.Email == this.username && funcs.decrypt(data.password) == this.pswrd){
                  this.$router.push({ name: 'home', params:{ userName : data.name}});   
               }
               else {
                  this.errordialog = true;
                  this.error.message = "invalid usename or password.";
               }
            }
            else {
               this.errordialog = true;
               this.error.message = "user doesn't exists";
            }
        }
        else {
           this.errordialog = true;
           this.error.message = " only localhost users";
        }
      },
      extractHostname(url) {
         var hostname;

         if (url.indexOf("//") > -1) {
            hostname = url.split('/')[2];
         }
         else {
            hostname = url.split('/')[0];
         }
         hostname = hostname.split(':')[0];
         hostname = hostname.split('?')[0];

         return hostname;
      },
      extractRootDomain(url) {
         var domain = this.extractHostname(url),
            splitArr = domain.split('.'),
            arrLen = splitArr.length;
         if (arrLen > 2) {
            domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
            if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
                  domain = splitArr[arrLen - 3] + '.' + domain;
            }
         }
         return domain;
      },
      async submitInfo() {
         var domain = this.extractRootDomain(window.location.href);
         let emailChecker = '@'+domain+'.com'
         if(this.email.indexOf(emailChecker,this.email.length - emailChecker.length)!== -1){
            if(this.password === this.verify){
               var dataObj = {
                  Email: this.email,
                  name: this.firstName,
                  password: funcs.encrypt(this.password),
                  noofPost: 0,
                  comment:0
               }
               var res = await axios.post('/adduser',dataObj);
               if(res.data.status == 200){
                  alert(res.data.message);
                  this.dialog = false;
               }
               else if(res.data.status == 404){
                  alert(res.data.message);
               }
            }
         }
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
