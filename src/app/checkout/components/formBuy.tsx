'use client'

import CurrencyDollar from '@/../public/assets/icons/CurrencyDollar'
import Box from '../layout/box'
import Bank from '@/../public/assets/icons/Bank'
import CreditCard from '@/../public/assets/icons/CreditCard'
import Money from '@/../public/assets/icons/Money'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputField } from './inputField'

export function FormBuy() {
  const { register } = useFormContext()
  const [payForm, setPayForm] = useState('credit-card')

  function handleChangePayForm(type: string) {
    setPayForm(type)
  }

  return (
    <Box>
      <div className="flex gap-3 items-start ">
        <CurrencyDollar className="w-6 h-6 text-brand-purple-dark mt-[2px]" />
        <div>
          <p className="text-base-subtitle font-bold text-base ">Pagemento</p>
          <span className="text-base-text font-normal text-sm">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <InputField
          label={'debit-card'}
          id={'debit-card'}
          placeholder={''}
          type="radio"
          value="debit-card"
          {...register('payForm')}
          className="hidden"
        />
        <label
          className={` ${
            payForm === 'debit-card'
              ? 'border border-brand-purple bg-brand-purple-light'
              : 'border'
          }
          flex gap-3 items-center justify-center border  bg-base-button py-4 px-5 rounded-lg cursor-pointer`}
          onClick={() => handleChangePayForm('debit-card')}
          htmlFor="debit-card"
        >
          <Bank color="#8047F8" />
          <span className="text-base-text font-normal text-sm uppercase">
            cartão de débito
          </span>
        </label>
        <InputField
          label={'credit-card'}
          id={'credit-card'}
          placeholder={''}
          type="radio"
          value="credit-card"
          {...register('payForm')}
          className="hidden"
        />
        <label
          className={` ${
            payForm === 'credit-card'
              ? 'border border-brand-purple bg-brand-purple-light'
              : 'border'
          }
          flex gap-3 items-center justify-center border  bg-base-button py-4 px-5 rounded-lg cursor-pointer`}
          onClick={() => handleChangePayForm('credit-card')}
        >
          <CreditCard color="#8047F8" />
          <span className="text-base-text font-normal text-sm uppercase">
            cartão de crédito
          </span>
        </label>
        <InputField
          label={'money'}
          id={'money'}
          placeholder={''}
          type="radio"
          value="money"
          {...register('payForm')}
          className="hidden"
        />
        <label
          className={` ${
            payForm === 'money'
              ? 'border border-brand-purple bg-brand-purple-light'
              : 'border'
          }
          flex gap-3 items-center justify-center border bg-base-button py-4 px-5 rounded-lg cursor-pointer`}
          onClick={() => handleChangePayForm('money')}
        >
          <Money color="#8047F8" />
          <span className="text-base-text font-normal text-sm  uppercase">
            dinheiro
          </span>
        </label>
      </div>
    </Box>
  )
}
