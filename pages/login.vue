<template>
 <div class="container">
   <div>
     <h1 class="title">
       Offmade
     </h1>
   </div>

   <div id="logIn">
     <h1> Log In! </h1>
     <input type="email" name="email" v-model="input.email" placeholder="email" />
     <input type="password" name="password" v-model="input.password" placeholder="password"/>
     <button type="button" class="button--green" @click="logIn()">Log In</button>
     <button type="button"  class="button--green" @click="logout()">Log out</button>
   </div>

 </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
 components: {

 },
 data() {
          return {
              input: {
                 email: "",
                 password: ""
               }
         }
       },

 methods: {
    logIn(){
     //create new instance of the user class
     let user= Parse.User.logIn(this.input.email, this.input.password).then(function(user) {
           console.log('User signIn successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
           
   }).catch(function(error){
       console.log("Error: " + error.code + " " + error.message);
   });
   this.$nuxt.$router.push("/main");
   },
   
   logout(){
       Parse.User.logOut().then(() => {
       var currentUser = Parse.User.current();  // this will now be null
        console.log('User logged ');
   });
   }
}
}

</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
 @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
 margin: 0 auto;
 min-height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 text-align: center;
}

.title {
 font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
   'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
 display: block;
 font-weight: 300;
 font-size: 100px;
 color: #35495e;
 letter-spacing: 1px;
}

.subtitle {
 font-weight: 300;
 font-size: 42px;
 color: #526488;
 word-spacing: 5px;
 padding-bottom: 15px;
}

.links {
 padding-top: 15px;
}
.signUp {
       width: 500px;
       border: 1px solid rgb(10, 10, 10);
       background-color: #FFFFFF;
       margin: auto;
       margin-top: 200px;
       padding: 20px;
   }

</style>