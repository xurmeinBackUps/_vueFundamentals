let PlanPickerItemComponent = {
  // name 'plan' is a bad practice, merely for demo purposes
  template: '#plan-picker-item-template',
  // instating prop makes is accessible as though it were part of the `data` property
  props: {
    // using the array syntax limits control of props data && prevents data validation; object syntax preferred
    // at minimum, names of props are object-keys, with the props type (eg, Sting, Number, Boolean) as object-values
    // can also make each prop an (a) Object with (b) `type`, (c) `required`, (d) `default`, and (e) `validator` keys where:
    /*(a)*/ 
    name: { 
      /*  (b)  */ // <!!! see NOTES for further details !!!>
      type: String,
      /*  (c)  */
      required: true,
      /*  (d)  */ 
      default: 'Coffee Plan',
      /*  (e)  */
      validator: function(value) {
        // value must have length greater than 0, otherwise error in console when inspecting page
        return value.length > 0
      }
    },
  // (a)** the value for some particular prop's name is: `<some-particular-prop's-name>: {}`
  // (b)** the data type of the prop (eg, Sting, Number, Boolean, etc.)
  // (c) a Boolean value
  // (d) the default value of the prop; note that the default data will need to be of the appropriate `type` // <!!! see NOTES for further details !!!>
  // (e) a custom validation function, particularly helpful for testing/debugging 
  // **: minimally necesarry information to use object-syntax
    selectedPlan: {
      type: String
    }
  },
  computed: {
    isSelected() {
      return this.name == this.selectedPlan
    }
  },
  methods: {
    select() {
      this.$emit('select', this.name)
    }
  }
}

let PlanPickerComponent = {
  template: '#plan-picker-template',
  components: {
    'plan-picker-item': PlanPickerItemComponent
  },
  data() {
    return {
      plans: ['The Single', 'The Curious', 'The Addict', 'The Hacker', /* '' */], // <-- uncomment empty string to produce console error when prop does not pass validator function
      selectedPlan:  null
    } 
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'plan-picker': PlanPickerComponent
  }
}) 

/* NOTES */
// re: /*  (b)  */ --> multiple data types can be passed in an array; eg `type: [Sting, Boolean]`
// re: /*  (b)  */ --> `null` and `undefined` will pass all type validation
// re: `default` --> if the prop's data type is either an Array or an Object, the default value must be a function that returns the default data
  // ex. `default: function() { return { message: 'Hello!' } }`
//