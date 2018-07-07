$(function() {
    $(".catalog__item-order span").on("click", function() {
        var input = $(this)
            .closest(".catalog__item-order")
            .find("input"); // инпут
        var min = input.attr("min");
        var step = parseInt(input.attr("step"));
        var value = parseInt(input.val()) || 0;
        if ($(this).data("count") === "minus") {
            if (value - step > min) value = value - step;
            else value = min;
        } else if ($(this).data("count") === "plus") value = value + step;
        input.val(value).change();
    });
});
