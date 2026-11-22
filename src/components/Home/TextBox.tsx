interface TextBoxProps {
  title: string;
  children: string;
}

export const TextBox = ({ title, children }: TextBoxProps) => {
  return (
    <li className="w-full lg:w-auto">
      <div className="min-h-37.5 w-full rounded-[10px] bg-white p-5 text-black shadow-[0_0_10px_0_rgb(0_0_0/0.1)] lg:min-h-52.5 lg:w-[25vw] [&>h4]:font-bold">
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </li>
  );
};
