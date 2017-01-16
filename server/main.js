import { Meteor } from 'meteor/meteor';
import Items from '../imports/api/Items';

Meteor.startup(() => {
  // code to run on server at startup
  Items.insert({
    itemOne: {
      text: 'money',
      value: 0
    },
    itemTwo: {
      text: 'cash',
      value: 0
    }
  });
});
