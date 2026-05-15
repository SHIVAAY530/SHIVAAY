/* =====================================
   SHIVAAY TECH SECURITY - FINAL
===================================== */

(function () {

    let blurActive = false;
    let blurTimer = null;


    /* INSTANT BLUR */
    function activateBlur(duration = 3000) {

        if (!document.body) return;

        clearTimeout(blurTimer);

        blurActive = true;

        document.body.style.transition = "filter 0s";
        document.body.style.filter = "blur(35px)";


        blurTimer = setTimeout(function () {

            if (document.visibilityState === "visible") {

                document.body.style.filter = "none";

                blurActive = false;

            }

        }, duration);

    }



    /* PERMANENT LOCK */
    function securityLock() {

        document.body.innerHTML = `
            <div style="
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
                background:#000;
                color:#fff;
                font-size:32px;
                font-weight:bold;
                text-align:center;
            ">
                SECURITY ALERT
            </div>
        `;
    }



    /* RIGHT CLICK */
    document.addEventListener("contextmenu", function (e) {

        e.preventDefault();

        activateBlur();

    }, true);



    /* TEXT SELECT */
    document.addEventListener("selectstart", function (e) {

        e.preventDefault();

        activateBlur();

    }, true);



    /* DRAG */
    document.addEventListener("dragstart", function (e) {

        e.preventDefault();

        activateBlur();

    }, true);



    /* COPY CUT PASTE */
    ["copy", "cut", "paste"].forEach(function (eventName) {

        document.addEventListener(eventName, function (e) {

            e.preventDefault();

            activateBlur();

        }, true);

    });



    /* KEYBOARD SECURITY */
    document.addEventListener("keydown", function (e) {

        const key = e.key.toLowerCase();



        /* PRINT SCREEN */
        if (
            e.key === "PrintScreen" ||
            e.code === "PrintScreen"
        ) {

            activateBlur();

            e.preventDefault();

            return false;
        }



        /* CTRL SHORTCUTS */
        if (
            e.ctrlKey &&
            ["c", "v", "x", "u", "s", "p", "a"].includes(key)
        ) {

            activateBlur();

            e.preventDefault();

            return false;
        }



        /* DEVTOOLS */
        if (
            e.key === "F12" ||

            (
                e.ctrlKey &&
                e.shiftKey &&
                ["i", "j", "c", "s"].includes(key)
            )
        ) {

            securityLock();

            e.preventDefault();

            return false;
        }

    }, true);



    /* PRINTSCREEN FALLBACK */
    document.addEventListener("keyup", function (e) {

        if (
            e.key === "PrintScreen" ||
            e.code === "PrintScreen"
        ) {

            activateBlur();

        }

    }, true);



    /* ALT TAB / SNIPPING TOOL */
    window.addEventListener("blur", function () {

        activateBlur();

    }, true);



    /* TAB SWITCH */
    document.addEventListener("visibilitychange", function () {

        if (
            document.visibilityState !== "visible"
        ) {

            activateBlur();

        }

    });



    /* MOUSE LEAVE SCREEN */
    document.addEventListener("mouseleave", function () {

        activateBlur();

    });



    /* DEVTOOLS SIZE CHECK */
    setInterval(function () {

        if (

            window.outerWidth - window.innerWidth > 150 ||

            window.outerHeight - window.innerHeight > 150

        ) {

            securityLock();

        }

    }, 300);



})();
