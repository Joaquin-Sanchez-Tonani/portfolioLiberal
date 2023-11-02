import {create} from 'zustand';

const useStore = create((set) => ({
  language: 'es',
  setLanguage: (value) => set({ language: value }),

  myElementIsVisible2: false,
  setMyElementIsVisible2: (value) => set({ myElementIsVisible2: value }),

  myElementIsVisible: false,
  setMyElementIsVisible: (value) => set({ myElementIsVisible: value }),

  myElementIsVisible3: false,
  setMyElementIsVisible3: (value) => set({ myElementIsVisible3: value })
}));

export default useStore;