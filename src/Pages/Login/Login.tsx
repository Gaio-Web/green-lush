import { Typography, Input, Checkbox, Button } from "@material-tailwind/react";

export function SignIn() {
  return (
    <section className="grid h-screen items-center ">
      <div className="my-auto p-8 text-center sm:p-10 md:p-20 ">
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Bem vindo!
        </Typography>
        <Typography color="gray" className="mb-16">
          Insira seus dados para acessar o formulário de edição do seu site
        </Typography>

        <form action="#" className="mx-auto max-w-[24rem] text-left">
          <div className="mb-4">
            <Input size="lg" label="Email" type="email" name="email" />
          </div>
          <div className="mb-4">
            <Input size="lg" label="Password" type="password" name="password" />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Typography as="a" href="#" color="blue" className="font-medium">
              Esqueceu a senha?
            </Typography>
          </div>
          <Button size="md" className="mt-6" fullWidth>
            Acessar
          </Button>

          <Button
            variant="outlined"
            color="blue-gray"
            size="md"
            className="mt-4"
            fullWidth
          >
            Primeiro acesso
          </Button>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
