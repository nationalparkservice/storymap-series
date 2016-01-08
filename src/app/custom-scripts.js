define(["dojo/topic"], function(topic) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */

  // The application is ready
  topic.subscribe("tpl-ready", function(){
    require(["storymaps/NpsBanner", "storymaps/common/utils/CommonHelper"], function(NpsBanner, CommonHelper) {
      var linkText = CommonHelper.getUrlParams().unit,
        linkUrl;
      if (!linkText) {
        linkText = app.data.getWebAppData().getHeaderLinkText();
        linkUrl = app.data.getWebAppData().getHeaderLinkURL();
      }
      // Hack to support links to UnitCodes from the query string
      if (!linkUrl && linkText.length == 4 && linkText.toUpperCase() == linkText) {
        linkUrl = "http://www.nps.gov/" + linkText;
      }
      NpsBanner.setContent(linkText, linkUrl);
    });
  });
});
