import { db } from '../firebase/firebase';

export const getRealTime = async (collection, action) => {
    db.collection(collection)
        .onSnapshot(() => action())
}

export const forceRealTime = async (collection, doc, object) => {
    await db.collection(collection).doc(doc).update(object)
}
//z0IviwnsHcHjS5CxfZsZ

