import { createStore, action } from "easy-peasy";

const project = {};

const store = createStore({
  dialogs: [
    { id: 1, name: "About Me", open: false },
    { id: 2, name: "Expertise", open: false },
    { id: 3, name: "Hobbies", open: false },
    { id: 4, name: "Contact", open: false },
  ],
  setDialog: action((state, payload) => {
    state.dialogs.forEach((dialog) => {
      if (dialog.id === payload.id) {
        dialog.open = payload.open;
      }
    });
  }),
  project,
  setProject: action((state, payload) => {
    state.project = payload;
  }),
});

export default store;
