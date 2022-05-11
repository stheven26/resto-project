<template>
    <img class="logo" src="../assets/resto.jpg" alt="logo">
    <h1>Login</h1>
    <div class="login">
        <input type="email" v-model="email" placeholder="Enter Email" name="email" autocomplete="on">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="login">Login</button>
        <p>
            <router-link to="/sign-up">Register</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginPage',
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
            console.warn(result)
            if(result.status === 200 && result.data.length > 0){
                localStorage.setItem("User-Info", JSON.stringify(result.data[0]))
                this.$router.push({ name: 'HomePage' })
            }else{
                alert("Can't Login!");
            }
        }
    },
     mounted() {
        let user = localStorage.getItem("User-Info");
        if (user) {
            this.$router.push({ name: 'HomePage' })
        }
    }
}
</script>

<style>
.logo {
    width: 100px;
}

.login input {
    display: block;
    width: 300px;
    height: 35px;
    padding-left: 10px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
    border-radius: 5px;
}

.login button {
    width: 120px;
    height: 30px;
    background: skyblue;
    color: white;
    border: 1px solid white;
    border-radius: 20px;
    cursor: pointer;
}
</style>