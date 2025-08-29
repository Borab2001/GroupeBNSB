import SmoothScrollImage from "@/components/smooth-scroll-image";

const About = () => {

    const experiences = [
        {
            year: '2021 - Present',
            title: 'Foundation of BNSB',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ex nobis fugiat nam vel voluptatibus deserunt iusto.'
        },
        {
            year: '2021 - Present',
            title: 'Foundation of BNSB',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ex nobis fugiat nam vel voluptatibus deserunt iusto.'
        },
        {
            year: '2021 - Present',
            title: 'Foundation of BNSB',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ex nobis fugiat nam vel voluptatibus deserunt iusto.'
        }
    ];

    return (
        <div className="p-4 md:p-8">
            <div className="flex flex-col gap-y-24 py-24 border-b border-muted-foreground">
                <h1 className="text-5xl md:text-8xl font-medium">
                    About
                </h1>
                <p className="text-base md:text-lg text-muted-foreground">Everything started with lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. </p>

                <SmoothScrollImage
					scrollHeight={1500}
                    desktopImage="/images/istanbul.webp"
                    mobileImage="/images/istanbul.webp"
					initialClipPercentage={25}
					finalClipPercentage={75}
				/>
                
                <div className="w-full flex flex-col gap-24">
                    {experiences.map((experience, index) => (
                        <div key={index} className="w-full flex flex-row gap-8 items-start justify-between">
                            <p className="text-xl md:text-3xl font-medium">
                                {experience.year}
                            </p>
                            <div className="md:max-w-xl flex flex-col gap-2">
                                <h2 className="text-xl md:text-3xl font-medium">{experience.title}</h2>
                                <p className="text-muted-foreground text-md md:text-lg leading-relaxed">
                                    {experience.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default About;