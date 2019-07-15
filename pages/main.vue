<template>
<div class="container">
<div class="CreateProducts">
 <form action="post">
 <h1> Create a Product </h1>
   <label > Name </label>
   <input type="text" name="name" v-model="input.name" placeholder="name" />
 

   <label > Price </label>
   <input type="text" name="name" v-model="input.price" placeholder="price" />
 
 
   <label > Location </label>
   <input type="text" name="name" v-model="input.location" placeholder="location" />
 
 
 <button type="button" class="button--green" v-on:click="createProduct()"> Add </button>
 </form>
</div>
     <div class="products">
       <table class="table table-striped table-borders">
         <caption> All Products </caption>
         <thead>
           <tr>
             <th> Name </th>
             <th> Price </th>
             <th> Location </th>
             <th> Created by</th>
           </tr>
         </thead> 
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{product.get('name')}}</td>
            <td>{{product.get('price')}}</td>
            <td>{{product.get('location')}}</td>
           <!-- <td>{{product.get('username').get('username')}}</td>-->
          </tr>
          <tr>   
            <td colspan="4"> <button type="button" class="button--green" v-on:click="retrieveProducts()">Show all Products</button></td>         
          </tr>
        </tbody>
        </table>
     </div>
   
 </div>
</template>

<script>

export default {
middleware: 'authentication',
 components: {
 },
 data() {
          return {
              input: {
                 name: "",
                 price: "",
                 location: "",
                 username: "",
               },
               products: [] 
         }
       },

 methods: {
   createProduct(){
    let Products = Parse.Object.extend('Products');
    let products= new Products();
    products.setACL(new Parse.ACL(Parse.User.current()));
    products.set("name", this.input.name);
    products.set("price", this.input.price);
    products.set("location", this.input.location);
    products.set("user", Parse.User.current());
    products.save();

   },
    async retrieveProducts(){
    let Products = Parse.Object.extend("Products");
    let query = new Parse.Query(Products);
    this.products =  await query.find();
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
 
.links {
 padding-top: 15px;
}
.products {
  font-family:Georgia, 'Times New Roman', Times, serif;
  border-collapse: collapse;
  width: 100%;
  padding: 20px;
}

.products td, .products th {
  border: 1px solid #ddd;
  padding: 12px;
}
.products caption{
  text-align: center;
  font-size: 24px;
}

.products tr:nth-child(even){background-color: #f2f2f2;}

.products tr:hover {background-color: #ddd;}

.products th {
  padding: 14px;
  text-align: left;
  background-color: #f2f2f2;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  
}

.CreateProducts {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  text-align: left;
  font-family:Georgia, 'Times New Roman', Times, serif;
}
.CreateProducts h1 {
  text-align: center;
  font-size: 24px;
}
</style>