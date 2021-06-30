const Label = ({ label }: { label: string }) => {
  return (
    <div className="content__label heading--strong color--clear heading--big mb:6">
      {label}
    </div>
  );
};

export default Label;
