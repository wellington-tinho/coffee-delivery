import { create } from 'zustand'

interface FormData {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  estado: string
  payForm: string
}

interface ActionProps {
  addItem: (newData: FormData) => void
}

interface StoreProps {
  state: {
    data: FormData
  }
  actions: ActionProps
}

export const useDataForm = create<StoreProps>((set) => ({
  state: {
    data: {
      cep: '',
      rua: 'test',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      payForm: '',
    },
  },
  actions: {
    addItem: (newData) =>
      set((state) => ({
        state: {
          data: newData,
        },
      })),
  },
}))
