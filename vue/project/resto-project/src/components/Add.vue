<template>
    <HeaderPage />
    <h1>Welcome to Add Restaurant Page!</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
        <input type="text" name="phone" placeholder="Enter Phone" v-model="restaurant.phone">
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
        <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
    </form>
</template>

<script>
import HeaderPage from './Header.vue';
import axios from 'axios';
export default {
    name: "AddRestaurant",
    components: {
        HeaderPage
    },
    data() {
        return {
            restaurant: {
                name: '',
                phone: '',
                address: ''
            }
        }
    },
    methods: {
        async addRestaurant() {
            const result = await axios.post("http://localhost:3000/restaurant", {
                name: this.restaurant.name,
                phone: this.restaurant.phone,
                address: this.restaurant.address,
            })
            if (result.status === 201) {
                this.$router.push({ name: "HomePage" });
            }
            console.warn("result: ", result)
        }
    },
    mounted() {
        let user = localStorage.getItem("User-Info");
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }
    },
}
</script>

<style>
.add input {
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

.add button {
    width: 150px;
    height: 30px;
    border: 1px solid white;
    border-radius: 20px;
    background: skyblue;
    color: white;
    cursor: pointer;
}
</style>
