export const activeStatusColorHandler = (status) => {
  if (status) {
    return "text-[#00FF00]";
  } else if (!status || status !== undefined) {
    return "text-[#FF0000]";
  } else {
    return "text-[#CAAA6C]";
  }
};

export const activeStatusIconColorHandler = (status) => {
  if (status) {
    return "#00FF00";
  } else if (!status || status !== undefined) {
    return "#FF0000";
  } else {
    return "#CAAA6C";
  }
};

export const activeStatusTextHandler = (status) => {
  if (status) {
    return "ACTIVE";
  } else if (!status || status !== undefined) {
    return "INACTIVE";
  } else {
    return "NO INFO";
  }
};

export const activateStatusTextHandler = (status) => {
  if (status) {
    return "ACTIVATE";
  } else if (!status || status !== undefined) {
    return "INACTIVATE";
  } else {
    return "";
  }
};
