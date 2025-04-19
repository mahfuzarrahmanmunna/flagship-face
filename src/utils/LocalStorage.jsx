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
    }
    else {
        favorites.push(phone)
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }


}

const removeFavorite = (id) => {
    const favorites = getFavorite()
    const remainingFavorite = favorites.filter(phone => phone.id !== id)
    localStorage.setItem('favorites', JSON.stringify(remainingFavorite))
}

export { addFavorite, getFavorite, removeFavorite }