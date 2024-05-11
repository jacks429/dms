globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/dashboard_CBediG1E.mjs').then(n => n.d);

export { page };
