(this["webpackJsonpproject-3"]=this["webpackJsonpproject-3"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),i=c.n(a),n=c(5),o=c.n(n),r=(c(13),c(3)),l=(c(14),c(2)),j=c.n(l),d=c(6),b=c(7),v=Object(b.a)((function(e){return{movieData:void 0,fetchMovies:function(){var t=Object(d.a)(j.a.mark((function t(c){var s,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://www.omdbapi.com/?t=".concat(c,"&apikey=").concat("9571ec5f"));case 2:return s=t.sent,t.next=5,s.json();case 5:a=t.sent,console.log(a),s&&e({movieData:a});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})),u=function(e){var t,c,i,n,o,r,l,j,d,b,u,h=e.title,f=v((function(e){return e.fetchMovies})),O=v(),m="https://www.imdb.com/title/"+(null===(t=O.movieData)||void 0===t?void 0:t.imdbID);return Object(a.useEffect)((function(){f(h)}),[h,f]),""!==h&&"Movie not found!"!==(null===(c=O.movieData)||void 0===c?void 0:c.Error)?Object(s.jsxs)("div",{className:"Movie",children:[Object(s.jsx)("div",{className:"Poster",children:Object(s.jsx)("img",{alt:"Poster",src:null===(n=O.movieData)||void 0===n?void 0:n.Poster})}),Object(s.jsxs)("div",{className:"Movie-details",children:[Object(s.jsxs)("h1",{children:[Object(s.jsx)("i",{className:"fas fa-film"})," ",null===(o=O.movieData)||void 0===o?void 0:o.Title]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("i",{className:"fas fa-scroll"})," ",null===(r=O.movieData)||void 0===r?void 0:r.Genre]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("i",{className:"fas fa-calendar-day"})," Released ",null===(l=O.movieData)||void 0===l?void 0:l.Released]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("i",{className:"fas fa-user"})," Directed by ",null===(j=O.movieData)||void 0===j?void 0:j.Director]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("h2",{children:[Object(s.jsx)("i",{className:"fas fa-users"})," Cast: "]}),Object(s.jsx)("p",{children:null===(d=O.movieData)||void 0===d?void 0:d.Actors}),Object(s.jsx)("hr",{}),Object(s.jsxs)("h2",{children:[Object(s.jsx)("i",{className:"fas fa-pen-alt"})," Written by: "]}),Object(s.jsx)("p",{children:null===(b=O.movieData)||void 0===b?void 0:b.Writer}),Object(s.jsx)("hr",{}),Object(s.jsxs)("h2",{children:[Object(s.jsx)("i",{className:"fas fa-file-alt"})," Plot Synopsis:"]}),Object(s.jsxs)("p",{children:[" ",null===(u=O.movieData)||void 0===u?void 0:u.Plot]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"imdb",children:[Object(s.jsx)("p",{children:"See more on "})," ",Object(s.jsx)("a",{href:m,rel:"noreferrer",target:"_blank",children:Object(s.jsx)("i",{className:"fab fa-imdb fa-3x"})})]})]})]}):"Movie not found!"===(null===(i=O.movieData)||void 0===i?void 0:i.Error)?Object(s.jsx)("div",{children:Object(s.jsxs)("h1",{children:[Object(s.jsx)("i",{className:"far fa-question-circle"})," Whoops! We couldn't find that title!"]})}):null};var h=function(){document.title="Movie Search";var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(a.useState)(""),o=Object(r.a)(n,2),l=o[0],j=o[1],d=function(){""!==c&&(j(c),i(""))};return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("div",{className:"Search",children:[Object(s.jsx)("input",{type:"text",className:"Search-box",onChange:function(e){i(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&d()},value:c,placeholder:"Enter a movie title..."}),Object(s.jsxs)("button",{className:"Search-button",onClick:d,children:[Object(s.jsx)("i",{className:"fas fa-search"}),"  Search"]})]}),Object(s.jsx)("div",{className:"Info",children:Object(s.jsx)(u,{title:l})})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))};o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.7fb08853.chunk.js.map