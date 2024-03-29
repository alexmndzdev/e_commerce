import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, Navbar, Cart, Checkout, Footer, Faq } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import makeStyles from '@mui/styles/makeStyles'
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles'
const theme = createTheme()

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    //maxHeight: 'calc(100vh - 200px)', 
		minHeight: '100vh',
    overflowY: 'auto'
  },
}))

const App = () => {
				const [products, setProducts] = useState([])
				const [cart, setCart] = useState([])

				const fetchProducts = async () => {
					const { data } = await commerce.products.list()
					setProducts(data)
				}

				const fetchCart = async () => {
					setCart(await commerce.cart.retrieve())
				}

				const handleAddToCart = async (productId, qty) => {
					const { cart } = await commerce.cart.add(productId, qty)
					setCart(cart)
				}

				const handleUpdateCartQty = async (productId, quantity) => {
					const { cart } = await commerce.cart.update(productId, { quantity })
					setCart(cart)
				}

				const handleRemoveFromCart = async (productId) => {
					const { cart } = await commerce.cart.remove(productId)
					setCart(cart)
				}

				const handleEmptyCart = async () => {
					const { cart } = await commerce.cart.empty()
					setCart(cart)
				}

				const cartHandler = {
					add: handleAddToCart,
					update: handleUpdateCartQty,
					remove: handleRemoveFromCart,
					empty: handleEmptyCart
				}

				useEffect(() => {
					fetchProducts()
					fetchCart()
				}, [])

				const classes = useStyles()

				return (
					<StyledEngineProvider injectFirst>
						<ThemeProvider theme={theme}>
							<Router>
								<div className={classes.root}>
									<Navbar totalItems={cart.total_items} />
									<Switch>
											<Route exact path='/'>
													<Products products={products} onAddToCart={cartHandler.add} />
											</Route>
											<Route exact path='/cart'>
													<Cart cart={cart} handler={cartHandler}/>
											</Route>
											<Route exact path='/checkout'>
													<Checkout cart={cart}/>
											</Route>
											<Route exact path='/faq'>
													<Faq/>
											</Route>
									</Switch>
									<Footer />
								</div>
							</Router>
						</ThemeProvider>
					</StyledEngineProvider>
			);
}

export default App
