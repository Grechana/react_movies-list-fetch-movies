(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(6),s=c.n(i),a=(c(12),c(7)),n=c(2),r=c(1),l=(c(13),c(14),c(15),c(0)),d=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(d,{movie:e},e.imdbId)}))})};c(17);var j=function(e){var t=e.handleAddMovie,c=Object(r.useState)(""),i=Object(n.a)(c,2),s=i[0],a=i[1],o=Object(r.useState)(null),j=Object(n.a)(o,2),m=j[0],b=j[1],u=Object(r.useState)(!1),h=Object(n.a)(u,2),v=h[0],O=h[1],x=Object(r.useState)(!1),f=Object(n.a)(x,2),p=f[0],N=f[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),N(!0),function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=cbef9849&t","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(s).then((function(e){"imdbID"in e?b(function(e){var t=e.Title,c=e.Plot,i=e.Poster,s=e.imdbID;return{title:t,description:c,imgUrl:"N/A"===i?"https://via.placeholder.com/360x270.png?text=no%20preview":e.Poster,imdbUrl:"https://www.imdb.com/title/".concat(s),imdbId:s}}(e)):O(!0)})).finally((function(){N(!1)}))},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-danger",value:s,onChange:function(e){var t=e.target.value;a(t),O(!1)}})}),v&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:p?"button is-light is-loading":"button is-light",disabled:!s,children:"Find a movie"})}),m&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){b(null),a(""),t(m)},children:"Add to the list"})})]})]}),m&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(d,{movie:m})]})]})},m=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(j,{handleAddMovie:function(e){i((function(t){return t.find((function(t){return t.imdbId===e.imdbId}))?t:[].concat(Object(a.a)(t),[e])}))}})})]})};s.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.84e9940a.chunk.js.map