// `.component()` takes a 'name' argument (for component's name)
// and an `{<options>}` argument 
Vue.component('click-counter', {
  // do not mount components to an element in the markup to maintain re-usability
  template: '#click-counter-template',
  //in component (as opposed to regular Vue instance)
  // data must be function that returns an Object
  data: function() {
    return {
      count: 0
    }
  }
})

new Vue({
  el: '#app'
})