const BreakPointHelper = () => {
  return (
    <div className="bg-green-400 sm:bg-blue-600 md:bg-red-600 lg:bg-yellow-300 xl:bg-indigo-400 2xl:bg-pink-500 fixed top-0 left-0 text-xs flex space-x-4 p-2 z-50 w-full">
      <div>xs: green</div>
      <div>sm: blue</div>
      <div>md: red</div>
      <div>lg: yellow</div>
      <div>xl: indigo</div>
      <div>2xl: pink</div>
    </div>
  );
};

export default BreakPointHelper;
