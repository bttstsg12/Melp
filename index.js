const signIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      let token = result.credential.accessToken;
      let user = result.user;
      console.log(user)
      }).catch(function(error) {
        console.log(error)
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
      });
}