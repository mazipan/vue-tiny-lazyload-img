<template>
  <div id="app">

    <header class="header header-dummy">
      <a href="/vue-tiny-lazyload-img/" alt="Home">
        <h1>Vue Tiny Lazyload Img</h1>
      </a>
      <div>
        <a href="https://github.com/mazipan/vue-tiny-lazyload-img"
            target="_blank" rel="noopener" alt="Github Link">
          <svg viewBox="0 0 512 512" class="ic"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg>
        </a>
      </div>
    </header>

    <main class="content">

      <img
          v-for="img in images"
          :key="img"
          v-lazyload
          class="lazy"
          src="./assets/logo.png"
          data-src="./assets/logo-success.png"
          data-err="./assets/logo-error.png">

    </main>

    <footer class="footer">
      Copyright © 2018 by Irfan Maulana
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      images: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    };
  }
};
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji";
  color: #282828;
  font-size: 100%;
}
a {
  color: #4dba87;
  text-decoration: none;
}
a:hover {
  color: #4dba87;
}
h1 {
  margin: 0;
  margin-left: 0.3em;
  font-size: 1.5rem;
  color: #fff;
}
.header,
.footer {
  width: 100%;
  background-color: #4dba87;
  color: #fff;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
}
.header {
  justify-content: space-between;
  height: 60px;
  top: 0;
}
.footer {
  justify-content: center;
  height: 50px;
  font-size: 1rem;
  bottom: 0;
}
.ic {
  fill: #fff;
  margin-right: 0.3em;
  width: 30px;
  height: 30px;
}
.content {
  margin: 70px 0;
}

.lazy {
  display: block;
  margin: 1em auto;
  text-align: center;
}
</style>
