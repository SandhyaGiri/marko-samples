function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      app_hello_tag = __loadTag(require("../../components/app-hello")),
      app_reverse_tag = __loadTag(require("../../components/app-reverse")),
      forEachWithStatusVar = __helpers.fv;

  return function render(data, out) {
    out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Marko demo</title></head><body><h1>Marko demo</h1>");

    app_hello_tag({
        firstName: data.firstName,
        lastName: data.lastName
      }, out);

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

    out.w("</body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
