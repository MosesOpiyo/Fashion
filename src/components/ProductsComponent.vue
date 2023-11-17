<template>
    <NavbarComponent/>
    <div class="banner"></div>
    <div class="collection">
      <h1>NEW COLLECTION.</h1>
      <p>Everything starts with an idea. We wanted to modify things since we were tired of seeing the same apparel that didn't fit well. We designed the most comfortable clothes fashion for men.</p>
    </div>
    <div class="products">
      <div class="product">
        <img src="https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Image">
      </div>
      <div class="product">
        <img src="https://images.pexels.com/photos/7959943/pexels-photo-7959943.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Image">
      </div>
      <div class="product">
        <img src="https://images.pexels.com/photos/3054982/pexels-photo-3054982.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Image">
      </div>
      <div class="product">
        <img src="https://images.pexels.com/photos/4012254/pexels-photo-4012254.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Image">
      </div>
    </div>
    <div class="shop-now">
      <button>Shop Now</button>
    </div>
    <div class="gif">
      <h1>PASSION BROUGHT US HERE.</h1>
    </div>
    <footerComponent/>
</template>
<script>
import NavbarComponent from "../components/reuseables/navBarComponent.vue"
import footerComponent from "./reuseables/footerComponent.vue";

export default {
  name: 'ProductsComponent',
  components:{
    NavbarComponent,
    footerComponent
  }
}
</script>
<style>
template{
  margin: 0;
  padding: 0;
  width: 100%;
}
.banner{
  width: 100%;
  background-image: url("https://www.apetogentleman.com/wp-content/uploads/2022/05/FALL-WINTER-TRENDS.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
}
.collection{
  padding: 20px;
  align-items: center;
}
.collection h1{
  font-size: 55px;
  font-weight: bolder;
}
.products {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      padding-top: 30px;
    }

    .product {
      padding: 15px;
      text-align: center;
    }

    .product img {
      width: 100%;
    }

    .shop-now button{
        margin-top: 50px;
        width: 20%;
        background-color: black;
        border: none;
        height: 2.5pc;
        color: white;
    }
    .gif{
      margin-top: 20px;
      width: 100%;
      background-image: url("https://media.tenor.com/MiiSaoOtKHgAAAAC/black-background.gif");
      background-position: center;
      background-size: contain;
      height: 400px;
      align-items: center;
      
    }
    .gif h1{
      padding-top: 20%;
      text-align: center;
      color: white;
    }

    button{
        width: 90%;
        background-color: black;
        border: none;
        height: 2.5pc;
        border-radius: 5px;
        color: white;
    }

    @media (max-width: 768px) {
      .products {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
      }
    }
</style>