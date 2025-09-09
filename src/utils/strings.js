export const normalize = string => string.split(',').map(a => a.trim().toUpperCase());

export const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()