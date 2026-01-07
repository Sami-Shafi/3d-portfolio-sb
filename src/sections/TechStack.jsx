import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackImgs } from "../constants";

const TechStack = () => {
	// Animate the tech cards in the skills section
	useGSAP(() => {
		// This animation is triggered when the user scrolls to the #skills wrapper
		// The animation starts when the top of the wrapper is at the center of the screen
		// The animation is staggered, meaning each card will animate in sequence
		// The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
		gsap.fromTo(
			".tech-card",
			{
				// Initial values
				y: 50, // Move the cards down by 50px
				opacity: 0, // Set the opacity to 0
			},
			{
				// Final values
				y: 0, // Move the cards back to the top
				opacity: 1, // Set the opacity to 1
				duration: 1, // Duration of the animation
				ease: "power2.inOut", // Ease of the animation
				stagger: 0.2, // Stagger the animation by 0.2 seconds
				scrollTrigger: {
					trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
					start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
				},
			}
		);
	});

	return (
		<div id="skills" className="flex-center section-padding">
			<div className="w-full h-full md:px-10 px-5">
				<TitleHeader
					title="Tools of my Arsenal"
					sub="🤝 Most-used Technologies"
				/>
				<div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-auto gap-4 mt-16">
					{techStackImgs.map(({ name, imgPath }, index) => (
						<div
							key={index}
							className="group relative aspect-square flex flex-col items-center justify-center gap-4 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 overflow-hidden"
						>
							<img
								src={imgPath}
								alt={name}
								className="object-contain lg:grayscale group-hover:grayscale-0 transition-all duration-500"
							/>
							<span className="lg:opacity-0 lg:transition-opacity lg:duration-700 lg:ease-in-out group-hover:opacity-100">
								{name}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TechStack;
