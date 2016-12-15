function create(__helpers) {
  var __widgetType = {
          name: "/airline$1.0.0/src/components/click-count/index",
          def: function() {
            return require("./index.js");
          }
        },
      __markoWidgets = require("marko-widgets"),
      __widgetAttrs = __markoWidgets.attrs,
      str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      w_widget_tag = __loadTag(require("marko-widgets/taglib/widget-tag")),
      attr = __helpers.a,
      attrs = __helpers.as,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    w_widget_tag({
        type: __widgetType,
        _cfg: data.widgetConfig,
        _state: data.widgetState,
        _props: data.widgetProps,
        _body: data.widgetBody,
        renderBody: function renderBody(out, widget) {
          out.w("<div" +
            attr("id", widget.id) +
            attrs(__widgetAttrs(widget)) +
            "><div>You clicked the button " +
            escapeXml(data.clickCount) +
            " " +
            escapeXml(data.timesMessage) +
            ".</div><button type=\"button\" data-w-onclick=\"handleButtonClick|" +
            escapeXmlAttr(widget.id) +
            "\">Click Me</button></div>");
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
