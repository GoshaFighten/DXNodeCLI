$(function () {
    var viewModel = {
        btn: {
            text: "Click",
            onClick: function () {
                alert("Click");
            }
        }
    };

    ko.applyBindings(viewModel);
})