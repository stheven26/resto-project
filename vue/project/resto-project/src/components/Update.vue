<template>
    <HeaderPage />
    <h1>Welcome to Update Restaurant Page!</h1>
       <form class="update">
        <input type="text" name="name" placeholder="Update Name" v-model="restaurant.name">
        <input type="text" name="phone" placeholder="Update Phone" v-model="restaurant.phone">
        <input type="text" name="address" placeholder="Update Address" v-model="restaurant.address">
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
</template>

<script>
import HeaderPage from './Header.vue';
import axios from 'axios';
export default {
    name: "UpdateRestaurant",
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
    methods:{
        async updateRestaurant(){
            const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id, {
                name: this.restaurant.name,
                phone: this.restaurant.phone,
                address: this.restaurant.address,
            })
            if (result.status === 200) {
                this.$router.push({ name: "HomePage" });
            }
            console.warn("result: ", result)
        }
    },
    async mounted() {
        let user = localStorage.getItem("User-Info");
        if (!user) {
            this.$router.push({ name: "SignUp" }); 
        }
        const result = await axios.get("http://localhost:3000/restaurant/" + this.$route.params.id)
        this.restaurant = result.data
        console.warn(this.restaurant)
    },
}
</script>

<style>
.update input {
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

.update button {
    width: 150px;
    height: 30px;
    border: 1px solid white;
    border-radius: 20px;
    background: skyblue;
    color: white;
    cursor: pointer;
}
</style>
