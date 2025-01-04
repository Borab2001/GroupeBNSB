
interface ParagraphProps {
    value: string;
}

const Paragraph: React.FC<ParagraphProps> = ({value}) => {    
    return (
        <div className="h-[500vh]">
            <p className="sticky top-0 w-full flex items-center justify-center h-screen text-xl md:text-5xl leading-relaxed tracking-tight text-muted-foreground p-24">
                {value}
            </p>
        </div>
    );
}
 
export default Paragraph;