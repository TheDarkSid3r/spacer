$(() => {
    const generateSpaces = (elem) => " ".repeat(Math.max(0, $("#".concat(elem, "-spaces")).val()));
    const update = () => {
        $(".output").val($(".input").val().trim().split(" ").map(w => w.split("").join(generateSpaces("char"))).join(generateSpaces("word")));
    };

    $("input,.input").on("input", update);
});