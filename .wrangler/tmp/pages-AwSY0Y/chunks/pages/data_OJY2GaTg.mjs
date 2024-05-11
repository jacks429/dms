globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                    */
import { c as createAstro, b as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro_DXw4Mw8K.mjs';
import { $ as $$LayoutSidebar } from './dashboard_CHHjwmXc.mjs';
/* empty css                         */

const $$Astro = createAstro("http://localhost:2121");
const $$Data = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Data;
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, { "class": "bg-slate-800 text-slate-100" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="playground p-16"> <h1 class="text-3xl ml-8 lg:text-4xl xl:text-6xl font-bold dark:text-slate-100">
🕹&nbsp;Playground — API data
</h1> <div class="mt-24 mb-8"> <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onclick="location.reload()">Refresh</button> </div> <div class="mb-16"> <a href="/api/products" target="_blank"> <h1 class="text-6xl font-bold mb-8 dark:text-slate-100">Products</h1> </a> <!-- <Code code={products} lang="json" /> --> </div> <div class="mb-16"> <a href="/api/users" target="_blank"> <h1 class="text-6xl font-bold mb-8 dark:text-slate-100">Users</h1> </a> <!-- <Code code={users} lang="json" /> --> </div> </div> ` })} `;
}, "C:/Users/hyper/Documents/ArtermisShit/dms/src/pages/playground/data.astro", void 0);

const $$file = "C:/Users/hyper/Documents/ArtermisShit/dms/src/pages/playground/data.astro";
const $$url = "/playground/data";

export { $$Data as default, $$file as file, $$url as url };
