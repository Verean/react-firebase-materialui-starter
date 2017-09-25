## ReactJS + Firebase + Material-UI | Authentication Starter

***Created by Verean***

### [Demo](https://verean.github.io/authdemo/) ###

Basic email authentication using [create-react-app](https://github.com/facebookincubator/create-react-app)

* ReactJS: 15.6.1
* Firebase: 4.3.1
* Material-UI: 1.0.0-beta.10
* React Router Dom: 4.2.2

Built in logic for error message handling for all forms (login, sign up, forgot password)

---

### Previews

![Preview Images](https://i.imgur.com/kixtz22.png)

---

### Instructions:



**Firebase**

Add Firebase configuration API details


```javascript
firebase.js

// Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
```
[Instructions on how to retreive API key located in Firebase documentation](https://firebase.google.com/docs/storage/web/start)

> Note: Be sure to include /src/firebase.js in your .gitignore file to prevent your API key being public

Add a secondary page e.g. home or a dashboard to allow for redirection after login or authentication 

```javascript
/components/login.js

if(this.state.authed){
	return <Redirect to="/dashboard"/>
}
```
[More information on React Router ](https://reacttraining.com/react-router/web/guides/philosophy)

---

**Material-UI**

A global theme is set, you can change values here to alter entire application or have it component based

```javascript
index.js

const globalTheme = createMuiTheme({
	palette: {
        type: 'dark',
        primary: grey,
        error: deepOrange
	},
});
```
[More information on Material-UI themeing ](https://material-ui-1dab0.firebaseapp.com/customization/themes/)

> Note: The application is currently using the Material-UI Beta Channel v.1.0.0

---

### Installation



Clone or download, then issue command below in package directory with no arguments

 	npm install
    
