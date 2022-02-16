<template>
  <header class="main-header">
    <div class="header__container">
      <router-link to="/" class="header__logo">
        <img src="./assets/img/logo.png" alt="">
      </router-link>

      <nav class="header__nav">
        <router-link to="/" class="header__link">Форма</router-link>
        <router-link to="/preview" class="header__link">Превью</router-link>
      </nav>
    </div>
  </header>

  <main>
    <router-view />
  </main>

  <footer class="main-footer">
    <p class="footer__text">all rights reserved</p>
  </footer>
</template>

<script setup>

</script>

<style src="./assets/css/style.css"></style>
