$(function () {
    var viewModel = {
        grid: {
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
        }
    };

    ko.applyBindings(viewModel);
});