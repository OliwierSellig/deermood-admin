type LoginFormHeadingProps = {
  heading: string;
  subheading: string;
};

function LoginFormHeading({ heading, subheading }: LoginFormHeadingProps) {
  return (
    <header className="flex flex-col gap-2 text-center">
      <h1 className="text-2xl font-medium">{heading}</h1>
      <h2 className="text-sm font-medium text-primary-600">{subheading}</h2>
    </header>
  );
}

export default LoginFormHeading;
