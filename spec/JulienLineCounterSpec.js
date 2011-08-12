describe("JulienLineCounter", function() {

  describe("when no element is found", function(){
    it("should return false", function(){
      expect($.julienLineCounter('#cantbefound')).toEqual(false);
    });
  });

  describe("when an element has some text in it", function(){

    it("should return something", function(){
      expect($.julienLineCounter("#test01")).toBeTruthy();
      expect($.julienLineCounter("#test02")).toBeTruthy();
      expect($.julienLineCounter("#no-line-height")).toBeTruthy();
    });

    it("should return the right answer", function(){
      expect($.julienLineCounter("#test01")).toBe(10);
      expect($.julienLineCounter("#test02")).toBe(10);
      expect($.julienLineCounter("#no-line-height")).toBe(11);
    });

  });

  describe("when an element has no text in it", function(){
    it("should return false", function(){
      expect($.julienLineCounter('#empty')).toBe(0);
    });
  });

});
