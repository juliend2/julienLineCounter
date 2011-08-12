(function( $ ){
  $.julienLineCounter = {version: 0.1};

  $.julienLineCounter = function( jqSelector ) {
    var nLines = 0;
    var $elm = $(jqSelector);
    if ($elm.length == 0) { return false; }
    var elmHeight = $elm.height();
    var lineHeight = $elm.css('line-height');

    // Uh oh! A 'normal' line-height! What's the value in pixels?
    if (lineHeight == 'normal') {
      var htmlCache = $elm.html();      // cache its current content
      $elm.html('&nbsp;');              // we want its height when it has only ONE line
      lineHeight = $elm.innerHeight();  // measure it with only one line
      $elm.html(htmlCache);             // put back its content
    }

    var intLineHeight = parseInt(lineHeight, 10);
    nLines = elmHeight / intLineHeight;

    return nLines;
  };

})( jQuery );
