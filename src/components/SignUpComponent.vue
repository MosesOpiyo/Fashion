<template>
    <div class="container">
        <form>
            <div class="register-texts">
                <h3>REGISTER</h3>
                <h4>Please enter email and password</h4>
            </div>
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <input routerLink="/Home" type="submit" value="CREATE MY ACCOUNT">
            <p>Have an account?</p><router-link to="/">Login</router-link>
        </form>
    </div>
</template>
<script>
export default {
  name: 'SignUpComponent',
}
</script>
<style>
.container{
    padding-top: 50px;
}
.register-texts{
    color: white;
    text-align: center;

}
h3{
    color: gray;
}
h4 {
    font-weight: 400;
    font-size: 15px;
    color: gray;
    padding-top: 15px;
    padding-right: 10px;
    
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
  }

  input[type="email"],
  input[type="password"] {
    margin-bottom: 15px;
    padding: 10px;
    width: 250px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  input[type="submit"] {
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    width: 250px;
    background-color: black;
    border-radius: 5px;
    border: 1px solid #ccc;
}
a{
    text-decoration: none;
    color: black;
}
</style>