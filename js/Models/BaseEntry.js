var BaseEntry = Backbone.Model.extend({

  defaults: function() {
    return {
      name: "Test",
      age: 10
    };
  },

  initialize: function() {
    if (!this.get("name")) {
      this.set({"name":this.defaults.name});
    }
    if (!this.get("age")) {
      this.set({"age":this.defaults.age});
    }
  },

  clear: function() {
    this.destroy();
  }
})

module.exports = BaseEntry;
