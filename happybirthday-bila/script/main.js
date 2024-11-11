window.addEventListener('load', () => {
    Swal.fire({
        title: 'Bila mau buka web ini dengan musik?',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'IYA (MAKSA NI DAN CUMA SATU OPSI)',  // Mengubah teks tombol konfirmasi menjadi 'Yes'
        cancelButtonText: 'No',   // Mengubah teks tombol cancel menjadi 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});

// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = gsap.timeline();

    tl.to(".container", { duration: 0.6, visibility: "visible" })
      .from(".one", { duration: 0.7, opacity: 0, y: 10 })
      .from(".two", { duration: 0.4, opacity: 0, y: 10 })
      .to(".one", { duration: 0.7, opacity: 0, y: 10 }, "+=3.5")
      .to(".two", { duration: 0.7, opacity: 0, y: 10 }, "-=1")
      .from(".three", { duration: 0.7, opacity: 0, y: 10 })
      .to(".three", { duration: 0.7, opacity: 0, y: 10 }, "+=3")
      .from(".four", { duration: 0.7, scale: 0.2, opacity: 0 })
      .from(".fake-btn", { duration: 0.3, scale: 0.2, opacity: 0 })
      .staggerTo(
          ".hbd-chatbox span",
          1.5, {
              visibility: "visible",
          },
          0.05
      )
      .to(".fake-btn", { duration: 0.1, backgroundColor: "rgb(127, 206, 248)" }, "+=4")
      .to(".four", { duration: 0.5, scale: 0.2, opacity: 0, y: -150 }, "+=1")
      .from(".idea-1", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-1", { duration: 0.7, ...ideaTextTransLeave }, "+=2.5")
      .from(".idea-2", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-2", { duration: 0.7, ...ideaTextTransLeave }, "+=2.5")
      .from(".idea-3", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-3 strong", { duration: 0.5, scale: 1.2, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff" })
      .to(".idea-3", { duration: 0.7, ...ideaTextTransLeave }, "+=2.5")
      .from(".idea-4", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-4", { duration: 0.7, ...ideaTextTransLeave }, "+=2.5")
      .from(".idea-5", { 
          duration: 0.7, 
          rotationX: 15, 
          rotationZ: -10, 
          skewY: "-5deg", 
          y: 50, 
          z: 10, 
          opacity: 0 
      }, "+=1.5")
      .to(".idea-5 span", { duration: 0.7, rotation: 90, x: 8 }, "+=1.4")
      .to(".idea-5", { duration: 0.7, scale: 0.2, opacity: 0 }, "+=2")
      .staggerFromTo(
          ".idea-6 span",
          0.8, {
              scale: 3,
              opacity: 0,
              rotation: 15,
              ease: "expo.out"
          }, {
              scale: 1,
              opacity: 1,
              rotation: 0,
              stagger: 0.2
          }
      )
      .staggerTo(
          ".idea-6 span",
          0.8, {
              scale: 3,
              opacity: 0,
              rotation: -15,
              ease: "expo.out"
          },
          0.2,
          "+=1.5"
      )
      .staggerFromTo(
          ".baloons img",
          2.5, {
              opacity: 0.9,
              y: 1400,
          }, {
              opacity: 1,
              y: -1000,
              ease: "power1.out"
          },
          0.2
      )
      .from(".profile-picture", { duration: 0.5, scale: 3.5, opacity: 0, x: 25, y: -25, rotationZ: -45 }, "-=2")
      .from(".hat", { duration: 0.5, x: -100, y: 350, rotation: -180, opacity: 0 })
      .staggerFrom(
          ".wish-hbd span",
          0.7, {
              opacity: 0,
              y: -50,
              // scale: 0.3,
              rotation: 150,
              skewX: "30deg",
              ease: "elastic.out(1, 0.5)",
          },
          0.1
      )
      .staggerFromTo(
          ".wish-hbd span",
          0.7, {
              scale: 1.4,
              rotationY: 150,
          }, {
              scale: 1,
              rotationY: 0,
              color: "#ff69b4",
              ease: "expo.out",
              stagger: 0.1
          },
          "party"
      )
      .from(
          ".wish h5",
          { duration: 0.5, opacity: 0, y: 10, skewX: "-15deg" },
          "party"
      )
      .staggerTo(
          ".eight svg",
          1.5, {
              visibility: "visible",
              opacity: 0,
              scale: 80,
              repeat: 3,
              repeatDelay: 1.4,
              ease: "power2.out"
          },
          0.3
      )
      .to(".six", { duration: 0.5, opacity: 0, y: 30, zIndex: "-1" })
      .from(".nine p", { duration: 1, ...ideaTextTrans, stagger: 1.2 })
      .to(".last-smile", { duration: 0.5, rotation: 90 }, "+=1")
      // Menambahkan animasi untuk tombol "Lanjutkan" di akhir timeline
      .call(() => {
          const redirectBtn = document.getElementById('redirectBtn');
          // Tampilkan tombol dengan animasi fade-in dan slide-up
          gsap.to(redirectBtn, { 
              duration: 1, 
              opacity: 1, 
              y: 0, 
              display: 'block', 
              ease: 'power2.out' 
          });
          redirectBtn.classList.add('show'); // Menambahkan kelas untuk styling tambahan jika diperlukan
      });

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    if(replyBtn) {
        replyBtn.addEventListener("click", () => {
            tl.restart();
        });
    }

    // Menambahkan Event Listener untuk tombol "Lanjutkan"
    const redirectBtn = document.getElementById('redirectBtn');
    if (redirectBtn) {
        redirectBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah aksi default link

            Swal.fire({
                title: 'Apakah kamu yakin ingin melanjutkan?',
                text: "Kamu akan diarahkan ke halaman baru,bila akan menemukan kejutan yang seru di halaman selanjutnya",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, lanjutkan!'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = redirectBtn.getAttribute('href');
                }
            });
        });
    }
}
