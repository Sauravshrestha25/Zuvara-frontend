import Link from "next/link";

interface ButtonProps {
  content: string;
  link: string;
}

const Button = ({ content, link }: ButtonProps) => {
  return (
    <div className="w-fit">
      <Link
        href={link}
        className="inline-block bg-foreground hover:bg-teal-800 text-white! font-semibold px-6 py-3 transition rounded-full"
      >
        {content}
      </Link>
    </div>
  );
};

export default Button;
