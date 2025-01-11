interface NumberDisplayProps {
  values: string;
}

export default function NumberDisplay({ values }: NumberDisplayProps) {
  return (
    <div className="grid grid-cols-4 w-2/3 h-">
      {values.split("").map((value, index) => (
        <div key={index} className={"flex justify-center items-center"}>
          <span className="text-[10vw] font-bold leading-none">{value}</span>
        </div>
      ))}
    </div>
  );
}
