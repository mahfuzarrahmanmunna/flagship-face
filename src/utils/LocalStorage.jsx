import toast from "react-hot-toast"

const getFavorite = () => {
    const favorites = localStorage.getItem('favorites')
    if (favorites) {
        return JSON.parse(favorites)
    }
    else {
        return []
    }
}


const addFavorite = phone => {
    const favorites = getFavorite()
    const isExist = favorites.find(p => p.id == phone.id)
    if (isExist) {
        console.log('phone already added');
        toast.error('Already Added')
    }
    else {
        favorites.push(phone)
        localStorage.setItem('favorites', JSON.stringify(favorites))
        toast.success('Phone added successfully.!')
    }
}

const removeFavorite = (id) => {
    const favorites = getFavorite()
    const remainingFavorite = favorites.filter(phone => phone.id !== id)
    localStorage.setItem('favorites', JSON.stringify(remainingFavorite))
    toast.remove('Remove successfully')
}


const getCart = () => {
    const favorites = localStorage.getItem('cart')
    if (favorites) {
        return JSON.parse(favorites)
    }
    else {
        return []
    }
}

const addCart = phone => {
    const cart = getCart()
    const isExist = cart.find(p => p.id == phone.id)
    if (isExist) {
        console.log('phone already added');
        toast.error('Already added')
    }
    else {
        cart.push(phone)
        localStorage.setItem('cart', JSON.stringify(cart))
        toast.success('Added to cart successfully')
    }
}

export { addFavorite, getFavorite, removeFavorite, getCart, addCart }
