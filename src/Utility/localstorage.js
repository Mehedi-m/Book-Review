

const getstoredBookdetails = () => {
    const storedBookdetails = localStorage.getItem('Read-Books');
    return storedBookdetails ? JSON.parse(storedBookdetails) : [];
};

const saveBookdetails = (id) => {
    const storedBookdetails = getstoredBookdetails();
    const storedWishlist = getStoredWishlist();
    const updatedWishlist = storedWishlist.filter(bookId => bookId !== id);
    localStorage.setItem('Wishlist-Books', JSON.stringify(updatedWishlist));

    if (!storedBookdetails.includes(id)) {
        storedBookdetails.push(id);
        localStorage.setItem('Read-Books', JSON.stringify(storedBookdetails));
    }
};

const getStoredWishlist = () => {
    const storedWishlist = localStorage.getItem('Wishlist-Books');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
};

const saveWishlistDetails = (id) => {
    const storedWishlist = getStoredWishlist();
    const storedBookdetails = getstoredBookdetails();

    if (!storedBookdetails.includes(id) && !storedWishlist.includes(id)) {
        storedWishlist.push(id);
        localStorage.setItem('Wishlist-Books', JSON.stringify(storedWishlist));
    }
};

export { getstoredBookdetails, saveBookdetails, saveWishlistDetails, getStoredWishlist };