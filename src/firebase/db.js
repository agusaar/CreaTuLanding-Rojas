import {getFirestore, collection, getDocs,
     query, where, doc, getDoc, addDoc } from 'firebase/firestore'
import {app} from './config'

const db = getFirestore(app)

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"))
    const products = []

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    });

    return products
}

export const getProductsByCat = async (category) => {

    const q = query(collection(db, "products"), where("category", "==", category))

    const products = []
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    })
    return products
}

export const getProductById = async (id) => {
    
    const docRef = doc(db, "products", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) 
        return docSnap.data()
    else
        console.log("No such document!");
    
}

export const createOrder = async (order) => {
    try{
        const docRef = await addDoc(collection(db, "orders"), order);
    }
    catch(e){
        console.log(e)
    }
}