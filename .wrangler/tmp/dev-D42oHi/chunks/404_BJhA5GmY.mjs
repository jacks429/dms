globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/404_Cl6UG7M2.mjs').then(n => n._);

export { page };
