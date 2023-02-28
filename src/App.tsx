import { ShopContextProvider } from '@/features/shop_context'
import { AppRoutes } from './routes'

export function App() {
  return (
    <ShopContextProvider>
      <AppRoutes />
    </ShopContextProvider>
  )
}
