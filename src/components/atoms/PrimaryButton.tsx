interface PrimaryButtonProps {
  onClick?: () => void;  // onClickはオプションにする
  type?: "button" | "submit" | "reset";  // ボタンのtype属性を追加
  children: React.ReactNode;
  className?: string; 
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, type = "button", children }) => {
  return (
    <button
      onClick={onClick}
      type={type} // type属性を設定
      className="w-full p-2 text-lg font-bold bg-orange-600 text-white rounded-full cursor-pointer transition duration-300 mt-5 hover:bg-orange-400">
      {children}
    </button>
  );
};

export default PrimaryButton;
