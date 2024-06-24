export function env(varname) {
  return process.env[varname] || '';
}
