$(document).ready(function () {
    
    // Search Tab Popup Click Event

    var popupBox = $(".cpc-dropdown");
    var popupBoxClose = $(".cpc-dropdown-close");

    $(".cpc-topbox-trigger").click(function () {
        if (popupBox.hasClass("active")) {
            this(popupBox.removeClass("active"));
        } else {
            this(popupBox.addClass("active"));
        }
    });

    popupBoxClose.click(function () {
        if (popupBox.hasClass("active")) {
            this(popupBox.removeClass("active"));
        }
    });


    $(function () {
        var today = new Date();
        //var lastDate = new Date("02/06/2017");

        $('input[name="datefilter"]').daterangepicker({
            autoUpdateInput: false,
            "minDate": today,
            "opens": "center",
            "autoApply": true,
            "locale": {
                "format": "MM/DD/YYYY",
                "separator": " - ",
                "applyLabel": "Añadir",
                "cancelLabel": "Limpiar",
                "fromLabel": "From",
                "toLabel": "To",
                "customRangeLabel": "Custom",
                "daysOfWeek": [
                    "Dom",
                    "Lun",
                    "Mar",
                    "Mie",
                    "Jue",
                    "Vie",
                    "Sab"
                ],
                "monthNames": ["Enero",
                    "Febrero",
                    "Marzo",
                    "Abril",
                    "Mayo",
                    "Junio",
                    "Julio",
                    "Agosto",
                    "Septiembre",
                    "Otubre",
                    "Noviembre",
                    "Diciembre"],
                "firstDay": 1
            }
        });

        $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        });

        $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
        });
        
        $('input[name="datefilterbkc"]').daterangepicker({
            "opens": "center",
            singleDatePicker: true,
            vautoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear'
            }
        });

    });


 });


 


