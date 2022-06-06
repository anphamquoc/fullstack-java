export function numberWithDots(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}

export function handleImageUrl(imageUrl) {
  return imageUrl.includes("https") ? imageUrl : `../../${imageUrl}`;
}
