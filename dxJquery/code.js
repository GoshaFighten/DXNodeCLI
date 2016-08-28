/// <reference path="C:/Program Files (x86)/DevExpress 16.1/DevExtreme/Sources/Lib/ts/jquery.d.ts" />
/// <reference path="C:/Program Files (x86)/DevExpress 16.1/DevExtreme/Sources/Lib/ts/dx.all.d.ts" />

$(function () {
    $("#grid").dxDataGrid({
        dataSource: data,
        columns: ["orderID", {
            dataField: "orderDate",
            dataType: "date"
        }, "customerName", "shipCountry", "shipCity"],
        filterRow: {
            visible: true
        },
        headerFilter: {
            visible: true
        },
        groupPanel: {
            visible: true
        },
        summary: {
            totalItems: [{
                column: "shipCity",
                summaryType: "count"
            }],
            groupItems: [{
                summaryType: "count"
            }]
        }
    });
});