$(document).ready(function () {
    $('.destinations #India').click(function () {
        $.get("india.html", function (data, status) {
            $('#countryData').html(data);
        });
    });
    $('.destinations #Nigeria').click(function () {
        $.get("Nigeria.html", function (data, status) {
            $('#countryData').html(data);
        });
    });
     $('.destinations #Zimbabwe').click(function () {
        $.get("Zimbabwe.html", function (data, status) {
            $('#countryData').html(data);
        });
    });

    let country = $(this).val();
    $.get("https://restcountries.com/v3.1/all?fields=name,capital", function (data) {
        $(data).each(function (index, element) {
            let capital;
            if (element.capital && element.capital.length > 0) {
                capital = element.capital[0];
            }
            else {
                capital = "No Capital";
            }
            $("#countryInput").prepend("<option>" + element.name.common + " - "
                + element.name.official + " - " + capital + "</option>");

        });
    });
});















// Zimbabwe
// Zimbabwe - Republic of Zimbabwe



