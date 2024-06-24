export default function AuthLayout({ children }) {
  return (
    <div className="auth-wrapper">
      <h2 className="font-black text-5xl">Invento</h2>
      {children}
      <div className="max-w-sm text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        nemo!
      </div>
    </div>
  );
}
