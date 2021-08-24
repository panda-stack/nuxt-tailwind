import axios from "axios";

export const state = () => ({
  products: [],
  categories: [],
  filterData: [],
  totalPage: 0,
  currentPage: 0
});

const getters = {
  getProducts: state => state.filterData,
  getCategories: state => state.categories,
  getTotalPage: state => state.totalPage,
  getCurrentPage: state => state.currentPage
};

const mutations = {
  setData(state, payload) {
    state.products = payload.data;
    state.filterData = payload.data;
    const uniqueCategories = [];
    payload.data.forEach(product => {
      if (!uniqueCategories.includes(product.catname)) {
        uniqueCategories.push(product.catname);
      }
    });
    state.categories = uniqueCategories;
    state.currentPage = payload.current_page;
    state.totalPage = payload.last_page;
  },
  setProducts(state, payload) {
    if (payload === "") {
      state.filterData = state.products;
    } else {
      const temp = state.products.filter(
        product => product.catname === payload
      );
      state.filterData = temp;
    }
  }
};

const actions = {
  async fetchData(state, id) {
    const res = await axios.get(
      `https://trayvonnorthern.com/Edgewood-API/public/api/products?page=${id}`
    );
    state.commit("setData", res.data);
  },
  async filterData(state, e) {
    const category = e.target.options[
      e.target.options.selectedIndex
    ].innerText.trim();
    state.commit("setProducts", category);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
