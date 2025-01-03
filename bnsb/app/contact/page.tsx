const Contact = () => {
    return (
        <div className="w-full flex flex-1 flex-col flex-grow h-full p-4 ">
            <div className="w-full flex flex-1 flex-col justify-center items-center">
                <div className="flex gap-4 flex-col">
                    <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                        Let&apos;s get in touch
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">You can reach us any time</p>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;