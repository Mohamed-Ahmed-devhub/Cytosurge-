(function () {
    if (window.location.hash === "#submitted") {
        history.replaceState(null, null, window.location.pathname);
        return;
    }

    const loaderHTML = `
        <div id="ultimate-loader">
            <div class="loader-text-wrap">
                <h1 id="loader-name">M.AHMED</h1>
                <div id="loader-perc">0%</div>
                <div class="loader-bar" id="l-bar"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", loaderHTML);

    let progress = 0;
    const percText = document.getElementById("loader-perc");
    const bar = document.getElementById("l-bar");
    const loader = document.getElementById("ultimate-loader");

    const interval = setInterval(() => {
        progress += 7;
        if (progress > 100) progress = 100;
        percText.innerText = progress + "%";
        if (bar) bar.style.width = progress + "%";

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add("loader-finish");
                document.body.style.overflow = "auto";
                setTimeout(() => loader.remove(), 1000);
            }, 400);
        }
    }, 30);
    document.body.style.overflow = "hidden";
})();



document.addEventListener("DOMContentLoaded", function () {
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1800,
            once: true,
            offset: 100,
            easing: "ease-out-quart",
        });
    }

    const textElement = document.querySelector(".content-box h1 span");
    if (textElement && !window.hasStartedTyping) {
        window.hasStartedTyping = true;
        const text = "Digital Art";
        let index = 0;
        textElement.textContent = "";

        function typeEffect() {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 150);
            }
        }
        setTimeout(typeEffect, 1000);
    }

    if (typeof VANTA !== "undefined") {
        VANTA.NET({
            el: "#particles-js",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x1e3a8a,
            backgroundColor: 0x050505,
            points: 8.0,
            maxDistance: 15.0,
            spacing: 20.0,
            showDots: true,
        });
    }

    if (typeof VanillaTilt !== "undefined") {
        VanillaTilt.init(document.querySelectorAll(".visual-box, .node"), {
            max: 15,
            speed: 1000,
            glare: false,
            "full-page-listening": false,
            scale: 1,
            reset: true,
        });
    }

    if (typeof emailjs !== "undefined") {
        emailjs.init("r0hEdpoF7-P7ukGGs");
        const contactForm = document.getElementById("contact-form");
        if (contactForm) {
            contactForm.addEventListener("submit", function (event) {
                event.preventDefault();
                const btn = contactForm.querySelector("button");
                const btnSpan = btn.querySelector("span") || btn;
                btn.disabled = true;
                const originalText = btnSpan.innerText;
                btnSpan.innerText = "Sending Proposal... 🚀";

                emailjs
                    .sendForm("service_97usb9a", "template_cfdpqpf", contactForm)
                    .then(
                        function () {
                            alert("Done! Your message reached Mohamed. ✅");
                            btn.disabled = false;
                            btnSpan.innerText = originalText;
                            contactForm.reset();
                        },
                        function (error) {
                            alert("Oops! Something went wrong.");
                            btn.disabled = false;
                            btnSpan.innerText = originalText;
                        },
                    );
            });
        }
    }
});



function startSiteMagic() {
    const textElement = document.querySelector(".content-box h1 span");
    if (textElement) {
        const text = "Digital Art";
        let index = 0;
        textElement.textContent = "";
        function type() {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 150);
            }
        }
        setTimeout(type, 500);
    }

    const skillBars = document.querySelectorAll(".skill-per");
    skillBars.forEach((bar, i) => {
        setTimeout(() => {
            const width = bar.getAttribute("data-width");
            bar.style.width = width;
        }, i * 300);
    });

    if (typeof VANTA !== "undefined") {
        VANTA.NET({
            el: "#particles-js",
            mouseControls: true,
            touchControls: true,
            color: 0x1e3a8a,
            backgroundColor: 0x050505,
            points: 8.0,
            maxDistance: 15.0,
            spacing: 20.0,
        });
    }
}

function launchWelcome() {
    if (sessionStorage.getItem("mega_welcome_done")) return;
    let checkSwal = setInterval(() => {
        if (typeof Swal !== "undefined") {
            clearInterval(checkSwal);
            Swal.fire({
                title: '<span style="color:#a855f7">M.AHMED</span> UNIVERSE',
                html: '<div style="text-align:center"><p style="color:#ddd; font-size:14px">Digital Artist & Full-Stack Developer</p><hr style="border-color:rgba(168,85,247,0.2)"><p style="color:#fff; margin-top:15px">Are you ready to explore the future of Tech?</p></div>',
                iconHtml:
                    '<img src="https://cdn-icons-png.flaticon.com/512/1356/1356479.png" style="width:60px">',
                background: "#0a0a0a",
                backdrop: "rgba(0,0,0,0.9) blur(10px)",
                confirmButtonText: "ENTER THE CORE ⚡",
                confirmButtonColor: "#a855f7",
                allowOutsideClick: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    sessionStorage.setItem("mega_welcome_done", "true");
                    if (typeof startSiteMagic === "function") startSiteMagic();
                }
            });
        }
    }, 100);
}

launchWelcome();

document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".star-rating i");
    const container = document.getElementById("reviews-container");
    const nameInp = document.getElementById("user-name");
    const textInp = document.getElementById("user-comment");
    const submitBtn = document.getElementById("submit-review");
    const startBtn = document.getElementById("start-rec");
    const stopBtn = document.getElementById("stop-rec");

    let selectedRating = 0;
    let mediaRecorder;
    let audioChunks = [];
    let audioBase64 = null;
    let isRecording = false;
    let myId =
        localStorage.getItem("u_id") ||
        "id_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("u_id", myId);

    loadReviews();

    stars.forEach((s) => {
        s.onclick = (e) => {
            selectedRating = e.target.dataset.value;
            stars.forEach((st) => st.classList.replace("bxs-star", "bx-star"));
            for (let i = 0; i < selectedRating; i++)
                stars[i].classList.replace("bx-star", "bxs-star");
        };
    });

    startBtn.onclick = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            audioChunks = [];
            isRecording = true;

            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.4";
            submitBtn.style.cursor = "not-allowed";

            startBtn.style.display = "none";
            stopBtn.style.display = "flex";
            mediaRecorder.ondataavailable = (e) => audioChunks.push(e.data);
            mediaRecorder.onstop = () => {
                const blob = new Blob(audioChunks, { type: "audio/mp3" });
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    audioBase64 = reader.result;
                    showVoicePreview(audioBase64);
                };
                isRecording = false;
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
                submitBtn.style.cursor = "pointer";
            };
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Mic Error",
                text: "Please allow microphone access!",
                background: "#111",
                color: "#fff",
            });
        }
    };

    stopBtn.onclick = () => {
        mediaRecorder.stop();
        stopBtn.style.display = "none";
        startBtn.style.display = "flex";
    };

    function showVoicePreview(src) {
        let old = document.getElementById("v-preview");
        if (old) old.remove();
        document.querySelector(".voice-row").insertAdjacentHTML(
            "afterend",
            `
            <div id="v-preview" style="margin-top:10px;"><audio src="${src}" controls style="width:100%; height:30px; filter:invert(1);"></audio></div>
        `,
        );
    }

    submitBtn.onclick = () => {
        if (isRecording) return;
        if (!nameInp.value.trim()) {
            Swal.fire({
                icon: "error",
                title: "Missing Name",
                text: "Please tell us who you are!",
                background: "#111",
                color: "#fff",
            });
            return;
        }
        if (selectedRating === 0) {
            Swal.fire({
                icon: "info",
                title: "Rating Needed",
                text: "Please select stars!",
                background: "#111",
                color: "#fff",
            });
            return;
        }
        if (!textInp.value.trim() && !audioBase64) {
            Swal.fire({
                icon: "error",
                title: "Empty Review",
                text: "Write something or record a voice!",
                background: "#111",
                color: "#fff",
            });
            return;
        }

        Swal.fire({
            title: "Confirm Posting?",
            text: "Your feedback will be live! ✨",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Post Now 🚀",
            cancelButtonText: "Cancel",
            background: "#050505",
            color: "#fff",
            confirmButtonColor: "#a855f7",
        }).then((res) => {
            if (res.isConfirmed) saveReview();
        });
    };

    function saveReview() {
        const review = {
            id: Date.now(),
            owner: myId,
            name: nameInp.value,
            rating: selectedRating,
            text: textInp.value,
            audio: audioBase64,
            reply: null,
            reactions: { like: [], heart: [], wow: [] },
            replyReactions: { like: [], heart: [] },
            date: new Date().toLocaleString(),
        };
        let db = JSON.parse(localStorage.getItem("myReviews")) || [];
        db.push(review);
        localStorage.setItem("myReviews", JSON.stringify(db));

        window.location.href = window.location.pathname + "#submitted";
        window.location.reload();
    }

    window.toggleReaction = (id, type, isReply = false) => {
        let db = JSON.parse(localStorage.getItem("myReviews")) || [];
        const idx = db.findIndex((r) => r.id === id);
        if (idx === -1) return;
        let target = isReply ? db[idx].replyReactions : db[idx].reactions;
        if (!target)
            target = isReply
                ? { like: [], heart: [] }
                : { like: [], heart: [], wow: [] };
        Object.keys(target).forEach((key) => {
            const uIdx = target[key].indexOf(myId);
            if (uIdx !== -1) target[key].splice(uIdx, 1);
        });
        if (target[type].indexOf(myId) === -1) target[type].push(myId);
        if (isReply) db[idx].replyReactions = target;
        else db[idx].reactions = target;
        localStorage.setItem("myReviews", JSON.stringify(db));
        loadReviews();
    };

    window.addReply = (id) => {
        Swal.fire({
            title: "Admin Access",
            input: "password",
            inputPlaceholder: "Enter Password",
            background: "#111",
            color: "#fff",
            confirmButtonColor: "#a855f7",
        }).then((res) => {
            if (res.value === "0000") {
                Swal.fire({
                    title: "Your Response",
                    input: "textarea",
                    background: "#111",
                    color: "#fff",
                }).then((reply) => {
                    if (reply.value) {
                        let db = JSON.parse(localStorage.getItem("myReviews")) || [];
                        const idx = db.findIndex((r) => r.id === id);
                        db[idx].reply = reply.value;
                        localStorage.setItem("myReviews", JSON.stringify(db));
                        loadReviews();
                    }
                });
            } else if (res.value) {
                Swal.fire({
                    icon: "error",
                    title: "Wrong Password",
                    background: "#111",
                    color: "#fff",
                });
            }
        });
    };

    window.delRev = (id) => {
        Swal.fire({
            title: "Delete Review?",
            input: "password",
            inputPlaceholder: "Admin Password",
            showCancelButton: true,
            background: "#111",
            color: "#fff",
        }).then((res) => {
            if (res.value === "0000") {
                let db = JSON.parse(localStorage.getItem("myReviews")) || [];
                localStorage.setItem(
                    "myReviews",
                    JSON.stringify(db.filter((r) => r.id !== id)),
                );
                loadReviews();
            } else if (res.value) {
                Swal.fire({
                    icon: "error",
                    title: "Unauthorized",
                    background: "#111",
                    color: "#fff",
                });
            }
        });
    };

    function loadReviews() {
        let db = JSON.parse(localStorage.getItem("myReviews")) || [];
        container.innerHTML = db
            .reverse()
            .map((r) => {
                const rs = r.reactions || { like: [], heart: [], wow: [] };
                const rRs = r.replyReactions || { like: [], heart: [] };
                return `
            <div class="review-post">
                <div class="avatar" style="background:${stc(r.name)}; display:flex; align-items:center; justify-content:center; font-family:inherit;">${r.name.trim().charAt(0)}</div>
                <div style="flex:1">
                    <h5 style="color:#a855f7; margin:0;">${r.name}</h5>
                    <div style="color:#ffb800; font-size:10px;">${"★".repeat(r.rating)}</div>
                    <p style="font-size:13px; color:#ddd; margin:5px 0;">${r.text || ""}</p>
                    ${r.audio ? `<audio src="${r.audio}" controls style="width:100%; height:25px; filter:invert(1)"></audio>` : ""}
                    <div class="react-bar" style="margin-top:8px; display:flex; gap:10px;">
                        <span onclick="toggleReaction(${r.id}, 'like')" style="cursor:pointer; font-size:11px; color:${rs.like.includes(myId) ? "#a855f7" : "#555"}">👍 ${rs.like.length}</span>
                        <span onclick="toggleReaction(${r.id}, 'heart')" style="cursor:pointer; font-size:11px; color:${rs.heart.includes(myId) ? "#ff4d4d" : "#555"}">❤️ ${rs.heart.length}</span>
                        <span onclick="toggleReaction(${r.id}, 'wow')" style="cursor:pointer; font-size:11px; color:${rs.wow.includes(myId) ? "#ffb800" : "#555"}">😮 ${rs.wow.length}</span>
                    </div>
                    ${r.reply
                        ? `
                    <div style="margin-top:12px; padding:10px; background:rgba(168,85,247,0.05); border-left:3px solid #a855f7; border-radius:8px;">
                        <div style="display:flex; align-items:center; gap:8px;">
                        <img src="/image/Watts.jpeg"  style="width:33px; height:33px;
                        border-radius:50%; border:1px solid #621473e8; object-fit:cover;">
                            <span style="color:#a855f7; font-size:18px; font-weight:bold;">ENG-M.AHMED 🧑‍💻⚡</span>
                        </div>
                        <p style="font-size:12px; color:#bbb; margin:5px 0 8px 33px;">${r.reply}</p>
                        <div style="margin-left:33px; display:flex; gap:10px;">
                            <span onclick="toggleReaction(${r.id}, 'like', true)" style="cursor:pointer; font-size:10px; color:${rRs.like.includes(myId) ? "#a855f7" : "#555"}">👍 ${rRs.like.length}</span>
                            <span onclick="toggleReaction(${r.id}, 'heart', true)" style="cursor:pointer; font-size:10px; color:${rRs.heart.includes(myId) ? "#ff4d4d" : "#555"}">❤️ ${rRs.heart.length}</span>
                    </div>
                    </div>`
                        : ""
                    }
                </div>
                <div style="display:flex; flex-direction:column; gap:8px;">
                    <button onclick="delRev(${r.id})" style="background:none; border:none; color:#ff4d4d; cursor:pointer;"><i class='bx bx-trash'></i></button>
                    <button onclick="addReply(${r.id})" style="background:none; border:none; color:#a855f7; cursor:pointer;"><i class='bx bx-reply'></i></button>
                </div>
            </div>`;
            })
            .join("");
    }

    function stc(s) {
        let h = 0;
        for (let i = 0; i < s.length; i++) h = s.charCodeAt(i) + ((h << 5) - h);
        return `hsl(${h % 360}, 60%, 50%)`;
    }
});
