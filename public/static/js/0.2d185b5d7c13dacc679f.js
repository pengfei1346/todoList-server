webpackJsonp([0, 1], {
    "8hXn": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var a = n("pjeT"), o = n("mtWM"), i = n.n(o), l = {
            name: "index", components: {list: a.default}, data: function () {
                return {clientData: "", todoTitle: ""}
            }, methods: {
                getData: function () {
                    var t = this;
                    i.a.get("/get").then(function (e) {
                        t.clientData = e.data.data, console.log(t.clientData)
                    })
                }, addData: function () {
                    var t = this;
                    this.todoTitle.trim() ? i.a.post("/add", {title: this.todoTitle}).then(function (e) {
                        console.log(e.data), 200 == e.data.code ? (alert("添加成功"), t.$router.go(0)) : alert("添加失败")
                    }) : alert("请输入内容")
                }, deleteData: function (t) {
                    var e = this;
                    i.a.delete("/delete/" + t).then(function (t) {
                        console.log(t), 200 == t.data.code ? (alert("删除成功"), e.$router.go(0)) : alert("删除失败")
                    })
                }, doData: function (t, e) {
                    var n = this, a = e ? 1 : 0;
                    i.a.patch("/update/" + t, {isDone: a}).then(function (t) {
                        console.log(t.data), 200 == t.data.code ? (alert("修改成功"), n.$router.go(0)) : alert("修改失败")
                    })
                }, handleShow: function (t) {
                    document.querySelector("#inp")
                }
            }, mounted: function () {
                this.getData()
            }
        }, c = {
            render: function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "index"}, [n("h1", [t._v("todoList")]), t._v(" "), n("div", {staticClass: "middle"}, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.todoTitle,
                        expression: "todoTitle"
                    }], attrs: {type: "text"}, domProps: {value: t.todoTitle}, on: {
                        input: function (e) {
                            e.target.composing || (t.todoTitle = e.target.value)
                        }
                    }
                }), t._v(" "), n("button", {on: {click: t.addData}}, [t._v("添加")])]), t._v(" "), n("ul", t._l(t.clientData, function (e) {
                    return n("li", {key: e.index, class: {done: e.isDone}}, [n("div", {
                        attrs: {id: "top"},
                        on: {dblclick: t.handleShow}
                    }, [t._v(t._s(e.title))]), t._v(" "), n("span", {
                        attrs: {id: "del", type: "x"},
                        on: {
                            click: function (n) {
                                t.deleteData(e._id)
                            }
                        }
                    }, [t._v("x")]), t._v(" "), n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.isDone,
                            expression: "item.isDone"
                        }],
                        attrs: {type: "checkbox"},
                        domProps: {checked: Array.isArray(e.isDone) ? t._i(e.isDone, null) > -1 : e.isDone},
                        on: {
                            change: [function (n) {
                                var a = e.isDone, o = n.target, i = !!o.checked;
                                if (Array.isArray(a)) {
                                    var l = t._i(a, null);
                                    o.checked ? l < 0 && t.$set(e, "isDone", a.concat([null])) : l > -1 && t.$set(e, "isDone", a.slice(0, l).concat(a.slice(l + 1)))
                                } else t.$set(e, "isDone", i)
                            }, function (n) {
                                t.doData(e._id, e.isDone)
                            }]
                        }
                    })])
                }))])
            }, staticRenderFns: []
        };
        var d = n("VU/8")(l, c, !1, function (t) {
            n("peIz")
        }, "data-v-46918f25", null);
        e.default = d.exports
    }, fX7G: function (t, e) {
    }, peIz: function (t, e) {
    }, pjeT: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var a = n("mtWM"), o = n.n(a), i = {
            name: "list", props: {arr: {type: Array}}, data: function () {
                return {clientData: "", todoTitle: ""}
            }, methods: {
                getData: function () {
                    var t = this;
                    o.a.get("http://localhost:3000/get").then(function (e) {
                        t.clientData = e.data.data
                    })
                }
            }
        }, l = {
            render: function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "index"}, [n("ul", t._l(t.clientData, function (e) {
                    return n("li", {key: e.index}, [t._v(t._s(e.title))])
                }))])
            }, staticRenderFns: []
        };
        var c = n("VU/8")(i, l, !1, function (t) {
            n("fX7G")
        }, "data-v-0fca826d", null);
        e.default = c.exports
    }
});
//# sourceMappingURL=0.2d185b5d7c13dacc679f.js.map