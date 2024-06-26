import { proxy } from "valtio";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

// Valtio state proxy
const state = proxy({
  intro: true,
  color: "#EFBD48",
  current: null,
  items: {
    laces: "#fff",
    mesh: "#fff",
    caps: "#fff",
    inner: "#fff",
    sole: "#fff",
    stripes: "#fff",
    band: "#fff",
    patch: "#fff",
  },
});

const defaultColors = {
  laces: "#fff",
  mesh: "#fff",
  caps: "#fff",
  inner: "#fff",
  sole: "#fff",
  stripes: "#fff",
  band: "#fff",
  patch: "#fff",
};

// Fetch customization data from Firestore
export const fetchCustomization = async (userId) => {
  if (!userId) {
    return;
  }

  try {
    const docRef = doc(db, "customizations", userId);
    const docSnap = await getDoc(docRef);
    // console.log(docSnap.data().items);

    if (docSnap.exists()) {
      state.items = docSnap.data().items;
    } else {
      return;
    }
  } catch (error) {
    console.error("Failed to fetch customization:", error);
  }
};

// Save customization data to Firestore
export const saveCustomization = async (userId) => {
  try {
    const docRef = doc(db, "customizations", userId);
    await setDoc(docRef, { items: state.items }, { merge: true });
  } catch (error) {
    console.error("Failed to save customization:", error);
  }
};

export const resetColors = async (userId) => {
  state.items = { ...defaultColors };
  if (userId) {
    await saveCustomization(userId);
  }
};

export default state;
