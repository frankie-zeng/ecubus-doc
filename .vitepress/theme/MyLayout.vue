<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';
import { onMounted } from 'vue';

const { Layout } = DefaultTheme

onMounted(() => {
  //viewer.js all class="featureImg" elements
  const images = document.querySelectorAll('.featureImg');
  const viewerContainer = document.createElement('div');
  viewerContainer.style.display = 'none';
  document.body.appendChild(viewerContainer);
  images.forEach(img => viewerContainer.appendChild(img.cloneNode(true)));
  const viewer = new Viewer(viewerContainer, {
    inline: false,
    zoomRatio: 0.1,
  });
  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      viewer.view(index);
    });
  });
});

</script>

<template>
  <Layout>
    <template #home-features-before>

      <div class="container">
        <div class="item">
          <h2>Send and Receive messages</h2>
          <div class="description">
            <p>Supports manual sending, shortcut key sending and cycle sending.</p>
          </div>
          <img src="https://ecubus.oss-cn-chengdu.aliyuncs.com/main/main1.png" alt="发送和接收消息界面" class="featureImg">
        </div>
        <div class="item">
          <h2>UDS Diagnostics</h2>
          <div class="description">
            <p>Comprehensive UDS service support, integrating multiple services into a streamlined sequence, with robust TS script capabilities.</p>
          </div>

          <img src="https://ecubus.oss-cn-chengdu.aliyuncs.com/main/main2.png" alt="加载数据库界面" class="featureImg">
        </div>
      </div>
    </template>
   
  </Layout>
</template>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px 10%;
}

.item {
  flex: 1 1 calc(50% - 10px);
  min-width: 300px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}


.item:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2), 0 6px 12px rgba(0, 0, 0, 0.15);
}

h1 {
  color: #333;
  text-align: center;
}

h2 {
  color: #0066cc;
  margin-top: 0;
}

.description {
  position: relative;

  height: 4.5em;
  /* 约3行文字的高度 */
  display: flex;
  align-items: center;
  overflow: hidden;
}

p {
  color: #666;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
}

@media (max-width: 900px) {
  .item {
    flex: 1 1 100%;
  }
}
</style>