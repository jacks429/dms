globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/stacked_CJNHppJL.mjs').then(n => n.s);

export { page };
