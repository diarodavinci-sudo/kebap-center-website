/* =========================================================
   KEBAP CENTER
   EFFECTS.JS
   EXTRA ANIMATIONS
========================================================= */


/* =========================================================
   1. SCHWEBENDE FLAMMEN
========================================================= */

const fireContainer =
    document.getElementById("fire-container");


function createFire() {

    const fire =
        document.createElement("div");

    fire.textContent =
        Math.random() > .25
            ? "🔥"
            : "✨";

    fire.className =
        "floating-fire";

    fire.style.left =
        Math.random() * 100 + "vw";

    fire.style.bottom =
        "-50px";

    fire.style.fontSize =
        (10 + Math.random() * 28) + "px";

    fire.style.opacity =
        .15 + Math.random() * .4;

    fire.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    fireContainer.appendChild(fire);


    setTimeout(() => {

        fire.remove();

    }, 9000);

}


setInterval(
    createFire,
    650
);


/* =========================================================
   2. PARTIKEL
========================================================= */

const particles =
    document.getElementById("particles");


function createParticle() {

    const particle =
        document.createElement("span");

    particle.className =
        "particle";

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.bottom =
        "-10px";

    particle.style.animationDuration =
        (5 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        Math.random() * 2 + "s";

    particles.appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, 15000);

}


setInterval(
    createParticle,
    250
);


/* =========================================================
   3. 3D MOUSE EFFECT
========================================================= */

const food =
    document.querySelector(".food-3d");


if (food) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                event.clientX /
                window.innerWidth -
                .5;

            const y =
                event.clientY /
                window.innerHeight -
                .5;

            const rotateY =
                x * 25;

            const rotateX =
                y * -25;

            food.style.transform =
                `
                translateY(-10px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                `;

        }
    );

}


/* =========================================================
   4. 3D MENU CARDS
========================================================= */

document
.querySelectorAll(".food-item")
.forEach(item => {

    item.addEventListener(
        "mousemove",
        event => {

            const rect =
                item.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) /
                centerY) * -2;

            const rotateY =
                ((x - centerX) /
                centerX) * 2;

            item.style.transform =
                `
                perspective(700px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.01)
                `;

        }
    );


    item.addEventListener(
        "mouseleave",
        () => {

            item.style.transform =
                "";

        }
    );

});


/* =========================================================
   5. KLICK-FLAMME
========================================================= */

document.addEventListener(
    "click",
    event => {

        const flame =
            document.createElement("div");

        flame.textContent =
            "🔥";

        flame.style.position =
            "fixed";

        flame.style.left =
            event.clientX + "px";

        flame.style.top =
            event.clientY + "px";

        flame.style.fontSize =
            "25px";

        flame.style.zIndex =
            "99999";

        flame.style.pointerEvents =
            "none";

        flame.style.transition =
            "1s ease";

        document.body.appendChild(
            flame
        );


        requestAnimationFrame(() => {

            flame.style.transform =
                `
                translateY(-100px)
                scale(1.8)
                rotate(25deg)
                `;

            flame.style.opacity =
                "0";

        });


        setTimeout(() => {

            flame.remove();

        }, 1000);

    }
);


/* =========================================================
   6. BUTTON RIPPLE
========================================================= */

document
.querySelectorAll(".order-button")
.forEach(button => {

    button.addEventListener(
        "click",
        event => {

            const ripple =
                document.createElement("span");

            ripple.className =
                "button-ripple";

            const rect =
                button.getBoundingClientRect();

            ripple.style.left =
                event.clientX -
                rect.left +
                "px";

            ripple.style.top =
                event.clientY -
                rect.top +
                "px";

            button.appendChild(
                ripple
            );


            setTimeout(() => {

                ripple.remove();

            }, 700);

        }
    );

});


/* =========================================================
   7. PARALLAX FLAMMEN
========================================================= */

const heroFlames =
document.querySelectorAll(
    ".hero-flame"
);


document.addEventListener(
    "mousemove",
    event => {

        const x =
            event.clientX /
            window.innerWidth -
            .5;

        const y =
            event.clientY /
            window.innerHeight -
            .5;


        heroFlames.forEach(
            (flame, index) => {

                const strength =
                    (index + 1) * 15;

                flame.style.marginLeft =
                    `${x * strength}px`;

                flame.style.marginTop =
                    `${y * strength}px`;

            }
        );

    }
);


/* =========================================================
   8. TEXT GLOW
========================================================= */

const headings =
document.querySelectorAll(
    ".section-heading strong, .hero h1 span"
);


window.addEventListener(
    "scroll",
    () => {

        const scroll =
            window.scrollY;

        headings.forEach(
            heading => {

                const rect =
                    heading.getBoundingClientRect();

                if (
                    rect.top <
                    window.innerHeight &&
                    rect.bottom > 0
                ) {

                    const glow =
                        20 +
                        Math.sin(
                            scroll / 150
                        ) * 10;

                    heading.style.textShadow =
                        `
                        0 0 ${glow}px
                        rgba(255,40,20,.5)
                        `;

                }

            }
        );

    }
);


/* =========================================================
   9. HERO GLOW FOLGT MAUS
========================================================= */

const heroBackground =
document.querySelector(
    ".hero-background"
);


if (heroBackground) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                window.innerWidth -
                .5) * 30;

            const y =
                (event.clientY /
                window.innerHeight -
                .5) * 30;

            heroBackground.style.transform =
                `
                translate(${x}px, ${y}px)
                `;

        }
    );

}


/* =========================================================
   10. KONSOLE
========================================================= */

console.log(
    "🔥 effects.js gestartet"
);

console.log(
    "🔥 Flammen aktiv"
);

console.log(
    "✨ Partikel aktiv"
);

console.log(
    "🎮 3D-Mouse-Effekt aktiv"
);