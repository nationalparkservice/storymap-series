/**
 * Created by regan_sarwas on 12/31/15.
 */
define(["storymaps/NpsUnits", "lib-build/css!storymaps/nps"],
  function(units, css) {
    function setContent(unitcode, link)
      {
        var nameElement = $("#npsUnitName").children('h1'),
          typeElement = $("#npsUnitType"),
          locationElement = $("#npsUnitLocation");
        if (unitcode in units) {
          if (link) {
            nameElement.html('<a href="'+link + '" target="blank">' + units[unitcode].name + '</a>');
          } else {
            nameElement.html(units[unitcode].name);
          }
          typeElement.html(units[unitcode].type);
          locationElement.html(units[unitcode].state);
        } else {
          var headerparts = unitcode.split("|");
          if (link) {
            nameElement.html('<a href="'+link + '" target="blank">' + headerparts[0] + '</a>');
          } else {
            nameElement.html(headerparts[0]);
          }
          if (headerparts.length > 1) {
            typeElement.html(headerparts[1]);
          }
          if (headerparts.length > 2) {
            locationElement.html(headerparts[2]);
          }
        }
      }
    return {
      setContent: setContent
    };
  }
);