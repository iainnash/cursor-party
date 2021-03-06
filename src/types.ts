export interface Store<T> {
  updateCoordinates: (uid: number, x: number, y: number) => void;
  updateContext: (uid: number, context: T) => void;
  onUpdates: (updateCallback: (cursors: CursorDataType<T>[]) => void) => void;
  stopUpdates: () => void;
  removeCursor: (uid: number) => void;
}

export type useSharedCursorsType<T> = {
  showMyCursor?: boolean;
  getDefaultContext?: () => T;
  pageName: string;
};

export type CursorCoordinates = {
  x: number;
  y: number;
};

export type CursorDataType<T> = CursorCoordinates & {
  context?: T;
  uid: number;
};

export type CursorHookType<T> = {
  cursors: CursorDataType<T>[];
  setContext: (context: T) => void;
  uid: number;
};
