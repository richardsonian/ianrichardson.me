document.addEventListener('DOMContentLoaded', (event) => {
    // List of sentences
    var _CONTENT = [
        "Thinker.",
        "Maker.",
        "Electr",
        "Mechan",
        "Biomed",
        "Multidisciplinary Engineer.",
        "Programmer.",
        "Prototyper.",
        "3D Printing. Laser cutting. Machining.",
        "Design for manufacture."
    ];

    // Current sentence being processed
    var _PART = 0;

    // Character number of the current sentence being processed 
    var _PART_INDEX = 0;

    // Holds the handle returned from setInterval
    var _INTERVAL_VAL;

    // Element that holds the text
    var _ELEMENT = document.querySelector("#typewriter");

    // Implements typing effect
    function Type() { 
        var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
        _ELEMENT.innerHTML = "I'm a " + text;
        _PART_INDEX++;

        // If full sentence has been displayed then start to delete the sentence after some time
        if(text === _CONTENT[_PART]) {
            clearInterval(_INTERVAL_VAL);
            setTimeout(function() {
                _INTERVAL_VAL = setInterval(Delete, 50);
            }, 1000);
        }
    }

    // Implements deleting effect
    function Delete() {
        var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
        _ELEMENT.innerHTML = "I'm a " + text;
        _PART_INDEX--;

        // If sentence has been deleted then start to display the next sentence
        if(text === '') {
            clearInterval(_INTERVAL_VAL);

            // If last sentence then display the first one, else move to the next
            if(_PART == (_CONTENT.length - 1))
                _PART = 0;
            else
                _PART++;
            _PART_INDEX = 0;

            // Start to display the next sentence after some time
            setTimeout(function() {
                _INTERVAL_VAL = setInterval(Type, 100);
            }, 200);
        }
    }

    // Start the typing effect on load
    _INTERVAL_VAL = setInterval(Type, 100);    
});
