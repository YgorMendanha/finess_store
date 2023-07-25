'use client'

import { ProductInterface } from '@/types/products'
import React from 'react'
import { Splide, SplideSlide, type Options } from '@splidejs/react-splide'
import { CardProduct } from '@/components/partials/cardProduct'

export const PromotionProducts = ({ products }: { products: ProductInterface[] }) => {
  const option: Options = {
    perPage: 3,
    gap: '1rem'
  }

  return (
    <div className="w-full mt-5 flex flex-col container">
      <h2 className="my-7 mx-auto text-4xl ">Promoções do dia</h2>
      <Splide options={option} aria-label="My Favorite Images">
        {products.map((product) => {
          return (
            <SplideSlide key={product.id}>
              <CardProduct product={product} />
            </SplideSlide>
          )
        })}
      </Splide>
    </div>
  )
}
