globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                    */
import { c as createAstro, b as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro_DinsJ35h.mjs';
import { $ as $$LayoutStacked } from './404_Ctd3fLXL.mjs';
import { f as $$FormSignUp } from './kitchen-sink_CvPCr3s5.mjs';

const $$Astro = createAstro("http://localhost:2121");
const $$SignUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignUp;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen align-middle flex pb-[12vh]"> ${renderComponent($$result2, "FormSignUp", $$FormSignUp, {})} </div> ` })}`;
}, "C:/Users/hyper/Documents/ArtermisShit/dms/src/pages/authentication/sign-up.astro", void 0);

const $$file = "C:/Users/hyper/Documents/ArtermisShit/dms/src/pages/authentication/sign-up.astro";
const $$url = "/authentication/sign-up";

export { $$SignUp as default, $$file as file, $$url as url };
