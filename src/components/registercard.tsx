export function RegisterCard() {
  return (
    <>
      <div className="flex flex-col">
        <label className="text-fulvouscolor font-semibold" htmlFor="fullname">
          Nome Completo
        </label>
        <input
          type="text"
          id="fullname"
          className="outline-none rounded h-10 px-3 bg-gray-400 text-white placeholder-gray-100"
          placeholder="Digite seu nome completo"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="text-fulvouscolor font-semibold" htmlFor="username">
          Nome de Usuário
        </label>
        <input
          type="text"
          id="username"
          className="outline-none rounded h-10 px-3 bg-gray-400 text-white placeholder-gray-100"
          placeholder="Digite seu nome de usuário"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="text-fulvouscolor font-semibold" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="outline-none rounded h-10 px-3 bg-gray-400 text-white placeholder-gray-100"
          placeholder="Digite seu email"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="text-fulvouscolor font-bold" htmlFor="password">
          Senha
        </label>
        <input
          type="password"
          id="password"
          className="outline-none rounded h-10 px-3 bg-gray-400 text-white placeholder-gray-100"
          placeholder="Digite sua senha"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-fulvouscolor rounded font-semibold text-gray-100 h-10 hover:bg-fulvoushover px-6"
      >
        Cadastrar
      </button>
    </>
  );
}
