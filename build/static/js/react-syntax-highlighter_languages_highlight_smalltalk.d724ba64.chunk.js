(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[156],{1841:function(e,n){e.exports=function(e){var n="[a-z][a-zA-Z0-9_]*",a={className:"string",begin:"\\$.{1}"},s={className:"symbol",begin:"#"+e.UNDERSCORE_IDENT_RE};return{name:"Smalltalk",aliases:["st"],keywords:"self super nil true false thisContext",contains:[e.COMMENT('"','"'),e.APOS_STRING_MODE,{className:"type",begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},{begin:n+":",relevance:0},e.C_NUMBER_MODE,s,a,{begin:"\\|[ ]*"+n+"([ ]+"+n+")*[ ]*\\|",returnBegin:!0,end:/\|/,illegal:/\S/,contains:[{begin:"(\\|[ ]*)?"+n}]},{begin:"#\\(",end:"\\)",contains:[e.APOS_STRING_MODE,a,e.C_NUMBER_MODE,s]}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_smalltalk.d724ba64.chunk.js.map