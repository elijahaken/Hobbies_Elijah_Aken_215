$(document).ready(function () {
    $('#calculate').click(function () {
        // Validate input
        var hours = $('#hours').val();
        if (hours <= 0 || isNaN(hours)) {
            alert('Please enter a positive number for hours.');
            return;
        }

        // Perform calculation
        var rate = $('#rate').val();
        var total = hours * rate;
        $('#total').val(total.toFixed(2)); // Set the total cost with two decimal places
    });
});
