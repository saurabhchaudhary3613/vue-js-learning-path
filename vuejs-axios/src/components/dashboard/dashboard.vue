<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <!-- <p>Your email is : {{ email}}</p>
    <p>Country : {{ country}}</p> -->

    <ul v-for="(user, index) in appUsers" :key="index">
      <li> Your email is: {{user.email}} ---<span>country: {{user.country}} </span></li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      country: '',
      appUsers: []
    }
  },
  created() {
    axios.get('/users.json')
        .then((res) => {
          console.log(res.data);
          const data = res.data;
          const users = [];
          for(let key in data) {
            const user = data[key];
            user.id = key
            users.push(user);
          }
          console.log(users);
          this.appUsers = users;
          this.email = users[0].email;
          this.country = users[0].country;
        })
        .catch(error => console.log(error))
  },
}
</script>


<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>