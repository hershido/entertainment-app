export function extractErrorCode(error: string): string {
   const parts = error.split('/');
   let code = parts[parts.length - 1];
   code = code.replace(/-/g, ' ');
   code = code.replace(/[()]/g, '');
   code = code.charAt(0).toUpperCase() + code.slice(1);
   return code;
}
