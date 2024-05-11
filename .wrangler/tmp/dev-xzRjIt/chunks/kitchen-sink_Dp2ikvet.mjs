globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/kitchen-sink_CvPCr3s5.mjs').then(n => n.k);

export { page };
