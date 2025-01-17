const CustomTextField = ({value, set, hint, child}) => {
    return (
        <div className="relative">
            <input
        type="text"
        value={value}
        onChange={set}
        className="focus:border-[#84c4eb] focus:ring focus:ring-[#84c4eb] border-white border-2 p-3 rounded-lg w-full mb-4 bg-transparent pr-10"
        placeholder={hint}
      />
      <span className="absolute inset-y-5 right-0 flex items-start pr-3">
          {child}
        </span>
            </div>
    );
}

export default CustomTextField;