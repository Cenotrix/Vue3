import firebase from "./firebase"
import "firebase/auth"

// firebase.auth().onAuthStateChanged( user => {
//     if ( user ) {
//         var displayName = user.displayName;
//         var email = user.email;
//         var emailVerified = user.emailVerified;
//         var photoURL = user.photoURL;
//         var uid = user.uid;
//         var phoneNumber = user.phoneNumber;
//         var providerData = user.providerData;
//         user.getIdToken()
//             .then( () => {
//                 console.log(
//                     JSON.stringify({
//                         displayName: displayName,
//                         email: email,
//                         emailVerified: emailVerified,
//                         phoneNumber: phoneNumber,
//                         photoURL: photoURL,
//                         uid: uid,
//                         providerData: providerData
//                     }, null, '  ')
//                 );
//             });
//         this.user = user
//         this.loggedIn = true
//         this.rendered = true
//     } else {
//         return 
//     }
// }, function(error) {
//     console.log(error);
// });

export const auth = firebase.auth()