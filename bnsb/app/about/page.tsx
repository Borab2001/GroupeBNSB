const About = () => {
    return (
        <div className="p-4">
            <h1 className="text-8xl py-24 font-medium">
                About
            </h1>
            
            <div className="w-full flex flex-row items-start justify-between">
                <p className="text-2xl font-medium">
                    2021 - Present
                </p>
                <div className="md:max-w-xl flex flex-col gap-2">
                    <h2 className="text-3xl font-medium">Foundation of BNSB</h2>
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ex nobis fugiat nam vel voluptatibus deserunt iusto.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default About;