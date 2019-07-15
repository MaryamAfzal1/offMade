<template>
 <div class="container">
   <div>

     <h1 class="title">
       testapp
     </h1>
     <h2 class="subtitle">
       Offmade
     </h2>
   </div>
   <div id="signUp">
       <input type="text" name="username" v-model="input.username" placeholder="Username" />
       <input type="email" name="email" v-model="input.email" placeholder="Email" />
       <input type="password" name="password" v-model="input.password" placeholder="Password" />
       <button type="button" class="button--green" v-on:click="signUp()">Register</button>
   </div>

 </div>
</template>

<script>

export default {
 components: {
 },
 data() {
          return {
              input: {
                 username: "",
                 email: "",
                 password: ""
               }
         }
       },

 methods: {
   signUp(){
    //create new instance of the user class
     let User = Parse.Object.extend('User');

    // let user=new Parse.User();
     let user= new User();

     //set the properties to object user
     user.set("username", this.input.username);
     user.set("email", this.input.email);
     user.set("password", this.input.password);
     user.save();

     console.log(user);

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