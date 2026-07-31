interface Props {
  message: string;
}

export default function ErrorState({ message }: Props) {
  return (
    <div className="text-center py-10">
      <h2 className="text-red-600 text-xl">
        {message}
      </h2>
    </div>
  );
}