import HomePage from '@/components/views/home'
import ShuffleProducts from '@/utils/functions/ShuffleProducts'
import { PrismaClient } from '@prisma/client'
import { ProductsDataBase } from '../../prisma/seed'

const prisma = new PrismaClient()

async function getProducts() {
  const data = await prisma.product.findMany()
  return data
}

export default async function Home() {
  const product = process.env.NODE_ENV === 'development' ? ProductsDataBase : await getProducts()

  const promotionProduct = ShuffleProducts(product)

  return <HomePage data={product} promotionProduct={promotionProduct} />
}
