globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/sidebar_Bmj6-6o3.mjs').then(n => n.a);

export { page };
