import { Product } from '@/shared/types/Product'
import { create } from 'zustand'

interface ProductCart extends Product {
  amount: number
}

interface ActionProps {
  addItem: (item: ProductCart) => void
  removeItem: (itemID: string) => void
}

interface StoreProps {
  state: {
    items: ProductCart[]
  }
  actions: ActionProps
}

export const useCart = create<StoreProps>((set) => ({
  state: {
    items: [],
  },
  actions: {
    addItem: (item) =>
      set((state) => ({
        state: {
          items: [...state.state.items, item],
        },
      })),
    removeItem: (itemID) =>
      set((state) => ({
        state: {
          items: state.state.items.filter((item) => item.id !== itemID),
        },
      })),
  },
}))
