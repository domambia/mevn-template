<template>
  <div class="home">
 	<h2>MEVN FULLSTACT </h2>

 	<h4>Testing API User</h4>
 	<p v-if="user">{{user.name}}, {{user.email}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'Home',
  data(){
  	return{
  		user: null
  	}
  },
  mounted(){
  	this.getData()
  },
  methods: {
  	async getData(){
  		const {data} = await axios.get('user');
  		this.user = data.user
  	}
  }
  

}
</script>
