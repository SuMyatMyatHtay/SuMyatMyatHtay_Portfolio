type Props = {
  id: string;
  label: string;
  title: string;
  body: string;
};

export default function SectionTitle({ id, label, title, body }: Props) {
  return (
    <div id={id} className="max-w-3xl">
      <div className="inline-block rounded-2xl border-[3px] border-[#181818] bg-[#ffd84d] px-4 py-2 text-sm font-bold shadow-[4px_4px_0_#181818]">
        {label}
      </div>
      <h2 className="mt-5 text-4xl font-bold sm:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-[#3c3c3c]">{body}</p>
    </div>
  );
}