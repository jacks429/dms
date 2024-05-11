globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/forgot-password_CqbhrOMx.mjs').then(n => n.f);

export { page };
