import ReactDOM from "react-dom";
import { CursorExample } from "./CursorExample";
import firebase from "firebase";

import firebaseConfig from "./firebaseConfig";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

ReactDOM.render(<CursorExample />, document.getElementById("main"));
