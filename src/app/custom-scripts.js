define(["dojo/topic"], function(topic) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */

  // The application is ready
  topic.subscribe("tpl-ready", function(){
    // Add tabstop and click handlers to 
    var selectors =
      '#headerMobile span.menu-btn, ' +
      '#headerMobile span.share-btn, ' +
      '#headerMobile .menu-entry, ' +
      '#mobileInfoBtn, .mobileInfo, ' +
      '#footerMobile .embed-btn';
    $(selectors)
      .attr("tabindex", "0")
      .on('keydown', function (e) {
        if (e.keyCode === 13) {
          $(e.target).click();
          return false;
        }
      });
  });
});
