globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/dashboard_CHHjwmXc.mjs').then(n => n.d);

export { page };
