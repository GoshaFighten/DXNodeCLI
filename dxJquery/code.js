/// <reference path="C:/Program Files (x86)/DevExpress 16.1/DevExtreme/Sources/Lib/ts/jquery.d.ts" />
/// <reference path="C:/Program Files (x86)/DevExpress 16.1/DevExtreme/Sources/Lib/ts/dx.all.d.ts" />

$(function () {
    $("#btn").dxButton({
        text: "Click",
        onClick: function () {
            alert("Click!");
        }
    });
});