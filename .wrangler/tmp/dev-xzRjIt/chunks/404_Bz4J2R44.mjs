globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/404_Ctd3fLXL.mjs').then(n => n._);

export { page };
