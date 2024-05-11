globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                    */
import { c as createAstro, b as createComponent, r as renderTemplate, d as renderComponent } from '../astro_DinsJ35h.mjs';
import { $ as $$LayoutStacked } from './404_Ctd3fLXL.mjs';
import { $ as $$ErrorMaintenance } from './kitchen-sink_CvPCr3s5.mjs';

const $$Astro = createAstro("http://localhost:2121");
const $$Maintenance = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Maintenance;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ErrorMaintenance", $$ErrorMaintenance, {})} ` })}`;
}, "C:/Users/hyper/Documents/ArtermisShit/dms/src/pages/pages/maintenance.astro", void 0);

const $$file = "C:/Users/hyper/Documents/ArtermisShit/dms/src/pages/pages/maintenance.astro";
const $$url = "/pages/maintenance";

export { $$Maintenance as default, $$file as file, $$url as url };
