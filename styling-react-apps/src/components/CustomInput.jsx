export default function CustomInput({ label, isInValid, ...props }) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase" ;

  if(isInValid){
    labelClasses += " text-red-400";
  } else {
    labelClasses += " text-stone-300";
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300" {...props} />
    </p>
  );
}