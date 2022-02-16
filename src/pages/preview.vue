<template>
  <section class="preview-content container">
    <div class="preview__parent">
      <h3 class="parent__title title">Персональные данные</h3>
      <p class="user__data data" v-show="store.state.mainData.name">
        {{ store.state.mainData.name }}, {{ store.state.mainData.age }} лет
      </p>
    </div>

    <div class="child">
      <h3 class="child__title title">Дети</h3>

      <ul class="preview__child-list">
        <li
            class="preview__child-item"
            v-show="item.name"
            v-for="(item, index) in store.state.childList"
            :key="index"
        >
          <p class="child__data data">{{ item.name }}, {{ item.age }} лет</p>
        </li>
      </ul>

    </div>
  </section>
</template>

<script setup>

import { useStore } from 'vuex';

const store = useStore();

</script>
