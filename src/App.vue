<template>
  <div>
    <sell-header :seller='seller'></sell-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/Goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/Ratings">评论</router-link>
      </div>
      <div class="tab-item">
       <router-link to="/Sell">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  import sellHeader from './components/sellHeader';

  export default {
    name:'app',
    data(){
      return{
        seller:{}
      }
    },
    created(){
      this.$http.get('/api/seller').then(response=>{
        response = response.json();
        if(response.errno == 0){
          this.seller = response.data;
          console.log(this.seller);
        }
      })
    },
    components: {
      sellHeader
    }
  }

</script>

<style>

  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  

  .tab-item{
    flex: 1;
    text-align: center;
   
  }
  a{
    display:block;
    text-decoration: none;
    color:rgb(77,85,93);
    font-size:14px;
  }
  .router-link-active{
    color:rgb(240,20,20);
    font-size:14px;
  }
      
 
</style>
