import { getFirestore, collection, getDocs, addDoc, query } from "firebase/firestore";
import { db } from "../_utils/firebase"; 

const getItems = async (userId) => {
  try {
    const items = [];
    const userItemsRef = collection(db, 'users', userId, 'items');
    const q = query(userItemsRef);
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });

    return items;
  } catch (error) {
    console.error("Error fetching items: ", error);
    throw new Error("Failed to fetch items");
  }
};

const addItem = async (userId, item) => {
  try {
    const userItemsRef = collection(db, 'users', userId, 'items');
    const docRef = await addDoc(userItemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item: ", error);
    throw new Error("Failed to add item");
  }
};

export { getItems, addItem };
