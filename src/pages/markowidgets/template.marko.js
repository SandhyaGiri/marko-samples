function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __browser_json = require.resolve("./browser.json"),
      __loadTag = __helpers.t,
      lasso_page_tag = __loadTag(require("lasso/taglib/page-tag")),
      lasso_head_tag = __loadTag(require("lasso/taglib/head-tag")),
      app_hello_mw_tag = __loadTag(require("../../components/app-hello-mw")),
      click_count_tag = __loadTag(require("../../components/click-count")),
      app_reverse_tag = __loadTag(require("../../components/app-reverse")),
      forEachWithStatusVar = __helpers.fv,
      lasso_body_tag = __loadTag(require("lasso/taglib/body-tag")),
      init_widgets_tag = __loadTag(require("marko-widgets/taglib/init-widgets-tag"));

  return function render(data, out) {
    lasso_page_tag({
        name: "markowidgets",
        packagePath: __browser_json,
        dirname: __dirname,
        filename: __filename
      }, out);

    out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Marko Widgets demo</title>");

    lasso_head_tag({}, out);

    out.w("</head><body><h1>Marko Widgets demo</h1>");

    app_hello_mw_tag({
        firstName: data.firstName,
        lastName: data.lastName
      }, out);

    click_count_tag({}, out);

    app_reverse_tag({
        firstName: data.firstName,
        lastName: data.lastName
      }, out);

    if (notEmpty(data.colors)) {
      out.w("<ul>");

      forEachWithStatusVar(data.colors, function(color, loop) {
        out.w("<li>" +
          escapeXml(color) +
          " - " +
          escapeXml(loop.getIndex() + 1) +
          " of " +
          escapeXml(loop.getLength()) +
          "</li>");
      });

      out.w("</ul>");
    } else {
      out.w("<div>There are no colors.</div>");
    }

    lasso_body_tag({}, out);

    init_widgets_tag({}, out);

    out.w("</body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
