(() => {
var exports = {};
exports.id = 477;
exports.ids = [477];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 7766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9153);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'seo',
        {
        children: [
        '[seoId]',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2689)), "D:\\NextJs\\seo-tool-next\\app\\seo\\[seoId]\\page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1921)), "D:\\NextJs\\seo-tool-next\\app\\layout.tsx"],
'error': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9710)), "D:\\NextJs\\seo-tool-next\\app\\error.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["D:\\NextJs\\seo-tool-next\\app\\seo\\[seoId]\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/seo/[seoId]/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/seo/[seoId]/page",
        pathname: "/seo/[seoId]",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 6682:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6918))

/***/ }),

/***/ 6918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _seoId_page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left-circle.js
var arrow_left_circle = __webpack_require__(6135);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(4368);
;// CONCATENATED MODULE: ./components/result-header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const ResultHeader = ({ url })=>{
    const router = (0,navigation.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                onClick: ()=>router.back(),
                variant: "ghost",
                children: /*#__PURE__*/ jsx_runtime_.jsx(arrow_left_circle/* default */.Z, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex w-full items-center flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm text-gray-700 uppercase font-semibold",
                        children: "Everything You need to know"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: " text-md  font-bold md:text-4xl my-2",
                        children: [
                            "Results for ",
                            url
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const result_header = (ResultHeader);

// EXTERNAL MODULE: ./node_modules/react-circular-progressbar/dist/index.js
var dist = __webpack_require__(7628);
// EXTERNAL MODULE: ./node_modules/react-circular-progressbar/dist/styles.css
var styles = __webpack_require__(4230);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
;// CONCATENATED MODULE: ./components/providers/progress-provider.tsx

const ProgressProvider = ({ valueStart, valueEnd, children })=>{
    const [value, setValue] = react_default().useState(valueStart);
    react_default().useEffect(()=>{
        setValue(valueEnd);
    }, [
        valueEnd
    ]);
    return children(value);
};
/* harmony default export */ const progress_provider = (ProgressProvider);

;// CONCATENATED MODULE: ./components/result-progress.tsx




const ResultProgress = ({ data })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex  justify-center items-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col justify-center items-center gap-2",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(progress_provider, {
                    valueEnd: data.onpage_score,
                    valueStart: 0,
                    children: (value)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* CircularProgressbar */.Ip, {
                            value: value,
                            text: `${value}%`
                        })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Overall Score"
                })
            ]
        })
    });
};
/* harmony default export */ const result_progress = (ResultProgress);

;// CONCATENATED MODULE: ./hooks/useGetData.ts

function useGetData(url) {
    const [data, setData] = (0,react_.useState)(null);
    const [isLoading, setIsLoading] = (0,react_.useState)(false);
    const [error, setError] = (0,react_.useState)(null);
    (0,react_.useEffect)(()=>{
        const postData = async ()=>{
            setIsLoading(true);
            try {
                const headers = {
                    "Content-Type": "application/json"
                };
                const login = "aditya97y@gmail.com";
                const password = "9a16ba915cefe4f4";
                const authString = `Basic ${Buffer.from(`${login}:${password}`).toString("base64")}`;
                headers["Authorization"] = authString;
                const response = await fetch("https://api.dataforseo.com/v3/on_page/instant_pages", {
                    method: "POST",
                    headers,
                    body: JSON.stringify([
                        {
                            url: url,
                            enable_javascript: true,
                            check_spell: false
                        }
                    ])
                });
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setData(result);
                setError(null);
            } catch (error) {
                setError(error);
            } finally{
                setIsLoading(false);
            }
        };
        postData();
    }, [
        url
    ]);
    return {
        data,
        isLoading,
        error
    };
}

// EXTERNAL MODULE: ./node_modules/react-spinners/index.js
var react_spinners = __webpack_require__(2946);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(2857);
;// CONCATENATED MODULE: ./components/ui/card.tsx



const Card = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: (0,utils.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: (0,utils.cn)("flex flex-col space-y-1.5 p-6", className),
        ...props
    }));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("h3", {
        ref: ref,
        className: (0,utils.cn)("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
        ref: ref,
        className: (0,utils.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: (0,utils.cn)("p-6 pt-0", className),
        ...props
    }));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: (0,utils.cn)("flex items-center p-6 pt-0", className),
        ...props
    }));
CardFooter.displayName = "CardFooter";


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check-circle-2.js
var check_circle_2 = __webpack_require__(7252);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x-circle.js
var x_circle = __webpack_require__(1057);
;// CONCATENATED MODULE: ./components/seo-card.tsx




const SeoCard = ({ title, value })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Card, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardContent, {
            className: "flex flex-col items-center py-5",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-2xl",
                    children: value
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: title
                })
            ]
        })
    });
};
const SeoCheckCard = ({ title, value, description })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CardHeader, {
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardContent, {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: !value ? /*#__PURE__*/ jsx_runtime_.jsx(check_circle_2/* default */.Z, {
                            className: " text-green-500 w-10 h-10"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(x_circle/* default */.Z, {
                            className: " text-red-500 w-10 h-10"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-xs",
                        children: description
                    })
                ]
            })
        ]
    });
};
const InsightCard = ({ title, value })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
        className: "flex bg-slate-100 flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader, {
                className: "text-2xl ",
                children: [
                    value,
                    "ms"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CardContent, {
                className: "flex gap-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-sm",
                    children: title
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/seo-data.tsx


const SeoData = ({ data })=>{
    const { meta } = data;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid md:grid-cols-4 grid-cols-2 sm:grid-cols-3 pb-2 gap-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCard, {
                title: "External Links",
                value: meta.external_links_count
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCard, {
                title: "Internal Links",
                value: meta.internal_links_count
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCard, {
                title: "Scripts",
                value: meta.scripts_count
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCard, {
                title: "Plain Text Size",
                value: meta.content.plain_text_size
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCard, {
                title: "Plain Text Rate",
                value: meta.content.plain_text_rate?.toFixed(2)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCard, {
                title: "Plain Text Word Count",
                value: meta.content.plain_text_word_count
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCard, {
                title: "Automated Readability Index",
                value: meta.content.automated_readability_index?.toFixed(2)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCard, {
                title: "Coleman Liau Readability Index",
                value: meta.content.coleman_liau_readability_index?.toFixed(2)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCard, {
                title: "Dale Chall Readability Index",
                value: meta.content.dale_chall_readability_index?.toFixed(2)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCard, {
                title: "Flesch Kincaid Readability Index",
                value: meta.content.flesch_kincaid_readability_index?.toFixed(2)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCard, {
                title: "Smog Readability Index",
                value: meta.content.smog_readability_index?.toFixed(2)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCard, {
                title: "Description to Content Consistency",
                value: meta.content.description_to_content_consistency?.toFixed(2)
            })
        ]
    });
};
/* harmony default export */ const seo_data = (SeoData);

;// CONCATENATED MODULE: ./components/seo-checks.tsx


const SeoChecks = ({ data })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCheckCard, {
                title: "Duplicate Title",
                description: "Duplicate title tags are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.",
                value: data.checks.duplicate_title_tag
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCheckCard, {
                title: "Has Description",
                description: "The description tag is an HTML tag that is used to define the description of a webpage. This tag is displayed in the search results and is used by search engines to determine the topic of a page.",
                value: data.checks.no_description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCheckCard, {
                title: "Has Favicon",
                description: "Your page does have a favicon. This can postively impact your page load speed and user experience.",
                value: data.checks.no_favicon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCheckCard, {
                title: "Description",
                description: "The description tag is an HTML tag that is used to define the description of a webpage. This tag is displayed in the search results and is used by search engines to determine the topic of a page.",
                value: data.checks.low_readability_rate
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCheckCard, {
                title: "Title Too long",
                description: "Your page has a title that is too long. This can negatively impact your page load speed and user experience.",
                value: data.checks.title_too_long
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCheckCard, {
                title: "Has Render Blocking Resources",
                description: "Your page has render blocking resources. This can negatively impact your page load speed and user experience.",
                value: data.checks.has_render_blocking_resources
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCheckCard, {
                title: "Is 4xx Code",
                description: "Your page has a 4xx status code. This can negatively impact your page load speed and user experience.",
                value: data.checks.is_4xx_code
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCheckCard, {
                title: "Is 5xx Code",
                description: "Your page has a 4xx status code. This can negatively impact your page load speed and user experience.",
                value: data.checks.is_5xx_code
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SeoCheckCard, {
                title: "HTTPS to HTTP Links",
                description: "Your page has links to HTTP pages. This can negatively impact your page load speed and user experience.",
                value: data.checks.https_to_http_links
            })
        ]
    });
};
/* harmony default export */ const seo_checks = (SeoChecks);

;// CONCATENATED MODULE: ./components/speed-insights.tsx


const SpeedInsights = ({ data })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "mb-4 text-2xl font-bold",
                children: "Speed Insights"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid mb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(InsightCard, {
                        title: "Time to Secure Connection",
                        value: data.page_timing.time_to_secure_connection
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InsightCard, {
                        title: "Waiting Time",
                        value: data.page_timing.waiting_time
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InsightCard, {
                        title: "Download Time",
                        value: data.page_timing.download_time
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InsightCard, {
                        title: "Time to Interactive",
                        value: data.page_timing.time_to_interactive
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InsightCard, {
                        title: "DOM Complete",
                        value: data.page_timing.dom_complete
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InsightCard, {
                        title: "Largest Contentful Paint",
                        value: data.page_timing.largest_contentful_paint
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InsightCard, {
                        title: "Duration Time",
                        value: data.page_timing.duration_time
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const speed_insights = (SpeedInsights);

;// CONCATENATED MODULE: ./app/seo/[seoId]/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










const page = ({ params })=>{
    const decodedSeoId = decodeURIComponent(params.seoId);
    if (!params.seoId) {
        return (0,navigation.redirect)("/");
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = (0,navigation.useRouter)();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, isLoading, error } = useGetData(decodedSeoId);
    const tasks = data?.tasks;
    if (isLoading || !tasks || tasks.length === 0) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "h-[100vh] w-[100vw] flex justify-center items-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_spinners.HashLoader, {})
        });
    }
    if (tasks[0]?.status_code !== 20000) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "h-[100vh] w-[100vw] flex justify-center items-center",
            children: [
                "Something went wrong!",
                /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                    variant: "link",
                    onClick: ()=>router.back(),
                    children: "Try Again"
                })
            ]
        });
    }
    const { result: [{ items }] } = tasks?.[0] || {};
    const seoItem = items[0];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-full flex px-2  lg:px-40  py-20 md:py-24 gap-8 flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(result_header, {
                url: decodedSeoId
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(result_progress, {
                data: seoItem
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-between items-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                    className: "text-lg font-semibold",
                    children: [
                        "Title - ",
                        seoItem.meta.title
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(seo_data, {
                data: seoItem
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(seo_checks, {
                data: seoItem
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(speed_insights, {
                data: seoItem
            })
        ]
    });
};
/* harmony default export */ const _seoId_page = (page);


/***/ }),

/***/ 2689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\NextJs\seo-tool-next\app\seo\[seoId]\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,574,447,502], () => (__webpack_exec__(7766)));
module.exports = __webpack_exports__;

})();