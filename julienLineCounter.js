(function( $ ){
  $.julienLineCounter = {version: 0.2};

  $.julienLineCounter = function( jqSelector ) {
    var nLines = 0;
    var $elm = $(jqSelector);
    if ($elm.length == 0) { return false; }
    var elmHeight = $elm.innerHeight();
    var lineHeight = $elm.css('line-height');

    // Uh oh! A 'normal' line-height! What's the value in pixels?
    if (lineHeight == 'normal') {
      var htmlCache = $elm.html();      // cache its current content
      $elm.html('&nbsp;');              // we want its height when it has only ONE line
      lineHeight = $elm.innerHeight();  // measure it with only one line
      $elm.html(htmlCache);             // put back its content
    }

    var numLineHeight = parseFloat(lineHeight);
    nLines = elmHeight / numLineHeight;

    return nLines;
  };

})( jQuery );
