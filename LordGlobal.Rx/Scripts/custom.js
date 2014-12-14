$(document).ready(function () {
    $("#loginForm").bootstrapValidator({
        message: null,
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'User name is required'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Password is required'
                    }
                }
            }
        }
    });
});

/*code for progress bar of registration page*/

$('.next').click(function () {

    var nextId = $(this).parents('.tab-pane').next().attr("id");
    $('[href=#' + nextId + ']').tab('show');
    return false;

})

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

    //update progress
    var step = $(e.target).data('step');
    var percent = (parseInt(step) / 3) * 100;

    $('.progress-bar').css({ width: percent + '%' });
    $('.progress-bar').text("Step " + step + " of 3");

    //e.relatedTarget // previous tab

})

$('.first').click(function () {

    $('#myWizard a:first').tab('show')

})

