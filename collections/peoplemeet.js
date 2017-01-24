/**
 * Created by arifen on 1/18/17.
 */
export const PeopleProduct = new Mongo.Collection('peopleproduct');
 PeopleProductSchema = new SimpleSchema({
    peopleid: {
        type:String,
        label: "User Id"
    },
     productdes: {
         type:String,
         label: "Product description"
     },
     userType: {
         type:String,
         label: "User Type"
     },
     createdAt: {
         type: Date,
         label: "Created At",
     }
 });

PeopleProduct.attachSchema(PeopleProductSchema);
