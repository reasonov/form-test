<template>
  <section class="home-content container">

    <h3 class="parent__title title">Персональные данные</h3>

    <div class="parent__input-block input-block">
      <h4 class="input__name">Имя</h4>
      <input class="input__area" type="text" v-model="mainData.name">
    </div>

    <div class="input-block">
      <h4 class="input__name">Возраст</h4>
      <input class="input__area" type="text" v-model="mainData.age">
    </div>

    <div class="child-block">
      <div class="child__header">
        <h3 class="main__title title">Дети (макс. 5)</h3>
        <button class="child__add" @click="addChild" v-show="!limitChild">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.13332 7.85555C1.50125 7.85555 0.988866 8.36794 0.988867 9C0.988867 9.63206 1.50126 10.1445 2.13332 10.1445L7.85544 10.1445L7.85545 15.8668C7.85545 16.4989 8.36784 17.0113 8.9999 17.0113C9.63196 17.0113 10.1444 16.4989 10.1444 15.8668L10.1443 10.1445L15.8667 10.1445C16.4988 10.1445 17.0112 9.63207 17.0112 9.00001C17.0112 8.36795 16.4988 7.85556 15.8667 7.85556L10.1443 7.85556L10.1443 2.13338C10.1443 1.50132 9.63195 0.988927 8.99989 0.988927C8.36783 0.988927 7.85544 1.50131 7.85544 2.13338L7.85544 7.85555L2.13332 7.85555Z" fill="#01A7FD"/>
          </svg>
          <p>Добавить ребенка</p>
        </button>
      </div>

      <ul class="child__list">
        <li class="child__item" v-for="(item, index) in childList" :key="index">
          <div class="input-block child__input-block">
            <h4 class="input__name">Имя</h4>
            <input class="input__area" type="text" v-model="item.name">
          </div>
          <div class="input-block child__input-block">
            <h4 class="input__name">Возраст</h4>
            <input class="input__area" type="text" v-model="item.age">
          </div>
          <button class="child__delete" @click="deleteChild(index)">Удалить</button>
        </li>
      </ul>

      <button class="save-button" @click="saveData">Сохранить</button>
    </div>

  </section>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from 'vue';
import { useStore } from 'vuex'

const store = useStore();

const childList = reactive([]);

const mainData = reactive({
  name: '',
  age: ''
});

const limitChild = ref(false)

class Child {
  constructor() {
    this.name = '';
    this.age = '';
  }
}

function addChild() {
  childList.push(new Child);
}

function deleteChild(index) {
  childList.splice(index, 1);
}

function saveData() {
  store.commit('addMainData', mainData);
  store.commit('addChild', childList);
}

watch(childList, () => {
  if(childList.length === 5) {
    limitChild.value = true;
  } else {
    limitChild.value = false;
  }
})

onMounted(() => {
  mainData.name = store.state.mainData.name;
  mainData.age = store.state.mainData.age;

  store.state.childList.forEach((item) => {
    childList.push(item);
  })
})

</script>

<style scoped>

</style>