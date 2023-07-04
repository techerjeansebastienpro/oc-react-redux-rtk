

export const productList = (state) => state?.list

export const totalOrder = (state) => productList(state)?.reduce((prv, cur) => cur.price + prv, 0)

export const voucherAvailable = (state) => productList(state)?.find(product => product.title === 'Super Crémeux')

export const quantiteProduitPerName = (name) => (state) => productList(state).filter(product => product.title === name).length