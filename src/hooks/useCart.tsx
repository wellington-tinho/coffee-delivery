import { Product } from '@/shared/types/Product'
import { create } from 'zustand'

interface ProductCart extends Product {
  amount: number
}

interface ActionProps {
  addItem: (item: ProductCart) => void
  removeItem: (itemID: string) => void
  updateAmount: (itemID: string, amount: number) => void
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
    updateAmount: (itemID, newAmount) =>
      set((state) => ({
        state: {
          items: state.state.items.map((item) =>
            item.id === itemID ? { ...item, amount: newAmount } : item,
          ),
        },
      })),
  },
}))
