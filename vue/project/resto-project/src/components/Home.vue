<template>
  <HeaderPage />
  <h1>Hello {{ name }}, Welcome to Homepage!</h1>
  <table id="table">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Phone</td>
      <td>Address</td>
      <td>Update Restaurant</td>
      <td>Delete Restaurant</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>
        {{ item.id }}
      </td>
      <td>
        {{ item.name }}
      </td>
      <td>
        {{ item.phone }}
      </td>
      <td>
        {{ item.address }}
      </td>
      <td>
        <router-link :to="'/update/' + item.id"> Update </router-link>
      </td>
      <td>
        <button v-on:click="deleteRestaurant(item.id)" class="deleteButton">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import HeaderPage from "./Header.vue";
export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  components: {
    HeaderPage,
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/" + id);
      console.warn(result);
      if (result.status === 200) {
        this.loadData();
        alert("Success Delete Restaurant")
      }
    },
    async loadData() {
      let user = localStorage.getItem("User-Info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:3000/restaurant");
      this.restaurant = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>

<style>
#table {
  margin-left: auto;
  margin-right: auto;
}
td {
  width: 160px;
  height: 40px;
  border: 1px solid black;
}

.deleteButton{
    width: 100px;
    height: 30px;
    border: 1px solid white;
    border-radius: 20px;
    background: skyblue;
    color: white;
    cursor: pointer;
}
</style>
