import axios from "axios";
import api from "@/api/api"

export default {
  state: {
    selectedStore: localStorage.getItem('store') || null,
    menus: [],
    breads: [
      {
        ingredient_id: 1,
        name: '허니오트',
        img_url: 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      },
      {
        ingredient_id: 2,
        name: '하티',
        img_url: 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      },
      {
        ingredient_id: 3,
        name: '위트',
        img_url: 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      },
      {
        ingredient_id: 4,
        name: '파마산 오레가노',
        img_url: 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      },
      {
        ingredient_id: 5,
        name: '화이트',
        img_url: 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      },
      {
        ingredient_id: 6,
        name: '플렛 브래드',
        img_url: 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      },
    ],
    cheese: [
      {
        ingredient_id: 7,
        name: '아메리칸 치즈',
        img_url: 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      },
      {
        ingredient_id: 8,
        name: '슈레드 치즈',
        img_url: 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      },
      {
        ingredient_id: 9,
        name: '모짜렐라 치즈',
        img_url: 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      }
    ],
    sauce: [
      {
        ingredient_id: 9,
        name: '렌치',
        img_url: 'https://www.subway.co.kr/upload/menu/img_toppping_02.png',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      },
      {
        ingredient_id: 9,
        name: '후추',
        img_url: 'https://www.subway.co.kr/upload/menu/img_toppping_02.png',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      },
      {
        ingredient_id: 9,
        name: '올리브오일',
        img_url: 'https://www.subway.co.kr/upload/menu/img_toppping_02.png',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      },
    ],
    more: [
      {
        ingredient_id: 9,
        name: '에그마요',
        img_url: 'https://www.subway.co.kr/upload/menu/img_toppping_02.png',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 1800,
        allergies: ''
      },
      {
        ingredient_id: 9,
        name: '베이컨',
        img_url: 'https://www.subway.co.kr/upload/menu/img_toppping_02.png',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 1800,
        allergies: ''
      },
      {
        ingredient_id: 9,
        name: '아보카도',
        img_url: 'https://www.subway.co.kr/upload/menu/img_toppping_02.png',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 1800,
        allergies: ''
      },
      {
        ingredient_id: 9,
        name: '오믈렛',
        img_url: 'https://www.subway.co.kr/upload/menu/img_toppping_02.png',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 1800,
        allergies: ''
      },
      {
        ingredient_id: 9,
        name: '페퍼로니',
        img_url: 'https://www.subway.co.kr/upload/menu/img_toppping_02.png',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 1800,
        allergies: ''
      },
    ],
    veges: [
      {
        ingredient_id: 9,
        name: '양상추',
        img_url: 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      },
      {
        ingredient_id: 9,
        name: '양파',
        img_url: 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      }
    ],
    moreMeats:[
      {
        ingredient_id: 9,
        name: 'k-바베큐',
        img_url: 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      },
      {
        ingredient_id: 9,
        name: '스테이크치즈',
        img_url: 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      },
      {
        ingredient_id: 9,
        name: '로티세리',
        img_url: 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
        kcal: 100,
        protein: 10,
        fat: 10,
        price: 0,
        allergies: ''
      }
    ],
    selectedMoreMeat: JSON.parse(localStorage.getItem('moremeat')) || null,
    selectedMenu: JSON.parse(localStorage.getItem('menu')) || null,
    selectedSize: JSON.parse(localStorage.getItem('size')) || null,
    selectedBread: JSON.parse(localStorage.getItem('bread')) || null,
    selectedCheese: JSON.parse(localStorage.getItem('cheese')) || null,
    selectedSauce: JSON.parse(localStorage.getItem('sauce')) || [],
    selectedMore: JSON.parse(localStorage.getItem('more')) || [],
    selectedVege: JSON.parse(localStorage.getItem('vege')) || [],

  },
  getters: {
    selectedStore: (state) => state.selectedStore,
    
    menus : (state) => state.menus,
    sauce : (state) => state.sauce,
    breads : (state) => state.breads,
    cheese : (state) => state.cheese,
    more : (state) => state.more,
    veges : (state) => state.veges,
    moreMeats : (state) => state.moreMeats,

    selectedMenu: (state) => state.selectedMenu,

    selectedSize: (state) => state.selectedSize,

    selectedBread: (state) => state.selectedBread,

    selectedCheese: (state) => state.selectedCheese,

    selectedSauce: (state) => state.selectedSauce,

    selectedMore: (state) => state.selectedMore,

    selectedVege: (state) => state.selectedVege,

    selectedMoreMeat: (state) => state.selectedMoreMeat,

  },
  mutations: {
    SET_SELECTEDSTORE: (state, value) => (state.selectedStore = value),

    SET_MENUS: (state, value) => (state.menus = value),

    SET_SELECTEDSIZE : (state, value) => state.selectedSize = value,

    SET_SELECTEDBREAD: (state, value) => state.selectedBread = value,

    SET_SELECTEDCHEESE: (state, value) => state.selectedCheese = value,

    
    SET_SELECTEDSAUCE: (state, value) => {
      state.selectedSauce.push(value)
      localStorage.setItem('sauce', JSON.stringify(state.selectedSauce))
    },

    REMOVE_SELECTEDSAUCE: (state, value) => {
      state.selectedSauce = state.selectedSauce.filter(sauce => 
         sauce !== value 
      )
      localStorage.setItem('sauce', JSON.stringify(state.selectedSauce))
    },
    
    SET_SELECTEDMORE: (state, value) => {
      state.selectedMore.push(value)
      localStorage.setItem('more', JSON.stringify(state.selectedMore))
    },

    REMOVE_SELECTEDMORE: (state, value) => {
      state.selectedMore = state.selectedMore.filter(more => 
         more !== value 
      )
      localStorage.setItem('more', JSON.stringify(state.selectedMore))
    },
    
    SET_SELECTEDVEGE: (state, value) => {
      state.selectedVege.push(value)
      localStorage.setItem('vege', JSON.stringify(state.selectedVege))
    },
    
    REMOVE_SELECTEDVEGE: (state, value) => {
      state.selectedVege = state.selectedVege.filter(vege => 
         vege !== value 
      )
      localStorage.setItem('vege', JSON.stringify(state.selectedVege))
    },

    COMBINE_SELECTEDMORE: (state, value) => state.selectedMore = state.selectedMore + value,

    SET_SELECTEDMOREMEAT: (state, value) => state.selectedMoreMeat = value,
    
    SET_SELECTEDMENU: (state, value) => (state.selectedMenu = value),

    
  },
  actions: {
    fetchMenus ({commit}) {
      console.log(api.order.order.menu)
      
      axios({
        method: 'get',
        url: api.order.order.menu
      }).then(res => {
        console.log(res)
        commit('SET_MENUS', res.data.data)
      }).catch(err => {
        console.error(err)
      })
    },

    selectStore({ commit }, value) {
      commit("SET_SELECTEDSTORE", value);
      localStorage.setItem('store', JSON.stringify(value))
    },

    selectMenu({ commit }, value) {
      commit("SET_SELECTEDMENU", value);
      localStorage.setItem('menu', JSON.stringify(value))
    },

    selectSize({ commit }, value) {
      commit('SET_SELECTEDSIZE', value)
      localStorage.setItem('size', JSON.stringify(value))
    },

    selectBread({ commit }, value) {
      commit('SET_SELECTEDBREAD', value)
      localStorage.setItem('bread', JSON.stringify(value))
    },

    selectCheese({ commit }, value) {
      commit('SET_SELECTEDCHEESE', value)
      localStorage.setItem('cheese', JSON.stringify(value))
    },

    selectVege({ commit }, value) {
      commit('SET_SELECTEDVEGE', value)
      
    },

    removeVege({ commit }, value) {
      commit('REMOVE_SELECTEDVEGE', value)
    },

    selectMore({ commit }, value) {
      commit('SET_SELECTEDMORE', value)
      
    },

    removeMore({ commit }, value) {
      commit('REMOVE_SELECTEDMORE', value)
    },

    selectMoreMeat({ commit }, value) {
      commit('SET_SELECTEDMOREMEAT', value)
      localStorage.setItem('moremeat', JSON.stringify(value))
    },

    selectSauce({ commit }, value) {
      commit('SET_SELECTEDSAUCE', value)
    },

    removeSauce({ commit }, value) {
      commit('REMOVE_SELECTEDSAUCE', value)
    },

    
  },
};
