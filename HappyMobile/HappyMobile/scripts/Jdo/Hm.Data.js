var Hm;
(function (Hm) {
    var Data;
    (function (Data) {
        var JsonClient;
        (function (JsonClient) {
            JsonClient.crud = {
                insert: function () { },
                update: function () { },
                delete: function () { },
                select: function () { }
            };
            var executionObject = (function () {
                function executionObject() {
                }
                return executionObject;
            }());
            JsonClient.executionObject = executionObject;
            (function (oparationType) {
                oparationType[oparationType["insert"] = 0] = "insert";
                oparationType[oparationType["update"] = 1] = "update";
                oparationType[oparationType["delete"] = 2] = "delete";
                oparationType[oparationType["select"] = 3] = "select";
            })(JsonClient.oparationType || (JsonClient.oparationType = {}));
            var oparationType = JsonClient.oparationType;
        })(JsonClient = Data.JsonClient || (Data.JsonClient = {}));
    })(Data = Hm.Data || (Hm.Data = {}));
})(Hm || (Hm = {}));
var Hm;
(function (Hm) {
    var Data;
    (function (Data) {
        var ExecuteQuery;
        (function (ExecuteQuery) {
            (function (webMethod) {
                webMethod[webMethod["Get"] = 0] = "Get";
                webMethod[webMethod["Post"] = 1] = "Post";
            })(ExecuteQuery.webMethod || (ExecuteQuery.webMethod = {}));
            var webMethod = ExecuteQuery.webMethod;
            var apiConnector = (function () {
                function apiConnector() {
                }
                apiConnector.prototype.callservice = function (url, data, method) {
                    var dfd = jQuery.Deferred();
                    $.ajax({
                        url: url,
                        method: (method == Hm.Data.ExecuteQuery.webMethod.Get) ? "GET" : "POST",
                        contentType: "application/json; charset=utf-8",
                        data: (method == webMethod.Get) ? data : JSON.stringify(data),
                        dataType: "json",
                        cache: false,
                        success: function (data) {
                            var value = data;
                            dfd.resolve(value);
                        },
                        error: function (xhr, textStatus, errorThrown) {
                            console.log(textStatus);
                            dfd.reject();
                        }
                    });
                    return dfd;
                };
                return apiConnector;
            }());
            ExecuteQuery.apiConnector = apiConnector;
        })(ExecuteQuery = Data.ExecuteQuery || (Data.ExecuteQuery = {}));
    })(Data = Hm.Data || (Hm.Data = {}));
})(Hm || (Hm = {}));
