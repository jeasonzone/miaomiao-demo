
<template>
  <div id="main">
    <Header title="瓜子影院" />
    <div id="content">
      <div class="cinema_menu">
        <router-link tag="div" to="/cinema/ciList" class="allCity">
          全城
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <router-link tag="div" to="/cinema/brand" class="brand">
          品牌
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <router-link tag="div" to="/cinema/characteristic" class="characteristic">
          特色
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
      <!-- <CiList /> -->
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
export default {
  name: "Cinema",
  components: {
    Header,
    TabBar
  }
};
</script>
<style scoped>
#content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
#content .allCity.router-link-active{
  color: red;
}
#content .brand.router-link-active{
  color: red;
}
#content .characteristic.router-link-active{
  color: red;
}
</style>