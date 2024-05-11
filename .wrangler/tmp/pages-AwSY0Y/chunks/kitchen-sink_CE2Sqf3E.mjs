globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/kitchen-sink_D_vvRhpd.mjs').then(n => n.k);

export { page };
