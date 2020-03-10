const parseCrafter = CraftersAPI => {
  if (CraftersAPI) {
    const crafter = CraftersAPI.map(crafter => {
      if (crafter.association) {
        return {
          tribo: crafter.tribe,
          nome: crafter.name,
          email: crafter.email,
          lider: crafter.association.leader,
          atrasado: crafter.association.isLate,
          data: new Date(crafter.association.lastMeeting)
        };
      } else {
        return {
          tribo: crafter.tribe,
          nome: crafter.name,
          email: crafter.email,
          lider: null,
          atrasado: null,
          data: null
        };
      }
    });
    return crafter;
  } else {
    return null;
  }
};

export { parseCrafter };
