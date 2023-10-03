export async function fetchProducts () {
  const res = await fetch('https://dummyjson.com/products')
  if (!res.ok) throw new Error('Error getting the data')
  const resJSON = await res.json()
  const mockedData = resJSON.products?.map(({ id, title, price, thumbnail, description, category }) => ({
    id,
    title,
    price,
    thumbnail,
    description,
    category
  }))

  return mockedData
}

export async function fetchProductsCategories () {
  const res = await fetch('https://dummyjson.com/products/categories')
  if (!res.ok) throw new Error('Error getting the data')
  const resJSON = await res.json()
  return resJSON
}
