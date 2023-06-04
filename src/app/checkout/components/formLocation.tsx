import Map from '@/../public/assets/icons/Map'
import Box from '../layout/box'
import { InputField } from './inputField'

export function FormLocation() {
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
          name="cep"
          type="text"
          id="cep"
          placeholder="CEP"
        />
        <InputField
          label="Rua"
          name="rua"
          type="text"
          id="rua"
          placeholder="Rua"
        />
        <div className="grid grid-cols-2 gap-3">
          <InputField
            label="Número"
            name="numero"
            type="text"
            id="numero"
            placeholder="Número"
          />
          <InputField
            label="Complemento"
            name="complemento"
            type="text"
            id="complemento"
            placeholder="Complemento"
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <InputField
            label="Bairro"
            name="bairro"
            type="text"
            id="bairro"
            placeholder="Bairro"
          />
          <InputField
            label="Cidade"
            name="cidade"
            type="text"
            id="cidade"
            placeholder="Cidade"
          />
          <InputField
            label="Estado"
            name="estado"
            type="text"
            id="estado"
            placeholder="UF"
          />
        </div>
      </form>
    </Box>
  )
}
