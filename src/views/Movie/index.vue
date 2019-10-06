<template>
  <div id="main">
    <Header title="喵喵电影" />
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>大连</span>
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
	  <keep-alive>
		  <router-view />
	  </keep-alive>
      <!-- <div class="movie_body">
				<ul>
					<li>
						<div class="pic_show"><img src="/images/movie_1.jpg"></div>
						<div class="info_list">
							<h2>无名之辈</h2>
							<p>观众评 <span class="grade">9.2</span></p>
							<p>主演: 陈建斌,任素汐,潘斌龙</p>
							<p>今天55家影院放映607场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
					<li>
						<div class="pic_show"><img src="/images/movie_2.jpg"></div>
						<div class="info_list">
							<h2>毒液：致命守护者</h2>
							<p>观众评 <span class="grade">9.3</span></p>
							<p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
							<p>今天56家影院放映443场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
					<li>
						<div class="pic_show"><img src="/images/movie_1.jpg"></div>
						<div class="info_list">
							<h2>无名之辈</h2>
							<p>观众评 <span class="grade">9.2</span></p>
							<p>主演: 陈建斌,任素汐,潘斌龙</p>
							<p>今天55家影院放映607场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
					<li>
						<div class="pic_show"><img src="/images/movie_2.jpg"></div>
						<div class="info_list">
							<h2>毒液：致命守护者</h2>
							<p>观众评 <span class="grade">9.3</span></p>
							<p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
							<p>今天56家影院放映443场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
					<li>
						<div class="pic_show"><img src="/images/movie_1.jpg"></div>
						<div class="info_list">
							<h2>无名之辈</h2>
							<p>观众评 <span class="grade">9.2</span></p>
							<p>主演: 陈建斌,任素汐,潘斌龙</p>
							<p>今天55家影院放映607场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
					<li>
						<div class="pic_show"><img src="/images/movie_2.jpg"></div>
						<div class="info_list">
							<h2>毒液：致命守护者</h2>
							<p>观众评 <span class="grade">9.3</span></p>
							<p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
							<p>今天56家影院放映443场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
					<li>
						<div class="pic_show"><img src="/images/movie_1.jpg"></div>
						<div class="info_list">
							<h2>无名之辈</h2>
							<p>观众评 <span class="grade">9.2</span></p>
							<p>主演: 陈建斌,任素汐,潘斌龙</p>
							<p>今天55家影院放映607场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
					<li>
						<div class="pic_show"><img src="/images/movie_2.jpg"></div>
						<div class="info_list">
							<h2>毒液：致命守护者</h2>
							<p>观众评 <span class="grade">9.3</span></p>
							<p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
							<p>今天56家影院放映443场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
				</ul>
      </div>-->
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
//import TabBar from "@/components/TabBar";
export default {
  name: "Movie",
  components: {
    Header,
    TabBar
  }
};
</script>
<style scoped>
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .city_name.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_item.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>