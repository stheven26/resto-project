<template>
    <img class="logo" src="../assets/resto.jpg" alt="logo">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" name="name" autocomplete="on">
        <input type="email" v-model="email" placeholder="Enter Email" name="email" autocomplete="on">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            email: "",
            password: "",
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/user", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.warn(result)
            if (result.status === 201) {
                localStorage.setItem("User-Info", JSON.stringify(result.data))
                this.$router.push({ name: 'LoginPage' })
            } else {
                alert("Can't Sign Up!");
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("User-Info");
        if (user) {
            this.$router.push({ name: 'LoginPage' })
        }
    }
}
</script>

<style>
.logo {
    width: 100px;
}

.register input {
    width: 300px;
    height: 35px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
    padding-left: 10px;
    display: block;
    border: 1px solid skyblue;
    border-radius: 5px;
}

.register button {
    width: 120px;
    height: 30px;
    border: 1px solid white;
    border-radius: 20px;
    background: skyblue;
    color: white;
    cursor: pointer;
}
</style>