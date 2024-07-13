const BreakPointHelper = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex w-full space-x-4 bg-green-400 p-2 text-xs sm:bg-blue-600 md:bg-red-600 lg:bg-yellow-300 xl:bg-indigo-400 2xl:bg-pink-500">
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
