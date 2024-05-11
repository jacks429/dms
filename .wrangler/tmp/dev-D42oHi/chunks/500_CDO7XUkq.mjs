globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/500_DetV6piA.mjs').then(n => n._);

export { page };
