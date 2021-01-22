//Year difference
export function yearDifference(year) {
  return new Date().getFullYear() - year;
}

//Brand Price Increase
export function brandPrice(brand) {
  let increase;

  switch (brand) {
    case "European":
      increase = 1.3;
      break;

    case "American":
      increase = 1.15;
      break;

    case "Asian":
      increase = 1.05;
      break;

    default:
      break;
  }

  return increase;
}

//Calculate in base of insurance Plan

export function planPrice(plan) {
    return(plan === "basic" ? 1.2 : 1.6 )
}

// Uppercase

export function upper(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}