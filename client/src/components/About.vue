<template>
  <div>
    <head-nav></head-nav>
    <div class="banner">
      <div class="on-banner">
        <div class="ban-content">
          <p class="con-p">We are only here briefly, and when I'm here I want to allow myself joy.</p>
          <h2 class="con-title">Do you want to know me ?</h2>
          <div class="con-bottom">
            <a href="" class="con-but button button--white-hollow">READ MORE</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeadNav from '@/components/common/HeadNav'
    export default {
      name: "Home",
      components:{
        HeadNav
      }
    }
</script>

<style scoped>
  .banner{
    width: 100%;
    height: 700px;
    background: url("../assets/images/banner.jpg") no-repeat rgba(0,0,0,.5);
    background-size: cover;
    opacity: 0.9;
    position: relative;
  }
  .on-banner{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 700px;
  }
  head-nav{
    position: absolute;
  }
  .ban-content{
    width: 80%;
    height: 270px;
    text-align: center;
    color: white;
    margin: 50px auto;
    /*border: 1px solid red;*/
  }
  .con-p{
    font-size: 16px;
    font-family: "Helvetica Neue";
    font-weight: 100;
    margin: 20px auto;
  }
  .con-title{
    margin-top: 30px;
    font-size: 55px;
    font-weight: 700;
    font-family: "Book Antiqua";
  }
  .con-bottom{
    margin-top: 70px;
  }
  .button.button--white-hollow {
    background-color: transparent;
    border-color: #fff;
    color: #fff;
  }
  .button {
    border: 2px solid transparent;
    background: none;
    color: #999;
    cursor: pointer;
    display: inline-block;
    font-family: Avenir Next LT W01 Demi;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: .2em;
    height: 68px;
    line-height: 1.2;
    padding: 22px 30px;
    text-align: center;
    transition: .1s ease-in-out;
    text-transform: uppercase;
    width: 255px;
  }
  a {
    text-decoration: none;
  }
</style>
