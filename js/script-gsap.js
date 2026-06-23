(function ($) {
    'use strict';

	/* ================================
       Smooth Scroller And Title Animation Js Start
    ================================ */
    if ($('#smooth-wrapper').length && $('#smooth-content').length) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

        gsap.config({
            nullTargetWarn: false,
        });

        let smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: false,
            ignoreMobileResize: true,
        });
    }

	 /* ================================
       Text Anim Js Start
    ================================ */

  /* ================================
       Text Title Animation Js Start
    ================================ */

   if (typeof gsap !== "undefined") {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        let mm = gsap.matchMedia();

        mm.add("(min-width: 1200px)", () => {

            let splits = [];

            // ===== tz-sub-tilte =====
            $('.tz-sub-tilte').each(function (index, el) {

            let split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "split-line"
            });

            splits.push(split);

            gsap.set(split.chars, {
                opacity: 0,
                x: 7
            });

            gsap.to(split.chars, {
                scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "top 60%",
                scrub: 1
                },
                x: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2
            });
            });

            // ===== tz-itm-title =====
            $('.tz-itm-title').each(function (index, el) {

            let split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "split-line"
            });

            splits.push(split);

            gsap.set(split.chars, {
                opacity: 0.3,
                x: -7
            });

            gsap.to(split.chars, {
                scrollTrigger: {
                trigger: el,
                start: "top 92%",
                end: "top 60%",
                scrub: 1
                },
                x: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2
            });
            });

            // 🔥 MOST IMPORTANT PART
            ScrollTrigger.refresh();

            // 🔥 cleanup on breakpoint change
            return () => {
            splits.forEach(split => split.revert());
            ScrollTrigger.getAll().forEach(st => st.kill());
            };

        });
    }

    if ($('.char-animation').length > 0) {
		let char_come = gsap.utils.toArray(".char-animation");
		char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 90%',
				end: 'bottom 60%',
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'

			}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
			gsap.set(splitTextLine, { perspective: 300 });
			itemSplitted.split({ type: "chars, words" })
			tl.from(itemSplitted.chars,
			{
				duration: 1,
				delay: 0.5,
				x: 100,
				autoAlpha: 0,
				stagger: 0.05
			});
		});
		}
    
     /* ================================
       Service Panel Js Start
    ================================ */

	let sv = gsap.matchMedia();
	sv.add("(min-width: 1199px)", () => {
		let tl = gsap.timeline();
		let projectpanels = document.querySelectorAll('.tp-service-panel');
		let baseOffset = 50;
		let offsetIncrement = 10;

		projectpanels.forEach((section, index) => {
			let topOffset = baseOffset + (index * offsetIncrement);
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: `top ${topOffset}px`,
					end: "bottom 50%",
					endTrigger: '.tp-service-pin',
					pinSpacing: false,
					markers: false,
				},
			});
		});
	});
	

})(jQuery);

