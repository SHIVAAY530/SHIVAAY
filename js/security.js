/* =====================================
   SHIVAAY TECH SECURITY - PRODUCTION
===================================== */

(function () {

    let blurActive = false;

    function activateBlur() {

        if (blurActive) return;

        blurActive = true;

        if (document.body) {
            document.body.style.filter = "blur(30px)";
        }

        setTimeout(function () {

            if (document.body) {
                document.body.style.filter = "none";
            }

            blurActive = false;

        }, 2000);
    }


    // RIGHT CLICK BLOCK
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, true);


    // TEXT SELECTION BLOCK
    document.addEventListener("selectstart", function (e) {
        e.preventDefault();
    }, true);


    // DRAG BLOCK
    document.addEventListener("dragstart", function (e) {
        e.preventDefault();
    }, true);


    // COPY / CUT / PASTE BLOCK
    ["copy", "cut", "paste"].forEach(function (event) {

        document.addEventListener(event, function (e) {
            e.preventDefault();
        }, true);

    });


    // KEYBOARD SECURITY
    document.addEventListener("keydown", function (e) {

        const key = e.key.toLowerCase();


        // PRINT SCREEN
        if (
            e.key === "PrintScreen" ||
            e.code === "PrintScreen"
        ) {

            activateBlur();

            e.preventDefault();

            return false;
        }


        // CTRL SHORTCUTS
        if (
            e.ctrlKey &&
            ["c", "v", "x", "u", "s", "p", "a"].includes(key)
        ) {

            e.preventDefault();

            return false;
        }


        // F12
        if (e.key === "F12") {

            activateBlur();

            e.preventDefault();

            return false;
        }


        // CTRL + SHIFT + I / J / C / S
        if (
            e.ctrlKey &&
            e.shiftKey &&
            ["i", "j", "c", "s"].includes(key)
        ) {

            activateBlur();

            e.preventDefault();

            return false;
        }

    }, true);


    // PRINTSCREEN FALLBACK
    document.addEventListener("keyup", function (e) {

        if (
            e.key === "PrintScreen" ||
            e.code === "PrintScreen"
        ) {

            activateBlur();
        }

    }, true);


    // SNIPPING TOOL / ALT+TAB / WINDOW SWITCH
    window.addEventListener("blur", function () {

        activateBlur();

    });


    window.addEventListener("focus", function () {

        if (document.body) {
            document.body.style.filter = "none";
        }

        blurActive = false;

    });


    // DEVTOOLS DETECTION
    setInterval(function () {

        if (
            window.outerWidth - window.innerWidth > 160 ||
            window.outerHeight - window.innerHeight > 160
        ) {

            document.body.innerHTML =
                "<div style='display:flex;justify-content:center;align-items:center;height:100vh;background:#000;color:#fff;font-size:32px;font-weight:bold;'>SECURITY ALERT</div>";
        }

    }, 1000);

})();