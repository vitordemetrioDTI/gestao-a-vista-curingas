const parseCrafter = array => {
  let obj = {};
  const crafter = array.map(crafter => {
    if (crafter.association) {
      obj = {
        tribo: crafter.tribe,
        nome: crafter.name,
        email: crafter.email,
        lider: crafter.association.leader,
        atrasado: crafter.association.isLate,
        data: new Date(crafter.association.lastMeeting)
      };
    } else {
      obj = {
        tribo: crafter.tribe,
        nome: crafter.name,
        email: crafter.email,
        lider: null,
        atrasado: null,
        data: null
      };
    }
    return obj;
  });
  return crafter;
};

export { parseCrafter };
