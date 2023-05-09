function AuthLayout({ children }) {
  return (
    <div className="flex h-screen w-screen justify-center items-center overflow-hidden bg-slate-100">
      {children}
    </div>
  );
}

export default AuthLayout;
