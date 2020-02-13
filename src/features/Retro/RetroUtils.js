const corStatus = (status, classe) => {
  switch (status) {
    case 'Pendente':
      return classe.Pendente;
    case 'Concluído':
      return classe.Concluido;
    case 'Em andamento':
      return classe.Andamento;
    case 'Cancelado':
      return classe.Cancelado;
    default:
      return classe.Cancelado;
  }
};


export { corStatus }
