$(document).ready(function () {
    $.ajax({
        type: 'get',
        url: '/getDepartures',
        success: function (data) {
            $.each(data, function (key, value) {
                for (var i = 0; i < value.length; i++) {
                    $('#from')
                        .append($("<option></option>")
                            .attr("value", value[i].code)
                            .text(value[i].name));
                }
            });
            $('#from').select2();
            $('#s2id_from').css("margin-left", "-12px");
        }
    });

    $.ajax({
        type: 'get',
        url: '/getDestinations/',
        success: function (data) {
            $.each(data, function (key, value) {
                for (var i = 0; i < value.length; i++) {
                    $('#to')
                        .append($("<option></option>")
                            .attr("value", value[i].code)
                            .text(value[i].name));
                }
            });
            $('#to').select2();
            $('#s2id_to').css("margin-left", "-12px");
        }
    });

    $('#from').on('change', function () {
        $("#to").empty();
        $.ajax({
            type: 'get',
            url: '/getDestinations/' + this.value,
            success: function (data) {
                $.each(data, function (key, value) {
                    for (var i = 0; i < value.length; i++) {
                        $('#to')
                            .append($("<option></option>")
                                .attr("value", value[i].code)
                                .text(value[i].name));
                    }
                });
            }
        });
    });

});
