var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.on('event', select());
  },

  select: function() {
    this.trigger('select', this);
  }

});
