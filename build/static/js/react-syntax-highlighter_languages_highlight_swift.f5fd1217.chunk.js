(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[164],{1850:function(e,n,a){var t=a(614),i=a(235);function c(e){return e?"string"===typeof e?e:e.source:null}function s(e){return r("(?=",e,")")}function r(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var t=n.map((function(e){return c(e)})).join("");return t}function u(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var t="("+n.map((function(e){return c(e)})).join("|")+")";return t}var o=function(e){return r(/\b/,e,/\w$/.test(e)?/\b/:/\B/)},l=["Protocol","Type"].map(o),p=["init","self"].map(o),m=["Any","Self"],d=["associatedtype","async","await",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],F=["false","nil","true"],f=["assignment","associativity","higherThan","left","lowerThan","none","right"],b=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],h=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],v=u(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),y=u(v,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),w=r(v,y,"*"),g=u(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),E=u(g,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),A=r(g,E,"*"),N=r(/[A-Z]/,E,"*"),C=["autoclosure",r(/convention\(/,u("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",r(/objc\(/,A,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","testable","UIApplicationMain","unknown","usableFromInline"],D=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];e.exports=function(e){var n={match:/\s+/,relevance:0},a=e.COMMENT("/\\*","\\*/",{contains:["self"]}),c=[e.C_LINE_COMMENT_MODE,a],v={className:"keyword",begin:r(/\./,s(u.apply(void 0,i(l).concat(i(p))))),end:u.apply(void 0,i(l).concat(i(p))),excludeBegin:!0},g={match:r(/\./,u.apply(void 0,d)),relevance:0},k=d.filter((function(e){return"string"===typeof e})).concat(["_|0"]),B=d.filter((function(e){return"string"!==typeof e})).concat(m).map(o),_={variants:[{className:"keyword",match:u.apply(void 0,i(B).concat(i(p)))}]},M={$pattern:u(/\b\w+/,/#\w+/),keyword:k.concat(b),literal:F},S=[v,g,_],x=[{match:r(/\./,u.apply(void 0,h)),relevance:0},{className:"built_in",match:r(/\b/,u.apply(void 0,h),/(?=\()/)}],I={match:/->/,relevance:0},O=[I,{className:"operator",relevance:0,variants:[{match:w},{match:"\\.(\\.|".concat(y,")+")}]}],T="([0-9]_*)+",L="([0-9a-fA-F]_*)+",P={className:"number",relevance:0,variants:[{match:"\\b(".concat(T,")(\\.(").concat(T,"))?")+"([eE][+-]?(".concat(T,"))?\\b")},{match:"\\b0x(".concat(L,")(\\.(").concat(L,"))?")+"([pP][+-]?(".concat(T,"))?\\b")},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{className:"subst",variants:[{match:r(/\\/,e,/[0\\tnr"']/)},{match:r(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{className:"subst",match:r(/\\/,e,/[\t ]*(?:[\r\n]|\r\n)/)}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{className:"subst",label:"interpol",begin:r(/\\/,e,/\(/),end:/\)/}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{begin:r(e,/"""/),end:r(/"""/,e),contains:[K(e),$(e),j(e)]}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{begin:r(e,/"/),end:r(/"/,e),contains:[K(e),j(e)]}},U={className:"string",variants:[z(),z("#"),z("##"),z("###"),q(),q("#"),q("##"),q("###")]},Z={match:r(/`/,A,/`/)},G=[Z,{className:"variable",match:/\$\d+/},{className:"variable",match:"\\$".concat(E,"+")}],H=[{match:/(@|#)available/,className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:D,contains:[].concat(O,[P,U])}]}},{className:"keyword",match:r(/@/,u.apply(void 0,C))},{className:"meta",match:r(/@/,A)}],R={match:s(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:r(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,E,"+")},{className:"type",match:N,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:r(/\s+&\s+/,s(N)),relevance:0}]},V={begin:/</,end:/>/,keywords:M,contains:[].concat(c,S,H,[I,R])};R.contains.push(V);var W,J={begin:/\(/,end:/\)/,relevance:0,keywords:M,contains:["self",{match:r(A,/\s*:/),keywords:"_|0",relevance:0}].concat(c,S,x,O,[P,U],G,H,[R])},X={beginKeywords:"func",contains:[{className:"title",match:u(Z.match,A,w),endsParent:!0,relevance:0},n]},Q={begin:/</,end:/>/,contains:[].concat(c,[R])},Y={begin:/\(/,end:/\)/,keywords:M,contains:[{begin:u(s(r(A,/\s*:/)),s(r(A,/\s+/,A,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:A}]}].concat(c,S,O,[P,U],H,[R,J]),endsParent:!0,illegal:/["']/},ee={className:"function",match:s(/\bfunc\b/),contains:[X,Q,Y,n],illegal:[/\[/,/%/]},ne={className:"function",match:/\b(subscript|init[?!]?)\s*(?=[<(])/,keywords:{keyword:"subscript init init? init!",$pattern:/\w+[?!]?/},contains:[Q,Y,n],illegal:/\[|%/},ae={beginKeywords:"operator",end:e.MATCH_NOTHING_RE,contains:[{className:"title",match:w,endsParent:!0,relevance:0}]},te={beginKeywords:"precedencegroup",end:e.MATCH_NOTHING_RE,contains:[{className:"title",match:N,relevance:0},{begin:/{/,end:/}/,relevance:0,endsParent:!0,keywords:[].concat(f,F),contains:[R]}]},ie=t(U.variants);try{for(ie.s();!(W=ie.n()).done;){var ce=W.value.contains.find((function(e){return"interpol"===e.label}));ce.keywords=M;var se=[].concat(S,x,O,[P,U],G);ce.contains=[].concat(i(se),[{begin:/\(/,end:/\)/,contains:["self"].concat(i(se))}])}}catch(re){ie.e(re)}finally{ie.f()}return{name:"Swift",keywords:M,contains:[].concat(c,[ee,ne,{className:"class",beginKeywords:"struct protocol class extension enum",end:"\\{",excludeEnd:!0,keywords:M,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/})].concat(S)},ae,te,{beginKeywords:"import",end:/$/,contains:[].concat(c),relevance:0}],S,x,O,[P,U],G,H,[R,J])}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_swift.f5fd1217.chunk.js.map