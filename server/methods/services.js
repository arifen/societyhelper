/**
 * Created by arifen on 1/29/17.
 */
import { PeopleProduct } from '../../collections/peoplemeet';

fetchListByType = function (type) {
    return PeopleProduct.find({userType:type});
},
fetchListById = function (id) {
    return Meteor.users.find({_id:id});
};

