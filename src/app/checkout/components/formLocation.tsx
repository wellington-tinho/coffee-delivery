import Map from '@/../public/assets/icons/Map'
import Box from '../layout/box'
import { InputField } from './inputField'
import { useFormContext } from 'react-hook-form'
import { useCallback, useEffect } from 'react'
import axios from 'axios'

export function FormLocation() {
  const { register, watch, reset } = useFormContext()
  const cep = watch('cep', '00000000')

  const handleSearchCep = useCallback(async () => {
    if (cep.replace('-', '').length !== 8) return
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    const data = response.data
    if (data.erro) {
      return
    }
    reset({
      rua: data.logradouro,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf,
    })
  }, [cep])

  useEffect(() => {
    handleSearchCep()
  }, [handleSearchCep])

  return (
    <Box>
      <div className="flex gap-3 items-start ">
        <Map className="w-6 h-6 text-brand-yellow-dark mt-[2px]" />
        <div className="">
          <p className="text-base-subtitle font-bold text-base ">
            Endereço de Entrega
          </p>
          <span className="text-base-text font-normal text-sm">
            Informe o endereço onde deseja receber seu pedido
          </span>
        </div>
      </div>

      <form className="flex flex-col gap-4 mt-5">
        <InputField
          label="CEP"
          type="text"
          id="cep"
          placeholder="CEP"
          className="max-w-xs"
          required
          {...register('cep', { required: true, maxLength: 8, minLength: 8 })}
          name="cep"
        />
        <InputField
          label="Rua"
          type="text"
          id="rua"
          placeholder="Rua"
          {...register('rua', { required: true })}
          name="rua"
        />
        <div className="flex gap-3">
          <InputField
            label="Número"
            type="text"
            id="numero"
            placeholder="Número"
            className="max-w-xs"
            {...register('numero', { required: true })}
            name="numero"
          />
          <InputField
            label="Complemento"
            type="text"
            id="complemento"
            placeholder="Complemento"
            {...register('complemento')}
            name="complemento"
          />
        </div>
        <div className="flex gap-3">
          <InputField
            label="Bairro"
            type="text"
            id="bairro"
            placeholder="Bairro"
            className="max-w-xs"
            {...register('bairro', { required: true })}
            name="bairro"
          />
          <InputField
            label="Cidade"
            type="text"
            id="cidade"
            placeholder="Cidade"
            {...register('cidade', { required: true })}
            name="cidade"
          />
          <InputField
            label="Estado"
            type="text"
            id="estado"
            placeholder="UF"
            className="max-w-[60px]"
            {...register('estado', { required: true })}
            name="estado"
          />
        </div>
      </form>
    </Box>
  )
}
