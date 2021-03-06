import { CursorDataType, Store } from "./types";
import firebase from "firebase";

export class Firestore<T> implements Store<T> {
  tableName: string;
  constructor(tableName: string) {
    this.tableName = tableName;
  }
  getDatabase = (uid: number) =>
    firebase.database().ref(`/cursors-${this.tableName}/${uid}`);
  updateContext = (uid: number, context: T) => {
    this.getDatabase(uid).update({ context });
  };
  updateCoordinates = (uid: number, x: number, y: number) => {
    this.getDatabase(uid).set({ uid, x, y });
  };
  removeCursor = (uid: number) => {
    this.getDatabase(uid).remove();
  };
  stopUpdates = () => {
    firebase.database().ref(`/curors-${this.tableName}`).off("value");
  };
  onUpdates = (updateCallback: (cursors: CursorDataType<T>[]) => void) => {
    firebase
      .database()
      .ref(`/cursors-${this.tableName}`)
      .on("value", (snapshot) => {
        const val = snapshot.val();
        if (val) {
          updateCallback(Object.values(val) as CursorDataType<T>[]);
        }
      });
  };
}
