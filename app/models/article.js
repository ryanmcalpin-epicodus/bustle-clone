import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  image: DS.attr(),
  publicationDate: DS.attr(),
  lede: DS.attr(),
  content: DS.attr()
});
