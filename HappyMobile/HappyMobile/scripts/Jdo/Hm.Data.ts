module Hm.Data.JsonClient {

 
    export var crud = {

        insert: function (): any { },
        update: function (): any { },
        delete: function (): any{ },
        select: function (): any { }
    }


    export class executionObject {

        tableName: string;
        execute: any;
        oparationType: oparationType;
    }


    export enum oparationType {
        insert = 0,
        update = 1,
        delete = 2,
        select = 3
    }
}

module Hm.Data.ExecuteQuery {


    export enum webMethod {
        Get = 0,
        Post = 1
    }

    export class apiConnector {

        callservice(url: string, data: any, method: webMethod): JQueryDeferred<any> {
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
        }
    }
}

