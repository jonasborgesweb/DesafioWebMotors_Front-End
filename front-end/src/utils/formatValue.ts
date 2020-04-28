const formatValue = (value: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(clearValue(value));

const clearValue = (value: number): number => +value.toString().replace(',', '.')

export default formatValue;
