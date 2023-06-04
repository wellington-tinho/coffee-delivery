export function convertCurrencyBRL(props: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(props)
    .replace('R$', '')
}
