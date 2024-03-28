interface ImageUploadButtonProps {
  onImageSelect: (file: File) => void;
}

const ImageUploadButton: React.FC<ImageUploadButtonProps> = ({ onImageSelect }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <label className="block">
      <span className="sr-only">Add pics</span>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="cursor-pointer rounded border border-gray-300 p-2 text-sm text-gray-700 bg-white hover:bg-gray-50"

      />
    </label>
  );
};

export default ImageUploadButton;
