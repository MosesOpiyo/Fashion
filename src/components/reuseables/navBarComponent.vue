<template>
    <nav>
        <div class="start-links">
            <a href="#">Shop</a>
            <a href="#">Contact</a>
        </div>
        <div class="logo">
            <button>Fashion</button>
        </div>
        <div class="more-options">
            <router-link class="link" to="/">Login</router-link>
            <a href="#">Cart</a>
        </div>
    </nav>
</template>
<script>
export default {
  name: 'NavbarComponent',
}
</script>
<style>
template{
    padding: 10px;
}
nav {   
    height: 60px;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

    nav a {
        color: black;
        text-decoration: none;
        padding: 10px;
    }
    .link{
      background-color: transparent;
      cursor: pointer;
      transition: background-color 2s;
    }
    .link:hover{
      color: white;
      border-radius: 10px;
      background-color: black;
    }

    nav a:hover {
        background-color: #555;
    }

    .logo {
        flex-grow: 1;
        text-align: center;
        width: 10px;
    }
    .logo button{
      width: 10pc;
      font-size: 20px;
      background-color: white;
      color: black;
      border: 2px solid black;
      border-radius: 20px;
      font-style: italic;
    }

    .more-options {
        display: flex;
    }

    .more-options a {
        margin-left: 10px;
    }
  </style>