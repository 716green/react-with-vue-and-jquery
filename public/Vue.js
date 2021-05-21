// eslint-disable-next-line no-undef
Vue.createApp({
  data() {
    return {
      count: 0,
      items: ['one', 'two', 'three'],
    };
  },
  methods: {
    addGoal() {
      this.count++;
    },
  },
}).mount('#vue-root');
