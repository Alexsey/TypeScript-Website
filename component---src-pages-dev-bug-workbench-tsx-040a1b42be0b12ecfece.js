(self.webpackChunktypescriptlang_org=self.webpackChunktypescriptlang_org||[]).push([[618],{9796:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return O}});var n=i(6470),o=i(7162),a=i.n(o),r=i(2784),s=i.n(r),l=i(8316),c=i.n(l),p=i(7480),d=i(8447),y=i(6705),u=i(876),g=i(357),m=i(866),h="\nThe bug workbench uses <a href='https://www.npmjs.com/package/@typescript/twoslash'>Twoslash</a> to help you create accurate bug reports. \nTwoslash is a markup format for TypeScript files which lets you highlight code, handle-multiple files and\nshow the files the TypeScript compiler creates.\n".trim(),f="\nThe bug workbench lets you make reproductions of bugs which are trivial to verify against many different versions of TypeScript over time.\n".trim(),D="\nA repro can highlight an issue in a few ways:\n<ul>\n  <li>Does this code sample fail to compile?</li>\n  <li>Is a type wrong at a position in the file?</li>\n  <li>Is the .js/.d.ts/.map file wrong?</li>\n</ul>\n".trim(),b='\nTo learn how the tools for making a repro, go to "Docs"\n\n'.trim(),v=function(e,t){return{id:"about",displayName:"About",didMount:function(e,i){var n=t.createDesignSystem(i);n.title("Twoslash Overview"),n.p(h),n.p(f),n.p(D),n.p(b)}}},w=function(e,t){var i;return{id:"results",displayName:"Debug",didMount:function(e,t){i=t},noResults:function(){var e=t.createDesignSystem(i);e.clear(),e.p("No results")},getResults:function(e,n,o){var a=t.createDesignSystem(i);a.clear(),a.p("This tab shows the raw data passed back from Twoslash. This can be useful in debugging if something isn't working as you would expect. That said, if you're struggling with a repro - ask in the <a href='https://discord.gg/typescript'>#compiler-api channel of the TypeScript Discord</a>."),a.subtitle("Output Code as "+n.extension),a.code(n.code),n.staticQuickInfos=["..."],a.subtitle("Twoslash JSON"),a.code(JSON.stringify(n,null,"  ")),a.subtitle("Virtual File System");var r=Array.from(o.keys()).reverse(),s=[];r.forEach((function(e){if(e.startsWith("/lib."))s.push(e.replace("/lib","lib"));else{a.p("<strong>"+e+"</strong>");var t=a.p(""),i=document.createElement("code");i.innerText=o.get(e).trim(),t.appendChild(i)}})),a.subtitle("Lib files"),a.p(s.join(", "))}}},E=function(e,t){var i;return{id:"assertions",displayName:"Asserts",didMount:function(e,t){i=t},noResults:function(e,n){var o=t.createDesignSystem(i);o.clear(),o.title("Exception Raised"),o.p("This could be a successful repro of a crashing compiler bug, or potentially an issue in Twoslash."),o.subtitle("Error:"),n.message&&o.p(n.message),n.stack&&o.code(n.stack)},getResults:function(e,n,o,a){var r=t.createDesignSystem(i);r.clear(),n.queries.length>0||a||n.errors.length>0?r.title("Assertions Found"):(r.title("No Assertions"),r.p("Assuming that this repro is for code which compiles but should not."));var s=n.queries.map((function(e){var t="";switch(e.kind){case"query":t=e.text||"No text found for query";break;case"completions":if(e.completions){var i,n=e.completions.map((function(e){return e.name})).join(", "),o=e.completions.filter((function(t){return t.name.startsWith(e.completionsPrefix||"____")})).map((function(e){return e.name})).join(", ");t=(null!==(i=e.completionsPrefix)&&void 0!==i&&i.length?"Filtered Completions: "+o+".\n\n":"")+"All: "+n+"."}else t="Could not get completions"}return{category:3,code:0,file:void 0,length:0,messageText:t||"-",start:0}}));s.length&&(r.subtitle("Queries in Code"),r.listDiags(e.getModel(),s));var l=n.errors.map((function(e){return{category:1,code:e.code,file:void 0,length:0,messageText:e.renderedMessage,start:0}}));l.length&&(r.subtitle("Compiler Errors"),r.listDiags(e.getModel(),l),r.subtitle("If want these errors:"),r.code("// @errors: "+n.errors.map((function(e){return e.code})).join(" "))),a&&(r.subtitle("Output"),r.code(n.code))}}},I=function(e,t){var i,n=function(e,t,i){t.subtitle("Markdown for issue"),t.button({label:"Copy Markdown",onclick:function(){return navigator.clipboard.writeText(o)}}),t.p("");var n=document&&document.location?document.location.href:"",o=("\n```ts repro\n"+i.replace(/</g,"&lt;")+"\n```\n\n[Workbench Repro]("+n+")\n    ").trim();t.code(o),t.p("Congrats! These repros make it much easier for us to keep track of bugs on the TypeScript team. You can copy & paste this into an issue or comment on the TypeScript repo to have it get hooked up.")};return{id:"md",displayName:"Export",didMount:function(e,t){i=t},noResults:function(e){var o=t.createDesignSystem(i);o.clear(),n(0,o,e.getText())},getResults:function(e){var o=t.createDesignSystem(i);o.clear(),n(0,o,e.getText())}}},S=JSON.parse('{"Y":[{"id":"files","display":"Files","oneliner":"Include a list of files. This does not support glob patterns, as opposed to `include`.","categoryID":"Top Level","categoryDisplay":"Top Level"},{"id":"extends","display":"Extends","oneliner":"Specify one or more path or node module references to base configuration files from which settings are inherited.","categoryID":"Top Level","categoryDisplay":"Top Level"},{"id":"include","display":"Include","oneliner":"Specify a list of glob patterns that match files to be included in compilation.","categoryID":"Top Level","categoryDisplay":"Top Level"},{"id":"exclude","display":"Exclude","oneliner":"Filters results from the `include` option.","categoryID":"Top Level","categoryDisplay":"Top Level"},{"id":"references","display":"References","oneliner":"Specify an array of objects that specify paths for projects. Used in project references.","categoryID":"Top Level","categoryDisplay":"Top Level"},{"id":"allowUnreachableCode","display":"Allow Unreachable Code","oneliner":"Disable error reporting for unreachable code.","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"allowUnusedLabels","display":"Allow Unused Labels","oneliner":"Disable error reporting for unused labels.","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"alwaysStrict","display":"Always Strict","oneliner":"Ensure \'use strict\' is always emitted.","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"exactOptionalPropertyTypes","display":"exactOptionalPropertyTypes","oneliner":"Differentiate between undefined and not present when type checking","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"noFallthroughCasesInSwitch","display":"No Fallthrough Cases In Switch","oneliner":"Enable error reporting for fallthrough cases in switch statements.","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"noImplicitAny","display":"No Implicit Any","oneliner":"Enable error reporting for expressions and declarations with an implied `any` type..","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"noImplicitOverride","display":"noImplicitOverride","oneliner":"Ensure overriding members in derived classes are marked with an override modifier.","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"noImplicitReturns","display":"No Implicit Returns","oneliner":"Enable error reporting for codepaths that do not explicitly return in a function.","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"noImplicitThis","display":"No Implicit This","oneliner":"Enable error reporting when `this` is given the type `any`.","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"noPropertyAccessFromIndexSignature","display":"noPropertyAccessFromIndexSignature","oneliner":"Enforces using indexed accessors for keys declared using an indexed type","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"noUncheckedIndexedAccess","display":"noUncheckedIndexedAccess","oneliner":"Add `undefined` to a type when accessed using an index.","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"noUnusedLocals","display":"No Unused Locals","oneliner":"Enable error reporting when a local variables aren\'t read.","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"noUnusedParameters","display":"No Unused Parameters","oneliner":"Raise an error when a function parameter isn\'t read","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"strict","display":"Strict","oneliner":"Enable all strict type checking options.","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"strictBindCallApply","display":"Strict Bind Call Apply","oneliner":"Check that the arguments for `bind`, `call`, and `apply` methods match the original function.","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"strictFunctionTypes","display":"Strict Function Types","oneliner":"When assigning functions, check to ensure parameters and the return values are subtype-compatible.","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"strictNullChecks","display":"Strict Null Checks","oneliner":"When type checking, take into account `null` and `undefined`.","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"strictPropertyInitialization","display":"Strict Property Initialization","oneliner":"Check for class properties that are declared but not set in the constructor.","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"useUnknownInCatchVariables","display":"useUnknownInCatchVariables","oneliner":"Default catch clause variables as `unknown` instead of `any`.","categoryID":"Type_Checking_6248","categoryDisplay":"Type Checking"},{"id":"allowUmdGlobalAccess","display":"Allow Umd Global Access","oneliner":"Allow accessing UMD globals from modules.","categoryID":"Modules_6244","categoryDisplay":"Modules"},{"id":"baseUrl","display":"Base Url","oneliner":"Specify the base directory to resolve non-relative module names.","categoryID":"Modules_6244","categoryDisplay":"Modules"},{"id":"module","display":"Module","oneliner":"Specify what module code is generated.","categoryID":"Modules_6244","categoryDisplay":"Modules"},{"id":"moduleResolution","display":"Module Resolution","oneliner":"Specify how TypeScript looks up a file from a given module specifier.","categoryID":"Modules_6244","categoryDisplay":"Modules"},{"id":"noResolve","display":"No Resolve","oneliner":"Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project.","categoryID":"Modules_6244","categoryDisplay":"Modules"},{"id":"paths","display":"Paths","oneliner":"Specify a set of entries that re-map imports to additional lookup locations.","categoryID":"Modules_6244","categoryDisplay":"Modules"},{"id":"resolveJsonModule","display":"Resolve JSON Module","oneliner":"Enable importing .json files","categoryID":"Modules_6244","categoryDisplay":"Modules"},{"id":"rootDir","display":"Root Dir","oneliner":"Specify the root folder within your source files.","categoryID":"Modules_6244","categoryDisplay":"Modules"},{"id":"rootDirs","display":"Root Dirs","oneliner":"Allow multiple folders to be treated as one when resolving modules.","categoryID":"Modules_6244","categoryDisplay":"Modules"},{"id":"typeRoots","display":"Type Roots","oneliner":"Specify multiple folders that act like `./node_modules/@types`.","categoryID":"Modules_6244","categoryDisplay":"Modules"},{"id":"types","display":"Types","oneliner":"Specify type package names to be included without being referenced in a source file.","categoryID":"Modules_6244","categoryDisplay":"Modules"},{"id":"declaration","display":"Declaration","oneliner":"Generate .d.ts files from TypeScript and JavaScript files in your project.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"declarationDir","display":"Declaration Dir","oneliner":"Specify the output directory for generated declaration files.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"declarationMap","display":"Declaration Map","oneliner":"Create sourcemaps for d.ts files.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"downlevelIteration","display":"Downlevel Iteration","oneliner":"Emit more compliant, but verbose and less performant JavaScript for iteration.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"emitBOM","display":"Emit BOM","oneliner":"Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"emitDeclarationOnly","display":"Emit Declaration Only","oneliner":"Only output d.ts files and not JavaScript files.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"importHelpers","display":"Import Helpers","oneliner":"Allow importing helper functions from tslib once per project, instead of including them per-file.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"importsNotUsedAsValues","display":"Imports Not Used As Values","oneliner":"Specify emit/checking behavior for imports that are only used for types.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"inlineSourceMap","display":"Inline Source Map","oneliner":"Include sourcemap files inside the emitted JavaScript.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"inlineSources","display":"Inline Sources","oneliner":"Include source code in the sourcemaps inside the emitted JavaScript.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"mapRoot","display":"Map Root","oneliner":"Specify the location where debugger should locate map files instead of generated locations.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"newLine","display":"New Line","oneliner":"Set the newline character for emitting files.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"noEmit","display":"No Emit","oneliner":"Disable emitting file from a compilation.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"noEmitHelpers","display":"No Emit Helpers","oneliner":"Disable generating custom helper functions like `__extends` in compiled output.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"noEmitOnError","display":"No Emit On Error","oneliner":"Disable emitting files if any type checking errors are reported.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"outDir","display":"Out Dir","oneliner":"Specify an output folder for all emitted files.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"outFile","display":"Out File","oneliner":"Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"preserveConstEnums","display":"Preserve Const Enums","oneliner":"Disable erasing `const enum` declarations in generated code.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"removeComments","display":"Remove Comments","oneliner":"Disable emitting comments.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"sourceMap","display":"Source Map","oneliner":"Create source map files for emitted JavaScript files.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"sourceRoot","display":"Source Root","oneliner":"Specify the root path for debuggers to find the reference source code.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"stripInternal","display":"Strip Internal","oneliner":"Disable emitting declarations that have `@internal` in their JSDoc comments.","categoryID":"Emit_6246","categoryDisplay":"Emit"},{"id":"allowJs","display":"Allow JS","oneliner":"Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files.","categoryID":"JavaScript_Support_6247","categoryDisplay":"JavaScript Support"},{"id":"checkJs","display":"Check JS","oneliner":"Enable error reporting in type-checked JavaScript files.","categoryID":"JavaScript_Support_6247","categoryDisplay":"JavaScript Support"},{"id":"maxNodeModuleJsDepth","display":"Max Node Module JS Depth","oneliner":"Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`.","categoryID":"JavaScript_Support_6247","categoryDisplay":"JavaScript Support"},{"id":"disableSizeLimit","display":"Disable Size Limit","oneliner":"Remove the 20mb cap on total source code size for JavaScript files in the TypeScript language server.","categoryID":"Editor_Support_6249","categoryDisplay":"Editor Support"},{"id":"plugins","display":"Plugins","oneliner":"Specify a list of language service plugins to include.","categoryID":"Editor_Support_6249","categoryDisplay":"Editor Support"},{"id":"allowSyntheticDefaultImports","display":"Allow Synthetic Default Imports","oneliner":"Allow \'import x from y\' when a module doesn\'t have a default export.","categoryID":"Interop_Constraints_6252","categoryDisplay":"Interop Constraints"},{"id":"esModuleInterop","display":"ES Module Interop","oneliner":"Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility.","categoryID":"Interop_Constraints_6252","categoryDisplay":"Interop Constraints"},{"id":"forceConsistentCasingInFileNames","display":"Force Consistent Casing In File Names","oneliner":"Ensure that casing is correct in imports.","categoryID":"Interop_Constraints_6252","categoryDisplay":"Interop Constraints"},{"id":"isolatedModules","display":"Isolated Modules","oneliner":"Ensure that each file can be safely transpiled without relying on other imports.","categoryID":"Interop_Constraints_6252","categoryDisplay":"Interop Constraints"},{"id":"preserveSymlinks","display":"Preserve Symlinks","oneliner":"Disable resolving symlinks to their realpath. This correlates to the same flag in node.","categoryID":"Interop_Constraints_6252","categoryDisplay":"Interop Constraints"},{"id":"charset","display":"Charset","oneliner":"No longer supported. In early versions, manually set the text encoding for reading files.","categoryID":"Backwards_Compatibility_6253","categoryDisplay":"Backwards Compatibility"},{"id":"keyofStringsOnly","display":"Keyof Strings Only","oneliner":"Make keyof only return strings instead of string, numbers or symbols. Legacy option.","categoryID":"Backwards_Compatibility_6253","categoryDisplay":"Backwards Compatibility"},{"id":"noImplicitUseStrict","display":"No Implicit Use Strict","oneliner":"Disable adding \'use strict\' directives in emitted JavaScript files.","categoryID":"Backwards_Compatibility_6253","categoryDisplay":"Backwards Compatibility"},{"id":"noStrictGenericChecks","display":"No Strict Generic Checks","oneliner":"Disable strict checking of generic signatures in function types.","categoryID":"Backwards_Compatibility_6253","categoryDisplay":"Backwards Compatibility"},{"id":"out","display":"Out","oneliner":"Deprecated setting. Use `outFile` instead.","categoryID":"Backwards_Compatibility_6253","categoryDisplay":"Backwards Compatibility"},{"id":"suppressExcessPropertyErrors","display":"Suppress Excess Property Errors","oneliner":"Disable reporting of excess property errors during the creation of object literals.","categoryID":"Backwards_Compatibility_6253","categoryDisplay":"Backwards Compatibility"},{"id":"suppressImplicitAnyIndexErrors","display":"Suppress Implicit Any Index Errors","oneliner":"Suppress `noImplicitAny` errors when indexing objects that lack index signatures.","categoryID":"Backwards_Compatibility_6253","categoryDisplay":"Backwards Compatibility"},{"id":"emitDecoratorMetadata","display":"Emit Decorator Metadata","oneliner":"Emit design-type metadata for decorated declarations in source files.","categoryID":"Language_and_Environment_6254","categoryDisplay":"Language and Environment"},{"id":"experimentalDecorators","display":"Experimental Decorators","oneliner":"Enable experimental support for TC39 stage 2 draft decorators.","categoryID":"Language_and_Environment_6254","categoryDisplay":"Language and Environment"},{"id":"jsx","display":"JSX","oneliner":"Specify what JSX code is generated.","categoryID":"Language_and_Environment_6254","categoryDisplay":"Language and Environment"},{"id":"jsxFactory","display":"JSX Factory","oneliner":"Specify the JSX factory function used when targeting React JSX emit, e.g. \'React.createElement\' or \'h\'","categoryID":"Language_and_Environment_6254","categoryDisplay":"Language and Environment"},{"id":"jsxFragmentFactory","display":"jsxFragmentFactory","oneliner":"Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. \'React.Fragment\' or \'Fragment\'.","categoryID":"Language_and_Environment_6254","categoryDisplay":"Language and Environment"},{"id":"jsxImportSource","display":"jsxImportSource","oneliner":"Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.`","categoryID":"Language_and_Environment_6254","categoryDisplay":"Language and Environment"},{"id":"lib","display":"Lib","oneliner":"Specify a set of bundled library declaration files that describe the target runtime environment.","categoryID":"Language_and_Environment_6254","categoryDisplay":"Language and Environment"},{"id":"noLib","display":"No Lib","oneliner":"Disable including any library files, including the default lib.d.ts.","categoryID":"Language_and_Environment_6254","categoryDisplay":"Language and Environment"},{"id":"reactNamespace","display":"React Namespace","oneliner":"Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit.","categoryID":"Language_and_Environment_6254","categoryDisplay":"Language and Environment"},{"id":"target","display":"Target","oneliner":"Set the JavaScript language version for emitted JavaScript and include compatible library declarations.","categoryID":"Language_and_Environment_6254","categoryDisplay":"Language and Environment"},{"id":"useDefineForClassFields","display":"Use Define For Class Fields","oneliner":"Emit ECMAScript-standard-compliant class fields.","categoryID":"Language_and_Environment_6254","categoryDisplay":"Language and Environment"},{"id":"diagnostics","display":"Diagnostics","oneliner":"Output compiler performance information after building.","categoryID":"Compiler_Diagnostics_6251","categoryDisplay":"Compiler Diagnostics"},{"id":"explainFiles","display":"explainFiles","oneliner":"Print files read during the compilation including why it was included.","categoryID":"Compiler_Diagnostics_6251","categoryDisplay":"Compiler Diagnostics"},{"id":"extendedDiagnostics","display":"Extended Diagnostics","oneliner":"Output more detailed compiler performance information after building.","categoryID":"Compiler_Diagnostics_6251","categoryDisplay":"Compiler Diagnostics"},{"id":"generateCpuProfile","display":"Generate CPU Profile","oneliner":"Emit a v8 CPU profile of the compiler run for debugging.","categoryID":"Compiler_Diagnostics_6251","categoryDisplay":"Compiler Diagnostics"},{"id":"listEmittedFiles","display":"List Emitted Files","oneliner":"Print the names of emitted files after a compilation.","categoryID":"Compiler_Diagnostics_6251","categoryDisplay":"Compiler Diagnostics"},{"id":"listFiles","display":"List Files","oneliner":"Print all of the files read during the compilation.","categoryID":"Compiler_Diagnostics_6251","categoryDisplay":"Compiler Diagnostics"},{"id":"traceResolution","display":"Trace Resolution","oneliner":"Log paths used during the `moduleResolution` process.","categoryID":"Compiler_Diagnostics_6251","categoryDisplay":"Compiler Diagnostics"},{"id":"composite","display":"Composite","oneliner":"Enable constraints that allow a TypeScript project to be used with project references.","categoryID":"Projects_6255","categoryDisplay":"Projects"},{"id":"disableReferencedProjectLoad","display":"disableReferencedProjectLoad","oneliner":"Reduce the number of projects loaded automatically by TypeScript.","categoryID":"Projects_6255","categoryDisplay":"Projects"},{"id":"disableSolutionSearching","display":"Disable Solution Searching","oneliner":"Opt a project out of multi-project reference checking when editing.","categoryID":"Projects_6255","categoryDisplay":"Projects"},{"id":"disableSourceOfProjectReferenceRedirect","display":"Disable Source Project Reference Redirect","oneliner":"Disable preferring source files instead of declaration files when referencing composite projects","categoryID":"Projects_6255","categoryDisplay":"Projects"},{"id":"incremental","display":"Incremental","oneliner":"Save .tsbuildinfo files to allow for incremental compilation of projects.","categoryID":"Projects_6255","categoryDisplay":"Projects"},{"id":"tsBuildInfoFile","display":"TS Build Info File","oneliner":"Specify the folder for .tsbuildinfo incremental compilation files.","categoryID":"Projects_6255","categoryDisplay":"Projects"},{"id":"noErrorTruncation","display":"No Error Truncation","oneliner":"Disable truncating types in error messages.","categoryID":"Output_Formatting_6256","categoryDisplay":"Output Formatting"},{"id":"preserveWatchOutput","display":"Preserve Watch Output","oneliner":"Disable wiping the console in watch mode","categoryID":"Output_Formatting_6256","categoryDisplay":"Output Formatting"},{"id":"pretty","display":"Pretty","oneliner":"Enable color and formatting in output to make compiler errors easier to read","categoryID":"Output_Formatting_6256","categoryDisplay":"Output Formatting"},{"id":"skipDefaultLibCheck","display":"Skip Default Lib Check","oneliner":"Skip type checking .d.ts files that are included with TypeScript.","categoryID":"Completeness_6257","categoryDisplay":"Completeness"},{"id":"skipLibCheck","display":"Skip Lib Check","oneliner":"Skip type checking all .d.ts files.","categoryID":"Completeness_6257","categoryDisplay":"Completeness"},{"id":"assumeChangesOnlyAffectDirectDependencies","display":"Assume Changes Only Affect Direct Dependencies","oneliner":"Have recompiles in projects that use `incremental` and `watch` mode assume that changes within a file will only affect files directly depending on it.","categoryID":"Watch_and_Build_Modes_6250","categoryDisplay":"Watch Options"},{"id":"watchFile","display":"watchFile","oneliner":"Specify how the TypeScript watch mode works.","categoryID":"watchOptions","categoryDisplay":"watchOptions"},{"id":"watchDirectory","display":"watchDirectory","oneliner":"Specify how directories are watched on systems that lack recursive file-watching functionality.","categoryID":"watchOptions","categoryDisplay":"watchOptions"},{"id":"fallbackPolling","display":"fallbackPolling","oneliner":"Specify what approach the watcher should use if the system runs out of native file watchers.","categoryID":"watchOptions","categoryDisplay":"watchOptions"},{"id":"synchronousWatchDirectory","display":"synchronousWatchDirectory","oneliner":"Synchronously call callbacks and update the state of directory watchers on platforms that don`t support recursive watching natively.","categoryID":"watchOptions","categoryDisplay":"watchOptions"},{"id":"excludeDirectories","display":"excludeDirectories","oneliner":"Remove a list of directories from the watch process.","categoryID":"watchOptions","categoryDisplay":"watchOptions"},{"id":"excludeFiles","display":"excludeFiles","oneliner":"Remove a list of files from the watch mode\'s processing.","categoryID":"watchOptions","categoryDisplay":"watchOptions"},{"id":"enable","display":"enable","oneliner":"Disable the type acquisition for JavaScript projects","categoryID":"typeAcquisition","categoryDisplay":"typeAcquisition"},{"id":"include","display":"Include","oneliner":"Specify a list of modules which to acquire types for.","categoryID":"typeAcquisition","categoryDisplay":"typeAcquisition"},{"id":"exclude","display":"Exclude","oneliner":"Specify a list of modules which to exclude from type acquisition.","categoryID":"typeAcquisition","categoryDisplay":"typeAcquisition"},{"id":"disableFilenameBasedTypeAcquisition","display":"disableFilenameBasedTypeAcquisition","oneliner":"Disables inference for type acquisition by looking at filenames in a project.","categoryID":"typeAcquisition","categoryDisplay":"typeAcquisition"}]}'),_=[{issue:37231,name:"Incorrect Type Inference Example",blurb:"Using <code>// ^?</code> to highlight how inference gives different results at different locations",code:"// @noImplicitAny: false\n\ntype Entity = {\n  someDate: Date | null;\n} & ({ id: string; } | { id: number; })\n\ntype RowRendererMeta<TInput extends {}> = {\n  [key in keyof TInput]: { key: key; caption: string; formatter?: (value: TInput[key]) => string; };\n}\ntype RowRenderer<TInput extends {}> = RowRendererMeta<TInput>[keyof RowRendererMeta<TInput>];\n\nconst test: RowRenderer<Entity> = {\n  key: 'someDate',\n  caption: 'My Date',\n  formatter: (value) => value ? value.toString() : '-' // value: any\n//            ^?\n}\n\nconst thisIsNotTheIssue: Partial<RowRendererMeta<Entity>> = {\n  someDate: {\n    key: 'someDate',\n    caption: 'My Date',\n    formatter: (value) => value ? value.toString() : '-' // value: Date | null\n//              ^?\n  }\n}"}],k=[{name:"Compiler Options",content:function(e,t,i){i.p("\nYou can set compiler flags via <code>// @[option]</code> comments inside the sample.\n<ul>\n  <li>Booleans: <code>// @strict: true</code> or <code>// @strict: false</code>.<br/>You can omit <code>: true</code> to get the same behavior.</li>\n  <li>Strings: <code>// @target: ES2015</code></li>\n  <li>Numbers: <code>// @target: 4</code></li>\n  <li>Lists: <code>// @types: ['jest']</code></li>\n</ul>\n"),i.subtitle("Compiler Option Reference"),S.Y.sort((function(e,t){return e.id.localeCompare(t.id)})).forEach((function(e){["Project_Files_0","Watch_Options_999"].includes(e.categoryID)||i.p("<code>// @"+e.id+"</code><br>"+e.oneliner+".")}))}},{name:"Multi File",content:function(e,t,i){i.p("The code file can be converted into multiple files behind the scenes. This is done by chopping the code sample whenever there is a <code>// @filename: [path]</code>."),i.code('\n// @showEmit\n// @filename: index.ts\nimport {pi} from "./utils"\nconsole.log(pi)\n\n// @filename: utils.ts\nexport const pi = "3.14"\n'.trim());var n=document.createElement("button");n.textContent="See an Example",n.onclick=function(){return e.setText('\n// @filename: service.ts\nexport type Service = {\n  id: string\n  display: string\n}\n\n// @filename: app.ts\nimport type { Service } from "./service";\n//                            ^ - this error is OK\n\nconst myServices: Service[] = [\n  { id: "launch", display: "Launch" },\n  { id: "lunch", disply: "Lunch" },\n//               ^ - this error is real but hidden\n//                   you can see it in \'Assertions\'\n]\n      '.trim())},t.appendChild(n)}},{name:"Queries",content:function(e,t,i){i.p("Twoslash supports making queries for what the type is at a particular location of code. It also is a specially crafted comment. "),i.code('\nconst myExample = {\n  hello: "world"\n}\n\nmyExample.hello;\n//         ^?\n      '.trim()),i.p("You can use as many as you want of these, but you can only have one per line.");var n=document.createElement("button");n.textContent="See an Example",n.onclick=function(){return e.setText('\nconst button = document.createElement("button");\nbutton.textContent = "See an Example";\n\nbutton.onclick = () => {\n  console.log("Example has been clicked");\n  button.disabled = true;\n// ^?\n}\n\ndocument.body.appendChild(button);\n//       ^?\n      '.trim())},t.appendChild(n),i.p("The repro testing system will use these queries as an indicator of what has changed, so if you highlight a bug in inference then when it is fixed and the type has changed it will be raised.")}},{name:"Emitter",content:function(e,t,i){i.p("\nThere are ways to have your test repro be about the output of running TypeScript. There are two comment types which can be used to highlight these files.\n<br/><br/><code>// @showEmit</code> is a shortcut for showing the <code>.js</code> file for a single file code sample:\n".trim()),i.code('\n// @showEmit\nexport const helloWorld: string = "Hi"\n'.trim()),i.p("The long-form is <code>// @showEmittedFile: [filename]</code> which allows for showing any emitted file"),i.code("\n// @declaration: true\n// @showEmit\n// @showEmittedFile: index.d.ts\n\nexport function getStringLength(value: string) {\n  return value.length\n}\n".trim()),i.p("Multi-file seems to be buggy ATM, but this should work eventually:"),i.code('\n// @showEmit\n// @showEmittedFile: b.js\n\n// @filename: a.ts\nexport const helloWorld: string = "Hi"\n\n// @filename: b.ts\nconst abc = ""\n'.trim())}},{name:"Defaults",content:function(e,t,i){_.forEach((function(e){i.p("The twoslash compiler only has a few changes from the default empty TSConfig "),i.code("\n  const defaultCompilerOptions: CompilerOptions = {\n    strict: true,\n    target: ts.ScriptTarget.ES2016,\n    allowJs: true\n  }\n")})),i.p("You may need to undo <code>strict</code> for some samples, but the others shouldn't affect most code repros.")}},{name:"Examples",content:function(e,t,i){i.p("Note: this section is tricky to document... These bugs may have been fixed since the docs were created. Consider theses as ideas in how to make repros rather than useful bug reproductions."),_.forEach((function(n){i.subtitle(n.name+" <a href='https://github.com/microsoft/TypeScript/issues/"+n.issue+"'>"+n.issue+"</a>"),i.p(n.blurb);var o=document.createElement("button");o.textContent="Show example",o.onclick=function(){return e.setText(n.code)},t.appendChild(o)}))}}],C=function(e,t){return{id:"ref",displayName:"Docs",didMount:function(e,i){var n=t.createDesignSystem(i),o=document.createElement("div"),a=n.createTabBar(),r=[];k.forEach((function(i,s){var l=n.createTabButton(i.name);r.push(l),l.onclick=function(){r.forEach((function(e){return e.classList.remove("active")})),l.classList.add("active");var n=t.createDesignSystem(o);n.clear(),i.content(e,o,n)},a.appendChild(l),0===s&&l.onclick({})})),i.appendChild(a),i.appendChild(o)}}},T=i(3415),x=i(2057),M=i(2332),R=function(e){var t=(0,g.D)((0,u.Z)()),o=new Map;return(0,r.useEffect)((function(){if(!("playgroundLoaded"in window)){window.playgroundLoaded=!0,window.react=s(),window.reactDOM=c(),window.i=t;var e=document.createElement("script");e.src=(0,d.withPrefix)("/js/vs.loader.js"),e.async=!0,e.onload=(0,n.Z)(a().mark((function e(){var r,l,c,p,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=new URLSearchParams(location.search),(l=r.get("ts"))&&(!l||"Nightly"!==l)&&"next"!==l){e.next=10;break}return e.next=5,fetch("https://tswebinfra.blob.core.windows.net/indexes/next.json",{cache:"no-cache"});case 5:return c=e.sent,e.next=8,c.json();case 8:p=e.sent,l=p.version;case 10:(u=i.g.require).config({paths:{vs:"https://typescript.azureedge.net/cdn/"+l+"/monaco/min/vs","typescript-sandbox":(0,d.withPrefix)("/js/sandbox"),"typescript-playground":(0,d.withPrefix)("/js/playground"),unpkg:"https://unpkg.com/",local:"http://localhost:5000"},ignoreDuplicateModules:["vs/editor/editor.main"]}),u(["vs/editor/editor.main","vs/language/typescript/tsWorker","typescript-sandbox/index","typescript-playground/index"],function(){var e=(0,n.Z)(a().mark((function e(n,r,c,p){var u,g,m,h,f,D,b,S,_,k,R,O,L,j;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=i.g.ts,n&&u&&c&&p?null===(g=document.getElementById("loader").parentNode)||void 0===g||g.removeChild(document.getElementById("loader")):(M.error("Errr"),M.error("main",!!n,"ts",!!u,"sandbox",!!c,"playground",!!p)),(m=document.getElementById("playground-container")).style.display="flex",h=Math.max(window.innerHeight,600),m.style.height=h-Math.round(m.getClientRects()[0].top)-18+"px",e.next=9,c.createTypeScriptSandbox({text:localStorage.getItem("sandbox-history")||t("play_default_code_sample"),compilerOptions:{},domID:"monaco-editor-embed",filetype:"ts",acquireTypes:!localStorage.getItem("disable-ata"),supportTwoslashCompilerOptions:!0,monacoSettings:{fontFamily:"var(--code-font)",fontLigatures:!0}},n,u);case 9:f=e.sent,D={lang:"en",prefix:(0,d.withPrefix)("/"),supportCustomPlugins:!1,plugins:[v,C,E,I,w]},b=p.setupPlayground(f,n,D,t,s()),S=b.createUtils(c,s()),_=function(e){(0,T.yp)(e,l,!0,u,f.lzstring).then((function(e){o=e,j()}))},f.setDidUpdateCompilerSettings(_),_(f.getCompilerOptions()),k=(0,y.D)((function(){o&&j();var e=!f.languageServiceDefaults.getDiagnosticsOptions().noSemanticValidation,t=!f.getText().includes("// @filename");e!==t&&f.languageServiceDefaults.setDiagnosticsOptions({noSemanticValidation:!t})}),1e3),f.editor.onDidChangeModelContent(k),R=void 0,O=void 0,L=function(e){return e&&e.stack&&e.message},b.setDidUpdateTab((function(e){!L(R)&&"getResults"in e?e.getResults(f,R,O,f.getText().includes("// @showEmit")):"noResults"in e&&e.noResults(R,R)})),j=function(){var e=f.getText();if(e)try{O=new Map(o);var t=f.filepath.split(".")[1],i=(0,x.k)(e,t,{defaultOptions:{noStaticSemanticInfo:!0,emit:!0,noErrorValidation:!0},tsModule:u,lzstringModule:f.lzstring,fsMap:O});R=i;var n=b.getCurrentPlugin();"getResults"in n&&n.getResults(f,i,O,e.includes("// @showEmit"));var a=i.queries.length+(e.includes("// @showEmit")?1:0)+i.errors.length;S.setNotifications("assertions",a)}catch(l){var r=l;M.log(r),R=r;var s=b.getCurrentPlugin();"noResults"in s&&s.noResults(f,r),S.setNotifications("assertions",1)}},document.documentElement.classList.contains("dark-theme")&&f.monaco.editor.setTheme("sandbox-dark"),f.editor.focus(),f.editor.layout();case 27:case"end":return e.stop()}}),e)})));return function(t,i,n,o){return e.apply(this,arguments)}}());case 13:case"end":return e.stop()}}),e)}))),document.body.appendChild(e)}}),[]),s().createElement(p.A,{title:"Bug Workbench",description:"Create reproductions of issues with TypeScript",lang:"en"},s().createElement("nav",{className:"navbar-sub"},s().createElement("ul",{className:"nav"},s().createElement("li",{className:"name hide-small"},s().createElement("span",null,"Bug Workbench"))),s().createElement("ul",{className:"nav navbar-nav navbar-right hidden-xs"})),s().createElement("div",{className:"raised",style:{paddingTop:"0",marginTop:"0",marginBottom:"3rem",paddingBottom:"1.5rem"}},s().createElement("div",{id:"loader"},s().createElement("div",{className:"lds-grid"},s().createElement("div",null),s().createElement("div",null),s().createElement("div",null),s().createElement("div",null),s().createElement("div",null),s().createElement("div",null),s().createElement("div",null),s().createElement("div",null),s().createElement("div",null)),s().createElement("p",{id:"loading-message",role:"status"},t("play_downloading_typescript"))),s().createElement("div",{id:"playground-container",style:{display:"none"}},s().createElement("div",{id:"editor-container"},s().createElement("div",{id:"editor-toolbar",className:"navbar-sub"},s().createElement("ul",null,s().createElement("li",{id:"versions",className:"dropdown"},s().createElement("a",{href:"#"},t("play_downloading_version"),"... ",s().createElement("span",{className:"caret"})),s().createElement("ul",{className:"dropdown-menu versions"}))),s().createElement("ul",{className:"right"},s().createElement("li",null,s().createElement("a",{id:"sidebar-toggle","aria-label":"Hide Sidebar",href:"#"},"⇥")))),s().createElement("div",{id:"monaco-editor-embed"})))))},O=function(e){return s().createElement(m.R,{locale:"en"},s().createElement(R,e))}}}]);
//# sourceMappingURL=component---src-pages-dev-bug-workbench-tsx-040a1b42be0b12ecfece.js.map