w3.includeHTML();


var hideLoader = function() {
    console.log("ready3")
    document.getElementById('scene').css("opacity", "1");
    document.getElementsByClassName('.navbar').css("opacity", "1");
};

var initialize = function() {
    hideLoader();
};


(function() {



    Reveal.initialize({

        // Display controls in the bottom right corner
        controls: true,

        // Display a presentation progress bar
        progress: false,

        // Transition style
        transition: 'slide', // none/fade/slide/convex/concave/zoom

        touch: false,
        keyboard: true,
        mouseWheel: false,
        // dependencies: [
        //     // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
        //     { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
        //
        //     // Interpret Markdown in <section> elements
        //     // { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        //     // { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        //
        //     // Syntax highlight for <code> elements
        //     { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        //
        //     // Zoom in and out with Alt+click
        //     // { src: 'plugin/zoom-js/zoom.js', async: true },
        //
        //     // Speaker notes
        //     // { src: 'plugin/notes/notes.js', async: true },
        //
        //     // MathJax
        //     // { src: 'plugin/math/math.js', async: true }
        // ]

    });


    // Reveal.addEventListener( 'ready', function( event ) {
    //     new Clipboard('.email');
    //   initialize();
    // } );
    //

    // $('.email').click(function() {
    //   $('.emailText').show();
    //   setTimeout(function() {
    //     $('.emailText').fadeOut();
    //   }, 5000);
    // })


})();
