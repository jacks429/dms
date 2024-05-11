globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                    */
import { c as createAstro, b as createComponent, r as renderTemplate, d as renderComponent } from '../astro_DXw4Mw8K.mjs';
import { $ as $$LayoutStacked } from './404_Cl6UG7M2.mjs';
import { a as $$PricingPlan } from './kitchen-sink_D_vvRhpd.mjs';

const $$Astro = createAstro("http://localhost:2121");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PricingPlan", $$PricingPlan, {})} ` })}`;
}, "C:/Users/hyper/Documents/ArtermisShit/dms/src/pages/pages/pricing.astro", void 0);

const $$file = "C:/Users/hyper/Documents/ArtermisShit/dms/src/pages/pages/pricing.astro";
const $$url = "/pages/pricing";

export { $$Pricing as default, $$file as file, $$url as url };
