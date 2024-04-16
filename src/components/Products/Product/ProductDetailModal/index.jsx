import React from 'react'
import { Modal, Box, IconButton, Button, Typography, Fade } from '@mui/material'
import { AddShoppingCart, Close } from '@mui/icons-material'
import useStyles from './styles'

const ProductDetailModal = ({ open, product, handleCloseModal, onAddToCart }) => {
  const classes = useStyles()

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      className={classes.modal}
      aria-labelledby="product-detail-modal-title"
      aria-describedby="product-detail-modal-description"
      closeAfterTransition
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(69, 89, 167, 0.4)',
          },
        },
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Button
            endIcon={<Close />}
            onClick={handleCloseModal}
            color="error"
            className={classes.closeButton}>
          </Button>
          <Typography variant="body1" id="product-detail-modal-description" gutterBottom>
            Nombre: {product.name}
          </Typography>
          <Typography variant='h5'>
            {product.price.formatted_with_symbol}
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant='body2'
            color='textSecondary'/>
          <Box display="flex" justifyContent="flex-end">
            <IconButton
              aria-label='Add to Cart'
              onClick={() => onAddToCart(product.id, 1)}
              size="large">
              <AddShoppingCart/>
            </IconButton>
          </Box>
        </div>
      </Fade>
    </Modal>
  )
}

export default ProductDetailModal
