<template>
  <div id="app">
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse show">
          <ul class="navbar-nav">
            <router-link tag="li" class="nav-item" exact to="/" active-class="active">
              <a class="nav-link link-style">Home</a>
            </router-link>
            <router-link tag="li" class="nav-item" to="/cars" active-class="active">
              <a class="nav-link link-style">Cars</a>
            </router-link>
          </ul>
        </div>
      </nav>
    </header>
    <router-view></router-view>
    <footer class="footer">{{footer}}</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: "Footer"
    };
  }
};
</script>

<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
.navbar {
  background-color: rgb(35, 50, 63);
}
.navbar-nav {
  display: inline-block;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .nav-link {
  color: white;
}
.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
    color: rgb(166, 255, 178);
}

a {
  color: #42b983;
}
.header {
  padding: 10px 0px;
  position: sticky;
  top: 0;
  border-bottom: 1px solid rgb(221, 220, 220);
  background-color: rgb(35, 50, 63);
  z-index: 999;
}
.footer {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  border-top: 1px solid rgb(221, 220, 220);
  background-color: rgb(35, 50, 63);
  z-index: 999;
  color: white;
  padding: 10px;
}
</style>
