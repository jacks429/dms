globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/sidebar_BXa2-gZc.mjs').then(n => n.a);

export { page };
