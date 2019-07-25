<template>
  <div id="app">
    <div class="main">
      <div class="input-icons">
        <i class="fa fa-search icon" />
        <input
          v-model="search"
          class="input-field"
          type="text"
          placeholder="Enter Your Search Items"
        >
      </div>
      <div
        v-for="(customer,index) in filtername"
        :key="index"
        class="lists"
      >
        <img :src="customer.profile_pic">
        {{ customer.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      customers: [
        { id: '1', name: 'What You Need to Know About CSS Variable', profile_pic: 'cloud.jpeg' },
        { id: '2', name: 'Freebie:4 Great Looking Pricing Tables', profile_pic: '2.jpeg' },
        { id: '3', name: '20 interesting Javascript and CSS Library for February', profile_pic: '3.jpeg' },
        { id: '4', name: 'Quick Tip: The Easiest Way To Make Responcive Headers', profile_pic: '4.jpeg' },
        { id: '5', name: 'Learn SQL in 20 Minuts', profile_pic: '5.jpeg' }
      ]
    }
  },
  computed: {
    filtername () {
      if (this.search) {
        return this.customers.filter((customer) => {
          return customer.name.toLowerCase().startsWith(this.search)
        })
      } else {
        return this.customers
      }
    }
  }
}

</script>

<style scoped>
.main{
    margin: 200px 800px;
    font-family: Arial, Helvetica, sans-serif;
}
.input-icons {
  display: flex;
  width: 450px;
  border: 15px solid #5d92ab;
  padding: 15px;
  height:40px;
  align-items: center;
}
.fa{
  font-size: 25px;
  padding: 7px;
  color: rgb(109, 107, 107);
}
.input-field{
   width: 91%;
  padding-left: 30px;
  outline: none;
  border: 0px;
  font-size: 15px;
  font-weight: bold;
}
.lists{
  border-bottom: 2px  solid rgb(235, 229, 229);
  display: flex;
  width: 450px;
  padding: 16px 32px 49px 35px;
  height: 17px;
  font-weight: bold;
  color: rgb(109, 107, 107);
  font-size: 18px;
  word-spacing: 4px;
}
img{
  padding: 0 15px 0 0;
  height: 40px;
  width:  40px;
}
customers.name{
  margin-left: 25px;
}
</style>
