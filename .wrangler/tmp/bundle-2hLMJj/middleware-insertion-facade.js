				import worker, * as OTHER_EXPORTS from "C:\\Users\\hyper\\Documents\\ArtermisShit\\dms\\.wrangler\\tmp\\pages-AwSY0Y\\ee8ibo8gd0m.js";
				import * as __MIDDLEWARE_0__ from "C:\\Users\\hyper\\Documents\\ArtermisShit\\dms\\node_modules\\wrangler\\templates\\middleware\\middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "C:\\Users\\hyper\\Documents\\ArtermisShit\\dms\\node_modules\\wrangler\\templates\\middleware\\middleware-miniflare3-json-error.ts";
				
				worker.middleware = [
					__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
					...(worker.middleware ?? []),
				].filter(Boolean);
				
				export * from "C:\\Users\\hyper\\Documents\\ArtermisShit\\dms\\.wrangler\\tmp\\pages-AwSY0Y\\ee8ibo8gd0m.js";
				export default worker;