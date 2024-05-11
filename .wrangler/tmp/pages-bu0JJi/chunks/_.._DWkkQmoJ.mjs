globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/__EaWLBGA3.mjs').then(n => n._);

export { page };
